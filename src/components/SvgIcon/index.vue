<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { isExternal as external } from '../../utils/validate'
import { defineProps, computed } from 'vue'
// 相当于 vue2 的 props
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})
// 相当于 vue2 中的 computed
// 判断是否是外部图标
const isExternal = computed(() => external(props.icon))
// 外部样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
// 项目内图标
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
