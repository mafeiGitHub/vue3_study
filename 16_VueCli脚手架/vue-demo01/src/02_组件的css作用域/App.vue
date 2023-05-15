<template>
    <div id="app">
        <div class="tilte">你好1</div>
        <hello-world></hello-world>
    </div>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue';
components:{
    HelloWorld
}

</script>

<style  scoped>
.tilte{
    color: aquamarine;
}

</style>