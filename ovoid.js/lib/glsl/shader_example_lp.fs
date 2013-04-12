/** OvoiD.JS - Fragment Shader Example - LP
 * 
 * Fragment shader example for per-light passes (LP) Drawer pipeline. The LP 
 * pipeline uses render passes to successively apply lighting to objets with one
 * light per passes. Usually, the first pass is dedicated to ambient lighting so
 * the shader uses boolean uniforms to choose whether ambient or diffuse 
 * lighting must be computed.
 */

precision highp float;
uniform bool ENd; // Diffuse lighting enabled flag
uniform bool ENa; // Abient lighting enabled flag
uniform vec4 Ep; // Eye (camera) position
uniform vec4 Ac; // Scene ambient color
uniform vec4 Lp; // Light position
uniform vec3 Ld; // Light direction
uniform vec4 Lc; // Light color
uniform float Li; // Light intensity
uniform float Lr; // Light range
uniform float Lf; // Light falloff
uniform float La; // Light spot-angle
uniform vec4 Md; // Material diffuse color
uniform vec4 Ma; // Material ambient color
uniform vec4 Ms; // Material specular color
uniform vec4 Me; // Material emissive color
uniform vec4 Mr; // Material reflection color
uniform float Mi; // Material shininess 
uniform float My; // Material reflecitivy
uniform float Mo; // Material overall opacity
uniform sampler2D Sa; // Ambient texture sampler
uniform sampler2D Sd; // Diffuse texture sampler
uniform sampler2D Ss; // Specular texture sampler
uniform sampler2D Se; // Emissive texture sampler
uniform sampler2D Sr; // Reflection texture sampler
uniform vec4 Fc; // Fog color
uniform float Fd; // Fog density
varying vec4 Vp; // Vertex position
varying vec3 Vn; // Vertex normal
varying vec2 Vu; // Vertex texture coordinates

vec4 Td;
float LT, Fw, Dw, Sw, Fz, Ff;
vec3 EV, R, LV;
vec2 Ru;
	
void main(void){	

  EV=normalize(Ep-Vp).xyz;
  // Initialize color
  gl_FragColor=vec4(0.0,0.0,0.0,0.0);
  Td=texture2D(Sd,Vu);
  
  // Compute ambient lighting
  if(ENa){ // Is ambient lighting enabled ?
    // Ambient component
    gl_FragColor=(Ma*Md*Td)*Ac;
    // Emissive component
    gl_FragColor+=(Me*texture2D(Se,Vu));
    // Reflection component
    if(My!=0.0){
      R=normalize(reflect(EV,Vn));
      Ru=(R.xy/(2.0*(1.0+abs(R.z))))+0.5;
      gl_FragColor+=(Mr*texture2D(Sr,Ru))*My;
    }
    // Adjust alpha
    gl_FragColor.a=Td.a*Mo;
  }
  
  // Compute diffuse lighting
  if(ENd){ // Is diffuse lighting enabled ?
  
    // Light weight according spot angle and falloff
    if(Lp.w==1.0){ // Check if light is directionnal
      LV=normalize(Lp-Vp).xyz;
      LT=max(dot(Vn,LV),0.0);
      Fw=clamp((-dot(LV,Ld)-(cos(La)))/(Lf),0.0,1.0);
    }else{
      LV=Ld;
      LT=max(dot(Vn,LV),0.0);
      Fw=1.0;
    }
    // Finale diffuse light weight
    Dw=LT*Li*Fw;
    // Specular component
    R=normalize(reflect(-LV,Vn));
    Sw=(pow(max(dot(R,EV),0.0),Mi))*Fw;
    gl_FragColor+=(Md*Td)*((Lc*Li)*Dw);
    // Adjust alpha
    gl_FragColor.a=Td.a*Mo;
    // Apply specular
    gl_FragColor+=(Ms*texture2D(Ss,Vu))*((Lc*Li)*Sw);
    
    // Add fog
    if(Fd>0.0){
      Fz=gl_FragCoord.z/gl_FragCoord.w;
      Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);
      gl_FragColor=mix(Fc,gl_FragColor,Ff);
    }
  }
}
