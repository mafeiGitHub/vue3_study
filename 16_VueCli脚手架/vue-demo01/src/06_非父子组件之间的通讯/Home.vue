<template>
<div>
    <home-content></home-content>
</div>
</template>

<script>
import HomeContent from "@/06_非父子组件之间的通讯/HomeContent.vue";

export default {
    name: "Home",
    components:{
        HomeContent
    }
}
</script>

<style scoped>

</style>