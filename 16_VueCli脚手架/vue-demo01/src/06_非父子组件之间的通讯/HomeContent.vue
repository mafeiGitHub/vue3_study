<template>
    <div>
        HomeContent:{{ name }}
        <p>{{age}}</p>
    </div>
</template>

<script>
export default {
    name: "HomeContent",
    inject: ["name", "age"]
}
</script>

<style scoped>

</style>