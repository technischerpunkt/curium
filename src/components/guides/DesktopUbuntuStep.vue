<script lang="ts" setup>
import CodeHighlight from '../CodeHighlight.vue'

const code = `
  sudo apt install -y wget apt-transport-https
  sudo wget -O /usr/share/keyrings/element-io-archive-keyring.gpg https://packages.element.io/debian/element-io-archive-keyring.gpg
  echo "deb [signed-by=/usr/share/keyrings/element-io-archive-keyring.gpg] https://packages.element.io/debian/ default main" | sudo tee /etc/apt/sources.list.d/element-io.list
  sudo apt update
  sudo apt install element-desktop
`
</script>

<template>
  <CodeHighlight :code="code" />
</template>
