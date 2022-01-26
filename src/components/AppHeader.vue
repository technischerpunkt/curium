<script lang="ts" setup>
import GitHubIcon from '../assets/icons/github.svg'
</script>

<template>
  <header>
    <div class="container">
      <div class="brand">
        <a href="/" title="Curium">
          Curium
        </a>
        <small>Matrix / Element quick start guide</small>
      </div>
      <div class="links">
        <a
          href="https://github.com/technischerpunkt/curium"
          title="Source Code bei GitHub"
          target="_blank"
        >
          <GitHubIcon class="icon" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    border-bottom: 1px solid var(--text-color);
    padding: 1rem var(--spacer);
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
</style>
