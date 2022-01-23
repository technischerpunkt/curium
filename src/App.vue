<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import AppHeader from './components/AppHeader.vue'
import PickerBar from './components/PickerBar.vue'
import Guide from './components/Guide.vue'
import { Option } from './types'

const optionTree: Option[] = [
  {
    choice: 'Smartphone',
    postText: 'mit',
    subOptions: [
      {
        choice: 'Android',
        postText: 'mittels',
        subOptions: [
          { choice: 'Play Store' },
          { choice: 'F-Droid' },
        ],
      },
    ],
  },
  {
    choice: 'Computer',
    postText: 'mit dem Betriebssystem',
    subOptions: [
      { choice: 'Ubuntu' },
      { choice: 'Linux Mint' },
      { choice: 'macOS' },
      { choice: 'Windows' },
    ],
  },
]

const resetSelectedTree = (tree, acc = []) => {
  if (!tree[0].subOptions) {
    return [...acc, tree[0].choice]
  }

  acc.push(tree[0].choice)
  return resetSelectedTree(tree[0].subOptions, acc)
}

const selectedTree = ref(resetSelectedTree(optionTree))
</script>

<template>
  <AppHeader />
  <main>
    <div class="container">
      <PickerBar v-model:selected-tree="selectedTree" :option-tree="optionTree" />
      <Guide :selected-tree="selectedTree" />
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 2rem var(--spacer);
}
</style>
