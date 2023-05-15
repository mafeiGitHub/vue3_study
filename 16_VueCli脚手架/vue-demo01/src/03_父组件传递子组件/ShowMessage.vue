<template>
    <div>
        <h2>你好 {{ title }}{{ content }}</h2>
    </div>
</template>

<script>
export default {
    // props:['title','content']
    inheritAttrs:false,//禁止继承非porps属性
    props: {

        title: String,
        content: {
            type: [String, Number],
            required: true,
            default: "你好呀！"
        }
        //如果是object类型的话，要写成函数

    }
}
</script>

<style scoped>

</style>