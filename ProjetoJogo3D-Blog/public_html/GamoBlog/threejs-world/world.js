import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;
let player, objects = [];
let raycaster, mouse;

function init() {
    // Cena, câmera e renderizador
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    
    // Luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);
    
    // Jogador
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    player = new THREE.Mesh(geometry, material);
    scene.add(player);
    
    // Objetos
    createInteractiveObjects();
    
    // Raycaster e mouse
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Evento de clique
    window.addEventListener('click', onMouseClick, false);
    
    // Evento de redimensionamento
    window.addEventListener('resize', onWindowResize, false);
    
    // Animação
    animate();
}

function createInteractiveObjects() {
    const geometries = [new THREE.SphereGeometry(1), new THREE.BoxGeometry(1, 1, 1), new THREE.CylinderGeometry(1, 1, 1)];
    const materials = [
        new THREE.MeshStandardMaterial({ color: 0xff0000 }),
        new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
        new THREE.MeshStandardMaterial({ color: 0x0000ff })
    ];
    const positions = [
        new THREE.Vector3(5, 1, 0),
        new THREE.Vector3(-5, 1, 0),
        new THREE.Vector3(0, 1, 5),
        new THREE.Vector3(0, 1, -5)
    ];
    
    for (let i = 0; i < geometries.length; i++) {
        let object = new THREE.Mesh(geometries[i], materials[i]);
        object.position.copy(positions[i]);
        objects.push(object);
        scene.add(object);
    }
}

function onMouseClick(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    
    const intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0) {
        alert('Interagiu com um objeto!');
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Remover mensagem de boas-vindas
setTimeout(() => {
    document.getElementById('welcome').style.display = 'none';
    init();
}, 3000);
