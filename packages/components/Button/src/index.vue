<!--  -->
<template>
    <button>{{ props.text }}</button>
</template>
<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    text:{
        type:String,
        default:'按钮'
    }
})
defineOptions({
    name: 'fsButton' //会对应生成一个全局的组件名，docs里注册组件时会用到
})
</script>
<style scoped lang="scss">
button{
    width: 100px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
}
button:first{
    margin-left: 0;
}
</style>