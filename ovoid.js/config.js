/* --------------------- OvoiD.JS Library Global Options ----------------------- */

/* ----------------------------- MAIN OPTIONS ------------------------------- */
/* Environment: Default library path. */
Ovoid.opt_libPath = 'ovoid.js/lib/'
/* Environment: Log verbose level */
Ovoid.opt_logLevel = 2; // 0: disabled, 1: errors only, 2: errors+warinings, 3: all.
/* Environment: Avoid browser cache (force (re)load source files) and force Body/Layer pickability */
Ovoid.opt_debugMode = true;
/* Environment: Dsiable alert messages */
Ovoid.opt_disableAlerts = true;
/* Environment: Enable local wheighted vertices data (perforance hit) */
Ovoid.opt_localSkinData = true;
/* Display: Show or hide Head-Up Display */
Ovoid.opt_showHud = true;
/* Display: Show or hide debug frame */
Ovoid.opt_showDebug = true;
/* WebGL Context option: Enable or disable transparent canvas */
Ovoid.opt_alpha = false;
/* WebGL Context option: Enable or disable preserve Drawing buffer (needed for picking) */
Ovoid.opt_preserveDrawingBuffer = true;
/* WebGL Context option: Enable or disable anti-aliasing */
Ovoid.opt_antialias = true;
/* WebGL Context option: Enable or disable stencil buffer */
Ovoid.opt_stencil = true;
/* WebGL Context option: Enable or disable premultiplied alpha */
Ovoid.opt_premultipliedAlpha = true;
/* Environment: Default fontmap Texture source image URL */
Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_DroidSansMono.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_monofonto.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_UbuntuMono.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_texgyrecursor.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_OxygenMono.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_NotCourierSans.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_DejaVuSansMono.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_AurulentSansMono.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_Anonymous.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_VeraMono.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_CPMonoPlain.png";
//Ovoid.opt_defaultFontmapUrl = Ovoid.opt_libPath + "maps/font_saxmono.png";
/* Environment: Default fontmap Texture filtering */
Ovoid.opt_defaultFontmapFilter = true;
/* Global gravity vector */
Ovoid.opt_gravity = [0.0,-9.8,0.0];

/* --------------------------- FRAME OPTIONS -------------------------------- */
/* Frame mode */
Ovoid.Frame.opt_frameMode = Ovoid.FRAME_FULL_CLIENT;


/* --------------------------- QUEUER OPTIONS ------------------------------- */
/* Enable or disable view culling */
Ovoid.Queuer.opt_viewcull = true; 
/* Enable or disable light culling */
Ovoid.Queuer.opt_lightcull = true;
/* Enable or disable intersection detection */
Ovoid.Queuer.opt_intersect = true;
/* Default camera position */
Ovoid.Queuer.opt_defaultCameraPos = [0.0, 0.0, 5.0];
/* Default camera rotation */
Ovoid.Queuer.opt_defaultCameraRot = [0.0, 0.0, 0.0];

/* --------------------------- DRAWER OPTIONS ------------------------------- */
/* Canvas clearing color */
Ovoid.Drawer.opt_clearColor = [1.0, 1.0, 1.0, 1.0];
/* Global ambient lighting color */
Ovoid.Drawer.opt_ambientColor = [0.2, 0.2, 0.2, 1.0];
/* Global fog/atmosphere color */
Ovoid.Drawer.opt_fogColor = [1.0, 1.0, 1.0, 1.0];
/* Global fog/atmosphere density */
Ovoid.Drawer.opt_fogDensity = 0.0;
/* Interactive Read-Pixels Picking mode */
Ovoid.Drawer.opt_pickingMode = 0;
/* Level of performance (0 = low-end rendering, 1 = per-vertex lighting, 2 = per-pixel lighting) */
Ovoid.Drawer.opt_lopLevel = 2;
/* Enable or disable adaptative level of performance */
Ovoid.Drawer.opt_adaptativeLop = false;
/* Adaptative level of performance threshold (fps) */
Ovoid.Drawer.opt_adaptiveLopThreshold = 45;
/* Enable or disable per-light pass render */
Ovoid.Drawer.opt_perLightPass = true;
/* Enable or disable Z-fail shadow casting */
Ovoid.Drawer.opt_shadowCasting = true; 
/* Z-fail shadow casting object exclusion tolerence (object minimum size) */
Ovoid.Drawer.opt_shadowCastingExclusion = 0.8; 
/* Enable or disable layers (overlay objets) draws */
Ovoid.Drawer.opt_drawLayers = true;
/* Enable or disable helpers draws */
Ovoid.Drawer.opt_drawHelpers = true; 
/* Enable or disable (helpers) axis draws */
Ovoid.Drawer.opt_drawAxis = true; 
/* Enable or disable (helpers) bounding boxes draws */
Ovoid.Drawer.opt_drawBoundingBox = true;
/* Enable or disable (helpers) bounding sphere draws */
Ovoid.Drawer.opt_drawBoundingSphere = true; 
/* Enable or disable (helpers) joints and bones draws */
Ovoid.Drawer.opt_drawJointBones = true; 
/* Enable or disable (helpers) light draws */
Ovoid.Drawer.opt_drawLights = true;
/* Enable or disable (helpers) camera draws */
Ovoid.Drawer.opt_drawCameras = true; 
/* Enable or disable (helpers) face normal draws */
Ovoid.Drawer.opt_drawNormals = false;
/* Joint helpers's size */
Ovoid.Drawer.opt_jointSize = 2.0;
/* Normals scale */
Ovoid.Drawer.opt_normalScale = 0.7;

/* --------------------------- LOADER OPTIONS ------------------------------- */
/* Draw the Wait screen or let blank during loading process */
Ovoid.Loader.opt_drawWaitScreen = true;
/* Wait screen foreground color */
Ovoid.Loader.opt_foregroundColor = [0.0, 0.0, 0.0, 0.3];
/* Wait screen background color */
Ovoid.Loader.opt_backgroundColor = [1.0, 1.0, 1.0, 1.0];
/* Wait screen background source image file */
Ovoid.Loader.opt_backgroundSrc = '';
/* Wait screen custom fontmap texture source image file */
Ovoid.Loader.opt_fontmapSrc = '';
/* Wait screen icons color */
Ovoid.Loader.opt_iconsColor = [1.0, 1.0, 1.0, 0.8];
/* Wait screen icons size */
Ovoid.Loader.opt_iconsSize = [32, 32];
/* Wait screen icon scenes source image file */
Ovoid.Loader.opt_iconscenesSrc = Ovoid.opt_libPath + "maps/loader-geo.png";
/* Wait screen icon scenes X and Y position*/
Ovoid.Loader.opt_iconscenesPos = [330, 270];
/* Wait screen icon textures source image file */
Ovoid.Loader.opt_icontexturesSrc = Ovoid.opt_libPath + "maps/loader-tex.png";
/* Wait screen icon textures X and Y position */
Ovoid.Loader.opt_icontexturesPos = [370, 270];
/* Wait screen icon audios source image file */
Ovoid.Loader.opt_iconaudiosSrc = Ovoid.opt_libPath + "maps/loader-aud.png";
/* Wait screen icon audios X and Y position */
Ovoid.Loader.opt_iconaudiosPos = [405, 270];
/* Wait screen icon config source image file */
Ovoid.Loader.opt_iconconfigSrc = Ovoid.opt_libPath + "maps/loader-drw.png";
/* Wait screen icon config X and Y position */
Ovoid.Loader.opt_iconconfigPos = [436, 270];
/* Wait screen loading circle color */
Ovoid.Loader.opt_loadcircleColor = [1.0, 1.0, 1.0, 0.5];
/* Wait screen loading circle source image file */
Ovoid.Loader.opt_loadcircleSrc = Ovoid.opt_libPath + 'maps/loader-lp.png';
/* Wait screen loading circle size */
Ovoid.Loader.opt_loadcircleSize = [64, 64];
/* Wait screen loading circle X and Y position */
Ovoid.Loader.opt_loadcirclePos = [400, 230];
/* Wait screen show or hide percentage */
Ovoid.Loader.opt_showPercentage = false;
/* Wait screen show or hide percentage X, Y position and font size */
Ovoid.Loader.opt_percentageXys = [400, 224, 16];
/* Wait screen show or hide title */
Ovoid.Loader.opt_showTitle = false;
/* Wait screen title X, Y position and font size */
Ovoid.Loader.opt_titleXys = [400, 180, 16];
/* Wait screen show or hide details */
Ovoid.Loader.opt_titleStr = "Loading Please Wait";
/* Enable or disable current loading url text */
Ovoid.Loader.opt_showDetails = false;
/* Wait screen details X, Y position and font size */
Ovoid.Loader.opt_detailsXys = [400, 310, 16];
/* Wait screen long wait message X, Y position and font size */
Ovoid.Loader.opt_longwaitXys = [400, 310, 16];
/* Wait screen long wait message string */
Ovoid.Loader.opt_longwaitStr = 'Loading screen may freezes but Please wait !';


/* --------------------------- SOLVER OPTIONS ------------------------------- */
if ( Ovoid.Solver ) {
/* Enable or disable the iterative contact solving */
Ovoid.Solver.opt_iterativeSolver = false;
/* Maximim iteration for iterative contact solving */
Ovoid.Solver.opt_contactItFactor = 4;
}
