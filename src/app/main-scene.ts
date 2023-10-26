import { Scene, AmbientLight, DirectionalLight, Mesh, MeshPhysicalMaterial, BoxGeometry, Color } from 'three'

export class MainScene extends Scene {
    cube: Mesh

    constructor() {
        super()

        this.background = new Color('skyblue')

        const ambientLight = new AmbientLight()
        this.add(ambientLight)

        const directionalLight = new DirectionalLight()
        directionalLight.position.set(2, 10, 7)
        this.add(directionalLight)

        const geometry = new BoxGeometry()
        const material = new MeshPhysicalMaterial({
            color: '#ffffff',
        })
        const mesh = new Mesh(geometry, material)
        this.cube = mesh

        this.add(this.cube)
    }

    async load() {}

    update(delta: number) {
        this.cube.rotation.x += delta
        this.cube.rotation.y += delta
        this.cube.rotation.z += delta
    }
}
