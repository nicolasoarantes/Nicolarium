import * as THREE from './node_modules/three/build/three.module.js';
import { NPC } from './NPC.js';

export function createWorld(scene) {
    // Criar terreno básico
    const planeGeometry = new THREE.PlaneGeometry(100, 100, 10, 10);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Adicionar NPCs ou objetos interativos
    const npc = new NPC('Portfólio', 0, 0, 0, 'portfolio.html');
    npc.addToScene(scene);

    // Adicionar mais objetos e funcionalidades
}
