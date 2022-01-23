<script lang="ts" setup>
const props = defineProps<{
  url: string,
}>()
</script>

<template>
  <a :href="url" class="btn" target="_blank">
    <slot />
  </a>
</template>

<style>
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border: 3px solid var(--primary-color);
  border-radius: 3px;
}

.btn:hover,
.btn:focus {
  opacity: 0.8;
}
</style>
