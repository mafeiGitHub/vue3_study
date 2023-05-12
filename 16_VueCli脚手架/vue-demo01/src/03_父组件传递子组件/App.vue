<template>
    <div id="app">
        <div class="tilte">你好</div>
        <hello-world :count="11"></hello-world>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
export default {

    components: {
        HelloWorld
    }
}
</script>

<style  scoped>
.tilte {
    color: aquamarine;
}
</style>