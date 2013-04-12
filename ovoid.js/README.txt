--------------------------------------------------------------------------------
 OvoiD.JS - WebGL Wrapper Library
--------------------------------------------------------------------------------
 Copyright (C) 2011 - 2012  Eric Mahieu.

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <http://www.gnu.org/licenses/>.
--------------------------------------------------------------------------------

OvoiD.JS is a WebGL based mixed low-level and middleware library including 
sound, interactive and physics for 3D Web applications and games developpment. 

OvoiD.JS is an attempt to keep together high-level functions and 
low-level customisations through an modular and onion architecture.

OvoiD.JS main features:

- Full nodal scene architecture.
- Optimized 3D and mathematical classes collection.
- Low-level WebGL wrapper classes, including:
  - Custom vertex format.
  - GLSL shader wrapper.
  - GLSL wrapping system for custom syntax.
- Canvas/Frame management.
- COLLADA scene importer, supporting:
 - Light, camera, material, mesh, texture.
 - Animations, Skinning.
- JSON scene exporter/importer.
- WebGL Rendering engine, including:
  - Custom shaders's integration system.
  - Layered by-shaders rendering passes.
  - Separated "rendering pipeline" system.
  - Functions collection for rendering process customisation.
  - Pointsprite or Billboard based Particles rendering.
  - Z-Fail shadow casting (shadow volums).
  - Overlay (fake 2D) objets rendering.
  - Texture mapped font rendering.
  - Offscreen Mouse-Picking system.
- Physics engine, including:
  - Physics simulation.
  - Collisions detection and response.
- Spatial Sound system (depending browser).
- Input management, including:
  - Mouse and keyboard interuption managment.
  - Mouse and keyboard binding.
  - 3D cursor (unproject system).
- Interactives nodes and mechanisms, including:
  - Expression node for custom procedural animations.
  - Action node for custom interaction events scripting, including:
    - Keyboard or mouse events.
    - Bouding spheres intersections events.
  - Physics collisions handling.
  - Animations handling.
- Debuging tools.


For more information, documentation and samples see
the OvoiD.JS project home page at : http://www.ovoid.org/js/

--------------------------------------------------------------------------------
DOCUMENTATION
--------------------------------------------------------------------------------
OvoiD.JS Library's reference documentation is available at 
http://www.ovoid.org/js/doc/

--------------------------------------------------------------------------------
BUG REPPORTS & CONTACT
--------------------------------------------------------------------------------

E-mail: root (@) ovoid.org
Blog page: http://www.ovoid.org/?page_id=412
GitHub: https://github.com/sedenion/ovoid.js/
