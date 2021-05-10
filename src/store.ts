import Vue from "vue"
import Vuex from "vuex"
import Scene from "~/three/Scene"

Vue.use(Vuex)

type StoreState = {
    scene: Scene | null
}

const store = new Vuex.Store({
    state: {
        scene: null
    } as StoreState,
    mutations: {
        setScene(state, payload) {
            state.scene = payload
        }
    },
    actions: {},
    modules: {}
})

export default store
