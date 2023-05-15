<template>
    <div>
        <tab-control :titles="titles" @itemClick="titleHandle"></tab-control>
        <h2>{{titleContents[currentIndex]}}</h2>
    </div>
</template>

<script>

import TabControl from "@/05_商品页面的切换/TabControl.vue";

export default {
    name: "App",
    components: {
        TabControl
    },
    data() {
        return {
            titles: ['aaa', 'bbb', 'ccc'],
            titleContents:['aaa页面', 'bbb页面', 'ccc页面'],
            currentIndex:0
        }
    },
    methods: {
        titleHandle(index) {
            this.currentIndex = index

        }
    }
}
</script>

<style scoped>

</style>