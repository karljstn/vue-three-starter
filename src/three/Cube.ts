import * as THREE from "three"
import vertex from "~/shaders/vertex.glsl"
import fragment from "~/shaders/fragment.glsl"

export default class Cube {
    geometry: THREE.BoxGeometry
    uniforms: {}
    material: THREE.ShaderMaterial
    mesh: THREE.Mesh

    constructor() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
        this.uniforms = {}
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertex,
            fragmentShader: fragment
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)
    }

    update = () => {
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.z += 0.01
    }
}
