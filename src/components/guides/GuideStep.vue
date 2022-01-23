<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import ChevronLeft from '../../assets/icons/chevron-left.svg'
import ChevronRight from '../../assets/icons/chevron-right.svg'

const props = withDefaults(defineProps<{
  currentIndex: number,
  length: number,
  description?: string,
}>(), {
  description: null,
})

const emit = defineEmits<{
  (event: 'update:current-index', index: number): void
}>()

const prevStep = () => emit('update:current-index', Math.max(0, props.currentIndex - 1))
const nextStep = () => emit('update:current-index', Math.min(props.length - 1, props.currentIndex + 1))

const handleKeyEvent = (event: KeyboardEvent) => {
  switch (event.code) {
    case 'ArrowLeft':
      prevStep()
      break
    case 'ArrowRight':
    case 'Space':
      nextStep()
      break
  }
}

onMounted(() => {
  window.addEventListener('keyup', handleKeyEvent)
})
onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyEvent)
})

const progress = computed(() => (props.currentIndex+1) / props.length * 100)
</script>

<template>
  <div class="step">
    <div class="step-inner">
      <div class="nav nav-left">
        <button v-if="currentIndex > 0" @click="prevStep">
          <ChevronLeft />
        </button>
      </div>
      <div class="content">
        <slot />
      </div>
      <div class="nav nav-right">
        <button v-if="currentIndex < length-1" @click="nextStep">
          <ChevronRight />
        </button>
      </div>
    </div>
    <p v-if="description" v-html="description" class="description"></p>
  </div>
  <div class="progressbar">
    <div class="progress">{{ progress }} %</div>
  </div>
</template>

<style scoped>
.step-inner {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

@media screen and (min-width: 800px) {
  .step-inner {
    gap: 3rem;
  }
}

.nav {
  flex: 1 0 2rem;
  max-width: 10%;
}

.nav button {
  color: #eee;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  max-width: 5rem;
}

.nav-left { text-align: left; }
.nav-right { text-align: right; }

.content {
  flex: 0 1 84%;
  display: flex;
  justify-content: center;
}

.description {
  color: #eee;
  font-size: 1.3rem;
  text-align: center;
}

.progressbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: rgba(255 255 255 / 0.6);
}

.progress {
  width: v-bind("progress + '%'");
  height: 100%;
  background-color: var(--primary-color);
  text-indent: -9999px;
  overflow: hidden;
  transition: width ease-out 0.4s;
}
</style>
