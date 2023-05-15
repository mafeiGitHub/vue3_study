<template>
    <div id="app">
        <div class="title">你好</div>
        <hello-world :count="11"></hello-world>
        <show-message class="mawf" title='马飞' content='很开心认识你'></show-message>
        <show-message title='小飞' content='很开心认识你2'></show-message>

    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import ShowMessage from './ShowMessage.vue';
export default {

    components: {
        HelloWorld,
        ShowMessage
    }
}
</script>

<style  scoped>
.title {
    color: aquamarine;
}
.mawf{
    color: #009988;
    font-size: 32px;
}
</style>