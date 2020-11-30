// import * as THREE from '../node_modules/three';
// import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
//
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
// const light = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light );
// camera.position.z = 5;
//
// const animate = function () {
//     requestAnimationFrame( animate );
//
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//
//     renderer.render( scene, camera );
// };
//
// animate();
// const loader = new GLTFLoader();
//
// loader.load( '/public/myCharacter.glb', function ( gltf ) {
//
//     scene.add( gltf.scene );
//
// }, undefined, function ( error ) {
//
//     console.error( error );
//
// } );

