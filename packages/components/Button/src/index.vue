<!--  -->
<template>
    <button @click="console.log(1)" class="fs-button" :class="{
        [`fs-button--${type}`]: type,
        [`fs-button--${size}`]: size,
        'is-round': round,
        'is-circle': circle,
        'is-plain': plain,
        'is-disabled': disabled
    }" :disabled="disabled">
        <Icon v-if="icon && !loading" :icon="icon" />
        <span>
            <slot />
        </span>
    </button>
</template>
<script setup lang="ts">
import type { ButtonProps } from './type'
import Icon from '../../Icon/src/index.vue'

withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    size: '',
    round: false,
    circle: false,
    palin: false,
    icon: '',
    loading: false,
    disabled: false
})

defineOptions({
    name: 'fsButton' //会对应生成一个全局的组件名，docs里注册组件时会用到
})
</script>
<style>
@import '@fs-design/theme-chalk/dist/button.min.css';
</style>