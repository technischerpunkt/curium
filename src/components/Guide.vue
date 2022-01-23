<script lang="ts" setup>
import { toRefs } from '@vue/reactivity';
import DesktopGuide from './guides/DesktopGuide.vue'
import AndroidGuide from './guides/AndroidGuide.vue'

const props = defineProps<{
  selectedTree: string[],
}>()
const { selectedTree } = toRefs(props)
</script>

<template>
  <DesktopGuide v-if="selectedTree[0] === 'Computer'" :operating-system="selectedTree[1]"/>
  <AndroidGuide v-if="selectedTree[0] === 'Smartphone'" :store="selectedTree[2]" />
</template>

<style scoped>

</style>
