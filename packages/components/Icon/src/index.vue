<template>
    <i class="fs-icon" :style="customStyle">
        <font-awesome-icon v-bind="filteredProps" />
    </i>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { IconNewProps } from './type'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)

defineOptions({
    name: 'fsIcon',
    inheritAttrs: false,//不透传
})

const props = defineProps<IconNewProps>()

const filteredProps = computed(() => {
    return omit(props, ['color'])
})

const customStyle = computed(() => {
    return props.color ? { color: props.color } : {}
})

</script>