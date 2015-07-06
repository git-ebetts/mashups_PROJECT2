

var container, stats;

var camera, scene, renderer;

var cube, plane;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


// initCube();
//animate();

function initCube() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	var info = document.createElement( 'div' );
	info.style.position = 'fixed';
	info.style.top = '10px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.innerHTML = '<h1>Spin the CuteCube!</h1>';
	container.appendChild( info );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.y = 150;
	camera.position.z = 500;

	scene = new THREE.Scene();

	// Cube

	var geometry = new THREE.BoxGeometry( 350, 350, 350, 8,8,8 );

	var loader = new THREE.JSONLoader();


	function loadingCallback(){
		// console.log('Loaded!!!!');
	}
	function progressCallback(){
		// console.log('Progress');
	}
	function errorCallback(){
		// console.log('Error');
	}


			
		var material1 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( instagramData.data[0].images.low_resolution.url) } );
		var material2 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( instagramData.data[1].images.low_resolution.url) } );
		var material3 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[2].images.low_resolution.url) } );
		var material4 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[3].images.low_resolution.url) } );
		var material5 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[4].images.low_resolution.url ) } );
		var material6 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[5].images.low_resolution.url) } );


		var material7 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( instagramData.data[6].images.low_resolution.url) } );
		var material8 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( instagramData.data[7].images.low_resolution.url) } );
		var material9 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[8].images.low_resolution.url) } );
		var material10 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[9].images.low_resolution.url) } );
		var material11 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[10].images.low_resolution.url ) } );
		var material12 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[11].images.low_resolution.url) } );

		var material13 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( instagramData.data[12].images.low_resolution.url) } );
		var material14 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( instagramData.data[13].images.low_resolution.url) } );
		var material15 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[14].images.low_resolution.url) } );
		var material16 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[15].images.low_resolution.url) } );
		var material17 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[16].images.low_resolution.url ) } );
		var material18 = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture(instagramData.data[17].images.low_resolution.url) } );

		var materialsOne = [material1, material2, material3, material4, material5, material6];
		var materialsTwo = [material7, material8, material9, material10, material11, material12];
		var materialsThree = [material13, material14, material15, material16, material17, material18];

		var meshFaceMaterialOne = new THREE.MeshFaceMaterial( materialsOne );
		var meshFaceMaterialTwo = new THREE.MeshFaceMaterial( materialsTwo );
		var meshFaceMaterialThree = new THREE.MeshFaceMaterial( materialsThree );

        // console.log(materialsOne);
        // console.log(materialsTwo);
        // console.log(materialsThree);

		cube = new THREE.Mesh( geometry, meshFaceMaterialOne );
		cube.position.y = 150;
		scene.add( cube );
		// );

		//Called twice after 10000 millis has elapsed
		setTimeout(function(){
			// console.log("Updating from group two!!!");
			cube.material = meshFaceMaterialTwo;
			cube.material.needsUpdate = true;
		setTimeout(function(){
			// console.log("Updating from group three!!!");
			cube.material = meshFaceMaterialThree;
			cube.material.needsUpdate = true;
		},10000);
		},10000);

		
		var geometry = new THREE.BoxGeometry( 200, 200 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

		var material = new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: 0.5 } );

		plane = new THREE.Mesh( geometry, material );
		scene.add( plane );


		renderer = new THREE.CanvasRenderer();
		renderer.setClearColor( 0x01f7a );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( renderer.domElement );

		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		container.appendChild( stats.domElement );

		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		document.addEventListener( 'touchstart', onDocumentTouchStart, false );
		document.addEventListener( 'touchmove', onDocumentTouchMove, false );

		//

		window.addEventListener( 'resize', onWindowResize, false );
		
	//}
}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

			//

function onDocumentMouseDown( event ) {

	event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mouseout', onDocumentMouseOut, false );

	mouseXOnMouseDown = event.clientX - windowHalfX;
	targetRotationOnMouseDown = targetRotation;

}

function onDocumentMouseMove( event ) {

	mouseX = event.clientX - windowHalfX;

	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

}

function onDocumentMouseUp( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

	if ( event.touches.length === 1 ) {

		event.preventDefault();

		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;

	}

}

function onDocumentTouchMove( event ) {

	if ( event.touches.length === 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

	}

}

//

function animate() {

	requestAnimationFrame( animate );

	render();
	stats.update();

}

function render() {

	plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
	renderer.render( scene, camera );

}

