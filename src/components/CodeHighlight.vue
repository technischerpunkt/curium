<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  code: string,
}>()

const showHints = ref(false)

const codeLines = computed(() => {
  return props.code.split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith('#') || showHints.value)
})
</script>

<template>
  <div>
    <div class="intro">
      <small v-if="showHints">
        Mit <code>Ctrl</code>+<code>Shift</code>+<code>V</code>
        kannst du diese Zeilen in ein Terminal einfügen.
      </small>
      <label
        class="switch"
        title="Wenn du dir unsicher bist, was diese Zeilen bedeuten, kannst du dir hiermit Erläuterungen anzeigen lassen."
      >
        Erläuterungen anzeigen
        <input
          type="checkbox"
          v-model="showHints"
        />
      </label>
    </div>
    <pre>
      <span
        v-for="line in codeLines"
        v-html="line"
        :class="line.startsWith('#') ? 'comment' : 'line'"
      />
    </pre>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  max-height: 100%;
}

.intro {
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
}

.switch {
  display: block;
  font-size: 0.8em;
  background-color: #ffffff20;
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
  justify-self: right;
}

.switch input {
  color: var(--primary-color);
}

pre {
  margin-top: 2rem;
  counter-reset: line;
  white-space: normal;
}

small,
.comment,
.switch {
  color: #ccc;
}

.comment,
.line {
  display: block;
  padding-left: 2.2em;
  line-height: 1.5;
}

.comment {
  user-select: none;
  margin-top: 0.2em;
  font-size: 0.8em;
}

.line {
  position: relative;
  white-space: normal;
  margin-bottom: 0.5em;
}
.line:before {
  counter-increment: line;
  content: counter(line);
  position: absolute;
  left: 0;
  height: 100%;
  display: block;
  border-right: 1px solid #ddd;
  padding: 0 .5em;
  color: #999;
}
</style>
