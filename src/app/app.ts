import { WebGLRenderer, PerspectiveCamera, Clock } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import { MainScene } from './main-scene'

export class App {
    private renderer = new WebGLRenderer({
        antialias: true,
    })
    private camera = new PerspectiveCamera(35, 1, 0.1, 100)
    private clock = new Clock()
    private scene = new MainScene()
    private controls = new OrbitControls(this.camera, this.renderer.domElement)

    constructor(container: Element) {
        container.appendChild(this.renderer.domElement)
        this.camera.position.set(0, 10, 0)

        window.addEventListener('resize', () => {
            this.onResize()
        })

        this.onResize()
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    async run() {
        await this.scene.load()

        this.renderer.setAnimationLoop(() => {
            const clockDelta = this.clock.getDelta()
            this.scene.update(clockDelta)
            this.controls.update()
            this.renderer.render(this.scene, this.camera)
        })
    }
}
