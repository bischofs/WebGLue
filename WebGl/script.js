var scene, camera, renderer;
var character, monster;
var directionalLight, shipLight;
var shapeMaterial, characterMaterial, monsterMaterial;
var geometry;
var monsterStartX = 150, monsterStartY = 50, monsterStartZ = 900; 
var characterStartX = -150, characterStartY = 0, characterStartZ = 900;
var lives;
var xSpeed = 0.5, ySpeed = 0.5;
var hDirection, vDirection;
function init() {
	/* SCENE */
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 1, 8000);

	/* CAMERA */
	camera.position.z = 1000;
	scene.add(camera);

	/* Renderer */
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	/* Character */
	lives = 5;
	//document.getElementById("Lives").innerHTML = "Lives Left: " + lives;
	characterMaterial = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'Textures/mario.jpeg' ), overdraw: false } );
	character = new THREE.Mesh( new THREE.CubeGeometry(5, 5, 5, 5, 5, 5, characterMaterial, 6), characterMaterial );
	character.position.z = characterStartZ;
	character.position.x = characterStartX;
	character.position.y = characterStartY;
	scene.add(character);

	/* MONSTER */
	monsterMaterial = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'Textures/space.png' ), overdraw: false } );
	monster = new THREE.Mesh( new THREE.SphereGeometry(5, 100, 100), monsterMaterial);
	monster.position.z = monsterStartZ;
	monster.position.x = monsterStartX;
	monster.position.y = monsterStartY;
	hDirection = "left";
	vDirection = "down";
	scene.add(monster);
	
	/* MOUSE */
	document.onmousemove = handleMouseMove;

	/* LIGHTS */
	var ambientLight = new THREE.AmbientLight(0x111111);
	scene.add(ambientLight);
	
	console.log($(window).innerWidth());	
	console.log($(window).innerHeight());
	/* Render Image */
	render();
}

init();

/* ACTION */
function render() {
	//var leftSide = -($(document).width() / 2);
	//var rightSide = ($(document).width() / 2);
	//var topSide = ($(document).height()/ 2);
	//var bottomSide = -($(document).height() / 2);
	var leftSide = -150;
        var rightSide = 150;
        var topSide = 75;
        var bottomSide = -75;
	
	//var randomXSpeed = randomFromInterval(1,5) * 0.001;
        //var randomYSpeed = randomFromInterval(1,5) * 0.001;
	var randomXSpeed = 0.005;
	var randomYSpeed = 0.003;
	xSpeed += randomXSpeed;
	ySpeed += randomYSpeed;
	requestAnimationFrame(render);

	//Checks to make sure the monster does not go off left or right
	if (monster.position.x < leftSide){ hDirection = "right"; } 
	else if (monster.position.x > rightSide){ hDirection = "left"; }

	//Checks to make sure the monster does not go off up or down
	if (monster.position.y < bottomSide){ vDirection = "up"; }
        else if (monster.position.y > topSide){ vDirection = "down"; }
	
	if (hDirection == "right"){
		monster.position.x += xSpeed;
		if (vDirection == "up"){ monster.position.y += ySpeed; }
		else { monster.position.y -= ySpeed; }
	} else {
		monster.position.x -= xSpeed;
                if (vDirection == "up"){ monster.position.y += ySpeed; }
                else { monster.position.y -= ySpeed; }
	}

	checkForHit();	
	renderer.render(scene, camera);
}

function handleMouseMove(event) {
	character.position.x = (event.clientX - 700) * 0.5;
	character.position.y = -(event.clientY - 350) * 0.5;
}

function checkForHit(){
	if (character.position.x > monster.position.x - 5 && character.position.x < monster.position.x + 5
         && character.position.y > monster.position.y - 5 && character.position.y < monster.position.y + 5
         && character.position.z > monster.position.z - 5 && character.position.z < monster.position.z + 5){
                alert("Its a hit");
		character.position.x = characterStartX;
		character.position.y = characterStartY;
		character.position.z = characterStartZ;

		monster.position.x = monsterStartX;
		monster.position.y = monsterStartY;
		monster.position.z = monsterStartZ;	
		
		xSpeed = randomFromInterval(1,5) * .001;
		ySpeed = randomFromInterval(1,5) * .001;
		lives--;
		document.getElementById("Lives").innerHTML = "Lives Left: " + lives;
		alert("lives left: " + lives);
        }
}

function randomFromInterval(from,to){
    return Math.floor(Math.random()*(to-from+1)+from);
}
