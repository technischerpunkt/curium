<script lang="ts" setup>
import { computed, toRefs } from '@vue/reactivity';
import { Option } from '../types'

const props = withDefaults(defineProps<{
  options: Option[],
  selectedTree?: Array<string>,
  index?: number,
}>(), {
  selectedTree: (props) => [props.options[0].choice],
  index: 0,
})
const { options, selectedTree, index } = toRefs(props)

const emit = defineEmits<{
  (event: 'update:selected-tree', {index: number, choice: string}): void
}>()

const updateChoice = (choice) => {
  emit('update:selected-tree', {
    index: index.value,
    choice,
  })
}

const selected = computed(() => {
  const option = options.value.find(
    (option: Option) => option.choice === selectedTree.value[index.value]
  )
  if (option) return option

  updateChoice(options.value[0].choice)
  return options.value[0]
})
</script>

<template>
  <select
    :value="selected.choice"
    @input="updateChoice(($event.target as HTMLInputElement).value)"
  >
    <option v-for="option in options" :value="option.choice">{{ option.choice }}</option>
  </select>
  <span v-if="selected.postText">&nbsp;{{ selected.postText }}&nbsp;</span>
  <PickerSelect
    v-if="selected.subOptions"
    :options="selected.subOptions"
    :selected-tree="selectedTree"
    :index="index+1"
    @update:selected-tree="emit('update:selected-tree', $event)"
  />
</template>

<style scoped>
select {
  border: none;
  border-bottom: 4px dotted var(--link-color);
  background: none;
  font-size: 1em;
  color: inherit;
}

option {
  background-color: var(--bg-color);
}
</style>
