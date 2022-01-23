<script lang="ts" setup>
import { ref, h } from 'vue'

const props = defineProps<{
  code: string,
}>()

const codeLines = ref(props.code.split('\n').map((line) => line.trim()).filter(Boolean))
</script>

<template>
  <pre>
    <span v-for="line in codeLines">{{ line }}</span>
  </pre>
</template>

<style scoped>
pre {
  padding: 1rem;
  counter-reset: line;
  overflow-y: auto;
  max-height: 100%;
  white-space: normal;
}
pre span {
  display: block;
  position: relative;
  line-height: 1.5rem;
  white-space: normal;
  padding-left: 2.2em;
  line-height: 1.5;
  margin-bottom: 0.5em;
}
pre span:before {
  counter-increment: line;
  content: counter(line);
  position: absolute;
  left: 0;
  height: 100%;
  display: block;
  border-right: 1px solid #ddd;
  padding: 0 .5em;
  color: #888;
}
</style>
