<template>
    <div>
        <Hello></Hello>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import Hello from "~/components/Hello.vue"
import Scene from "~/three/Scene"
import store from "~/store"

import "./styles/global.scss"

export default Vue.extend({
    mounted() {
        const scene = new Scene(this.$refs.canvas)
        store.commit("setScene", scene)
    },
    components: {
        Hello
    }
})
</script>

<style lang="scss" scoped></style>
