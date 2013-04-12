/** OvoiD.JS - Fragment Shader Example - 1P
 * 
 * Fragment shader example for One-Passe (1P) Drawer pipeline. The 1P pipeline 
 * uses uniform arrays to store several lights's attributes and compute all at 
 * once under a loop.
 */

#define ML 8 // Maximum light count
precision highp float;
uniform vec4 Ep; // Eye (camera) position
uniform vec4 Ac; // Scene Ambient color
uniform vec4 Lp[ML]; // Light position
uniform vec3 Ld[ML]; // Light direction
uniform vec4 Lc[ML]; // Light color
uniform float Li[ML]; // Light intensity
uniform float Lr[ML]; // Light range
uniform float Lf[ML]; // Light falloff value
uniform float La[ML]; // Light spot-angle value
uniform bool Le[ML]; // Light enabled flag
uniform vec4 Md; // Material diffuse color
uniform vec4 Ma; // Material ambient color
uniform vec4 Ms; // Material specular color
uniform vec4 Me; // Material emissive color
uniform vec4 Mr; // Material reflect color
uniform float Mi; // Material shininess
uniform float My; // Material reflectivity
uniform float Mo; // Material overall opacity
uniform sampler2D Sa; // Ambient texture sampler
uniform sampler2D Sd; // Diffuse texture sampler
uniform sampler2D Ss; // Specular texture sampler
uniform sampler2D Se; // Emissive texture sampler
uniform sampler2D Sr; // Reflexion texture sampler
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
  Td=texture2D(Sd,Vu);
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
  // For each lights
  for(int i=0;i<ML;i++){
    // Diffuse and specular components
    if(Le[i]){ // Is light enabled ?
      // Light weight according spot angle and falloff
      if(Lp[i].w==1.0){  // Check if light is directionnal
        LV=normalize(Lp[i]-Vp).xyz;
        LT=max(dot(Vn,LV),0.0);
        Fw=clamp((-dot(LV,Ld[i])-(cos(La[i])))/(Lf[i]),0.0,1.0);
      }else{
        LV=Ld[i];
        LT=max(dot(Vn,LV),0.0);
        Fw=1.0;
      }
      // Finale diffuse light weight
      Dw=LT*Li[i]*Fw;
      // Specular component
      R=normalize(reflect(-LV,Vn));
      Sw=(pow(max(dot(R,EV),0.0),Mi))*Fw;
      gl_FragColor+=(Md*Td)*((Lc[i]*Li[i])*Dw);
      // Adjust alpha
      gl_FragColor.a=Td.a*Mo;
      // Apply specular
      gl_FragColor+=(Ms*texture2D(Ss,Vu))*((Lc[i]*Li[i])*Sw);
    }
  }
  // Add fog
  if(Fd>0.0){
    Fz=gl_FragCoord.z/gl_FragCoord.w;
    Ff=clamp(exp2(-Fd*Fd*Fz*Fz*1.442695),0.0,1.0);
    gl_FragColor=mix(Fc,gl_FragColor,Ff);
  }
}
