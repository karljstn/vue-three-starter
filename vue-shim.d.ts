declare module "*.vue" {
    import Vue from "vue"
    export default Vue
}

declare module "*.glsl" {
    const content: string
    export default content
}

declare module "*.vert" {
    const content: string
    export default content
}

declare module "*.frag" {
    const content: string
    export default content
}

declare module "*.glb" {
    const content: string
    export default content
}

declare var module: {
    hot: {
        accept(callback?: () => void): void
        dispose(callback?: () => void): void
    }
}

declare module "three/examples/jsm/libs/dat.gui.module"

declare module "*.mp3"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"

declare module "*.json"
