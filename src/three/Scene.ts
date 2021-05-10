import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Cube from "./Cube"

import GUI from "~/singletons/GUI"
import RAF from "~singletons/RAF"

export default class Scene {
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    controls: OrbitControls
    width: number
    height: number

    cube: Cube

    constructor(canvas: HTMLCanvasElement) {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 5000)
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
            // alpha: true
        })
        this.controls = new OrbitControls(this.camera, canvas)

        this.renderer.setSize(this.width, this.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //limiter à 2

        RAF.subscribe("main", this.render)

        this.camera.position.z = 5
        this.cube = new Cube()
        this.scene.add(this.cube.mesh)

        this.setEvents()
    }

    setEvents = () => {
        window.addEventListener("resize", this.onResize)
    }

    onResize = () => {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.width, this.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1, 2))
    }

    render = () => {
        this.renderer.render(this.scene, this.camera)
        this.cube.update()
    }
}
