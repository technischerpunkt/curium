<script lang="ts" setup>
import { toRefs } from '@vue/reactivity';
import PickerSelect from './PickerSelect.vue';
import { Option } from '../types'

const props = defineProps<{
  selectedTree: string[],
  optionTree: Option[],
}>()
const { selectedTree, optionTree } = toRefs(props)

const emit = defineEmits<{
  (event: 'update:selected-tree', tree: string[]): void
}>()

const updateSelectedTree = (leaf: {index: number, choice: string}) => {
  selectedTree.value[leaf.index] = leaf.choice
  emit('update:selected-tree', selectedTree.value)
}
</script>

<template>
  <p>
    Ich will Element auf meinem
    <PickerSelect
      :options="optionTree"
      :selected-tree="selectedTree"
      @update:selected-tree="updateSelectedTree"
    />
    installieren.
  </p>
</template>

<style scoped>
p {
  margin-bottom: 3rem;
}
</style>
