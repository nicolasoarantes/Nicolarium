import * as THREE from './node_modules/three/build/three.module.js';

export class NPC {
    constructor(name, x, y, z, link) {
        this.name = name;
        this.position = new THREE.Vector3(x, y, z);
        this.link = link;

        const geometry = new THREE.BoxGeometry(1, 2, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(this.position);

        this.mesh.userData = { URL: this.link };
        this.mesh.callback = this.onClick;
    }

    onClick() {
        if (this.userData && this.userData.URL) {
            window.location.href = this.userData.URL;
        }
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }
}
