<template>
    <div class="wrapper">
        <h1>
            Hello handsome, <br />
            welcome on a <span>vue-three-typescript</span> starter.
        </h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.wrapper {
    h1 {
        color: white;
        position: absolute;
        left: 50%;
        top: 80%;
        transform: translate(-50%, -50%);
        font-weight: normal;
        width: 80%;

        span {
            font-weight: bolder;
        }
    }
}
</style>
