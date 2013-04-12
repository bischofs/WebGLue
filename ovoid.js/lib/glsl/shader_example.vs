/** OvoiD.JS - Vertex shader example - Simple or Skinning weighted vertex
 * 
 * This shader can be used for normal or skinning weighted vertex 
 * transformation. The weighted computation is enabled through a boolean 
 * uniform. The transform and normal matrices are stored in arrays which can be 
 * entirely filled or with only one transform and normal matrix.
 */

#define MA 24 // Maximum transformation matrices
attribute vec4 p; // Vertex position
attribute vec3 n; // Vertex normal
attribute vec3 u; // Vertex texture coordinates
attribute vec4 i; // Vertex bones's matrix indices
attribute vec4 w; // Vertex bones weight
uniform bool ENw; // Enabled weighted vertex flag
uniform mat4 MEV; // Eyeview matrix (Projection * lookat)
uniform mat4 MXF[MA]; // Transformation matrices array
uniform mat3 MNR[MA]; // Normal matrices array
varying vec4 Vp; // Vertex position
varying vec3 Vn; // Vertex normal
varying vec2 Vu; // Vertex texture coordinates

void main(void){

  if(ENw) { // Should apply weights to this vertex ?
    // initialize vertex
    Vp=vec4(0.0,0.0,0.0,0.0);
    Vn=vec3(0.0,0.0,0.0);
    // Apply weighted transfom
    Vp+=(MXF[int(i.x)]*p)*w.x;
    Vn+=(MNR[int(i.x)]*n)*w.x;
    Vp+=(MXF[int(i.y)]*p)*w.y;
    Vn+=(MNR[int(i.y)]*n)*w.y;
    Vp+=(MXF[int(i.z)]*p)*w.z;
    Vn+=(MNR[int(i.z)]*n)*w.z;
    Vp+=(MXF[int(i.w)]*p)*w.w;
    Vn+=(MNR[int(i.w)]*n)*w.w;
  } else {
    // Transform vertex
    Vp=MXF[0]*p;
    Vn=MNR[0]*n;
  }
  // Copy texture coordinates
  Vu=u.xy;
  // Apply transformed vertex
  gl_Position=MEV*Vp;
}
