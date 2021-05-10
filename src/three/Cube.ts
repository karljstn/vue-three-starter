import * as THREE from "three"
import vertex from "~/shaders/vertex.glsl"
import fragment from "~/shaders/fragment.glsl"

import GUI from "~/singletons/GUI"

export default class Cube {
    geometry: THREE.BoxGeometry
    uniforms: {
        tweakExample: {
            value: number
        }
    }
    material: THREE.ShaderMaterial
    mesh: THREE.Mesh

    constructor() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
        this.uniforms = {
            tweakExample: { value: 0 }
        }
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertex,
            fragmentShader: fragment
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        const folder = GUI.addFolder("Cube")
        folder.open()
        folder
            .add(this.uniforms.tweakExample, "value")
            .name("tweakExample")
            .min(0)
            .max(1)
            .step(0.1)
    }

    update = () => {
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.z += 0.01
    }
}
