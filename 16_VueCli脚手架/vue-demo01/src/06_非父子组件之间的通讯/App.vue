<template>
<div>
    <home></home>
</div>
</template>

<script>
import Home from "@/06_非父子组件之间的通讯/Home.vue";

export default {
    name: "App",
    components:{
        Home,

    },
    provide:{
        name:'mawefei',
        age:18
    }
}
</script>

<style scoped>

</style>