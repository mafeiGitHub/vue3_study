<template>
<div>
<counter-operation @add="addOne" @sub="subOne"></counter-operation>
    <p>{{counter}}</p>

</div>

</template>

<script>
import CounterOperation from "@/04_子组件传递父组件/CounterOperation.vue";

export default {
    name: "App",
    data(){
        return{
           counter:100
        }
    },
    components:{
        CounterOperation
    },
    methods:{
        addOne(){
            this.counter++;

        },
        subOne(){
            this.counter--;

        }


    }
}
</script>

<style scoped>

</style>