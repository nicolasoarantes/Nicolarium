// Importando módulos do Three.js
import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;

function init() {
    // Criando a cena
    scene = new THREE.Scene();

    // Configurando a câmera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // Configurando o renderizador
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Adicionando controles de órbita
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Adicionando luz à cena
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    // Adicionando um cubo à cena
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Iniciando a animação
    animate();
}

function animate() {
    // Atualizando controles e renderizando a cena
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Atualizando o renderizador e a câmera em caso de redimensionamento da janela
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Inicializando a cena
init();
