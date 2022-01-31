<script lang="ts" setup>
import CodeHighlight from '../CodeHighlight.vue'

const code = `
  # Mit <code>sudo</code> führst du den nachfolgenden Befehl als Administrator:in aus. <code>apt install</code> installiert Programme.
  sudo apt install -y wget apt-transport-https
  # Programme in Linux werden mit GPG signiert, um sicherzustellen, dass wirklich das drin steckt, was drauf steht. Der nachfolgende Befehl lädt den passenden GPG Key herunter.
  sudo wget -O /usr/share/keyrings/element-io-archive-keyring.gpg https://packages.element.io/debian/element-io-archive-keyring.gpg
  # Programme werden über sog. "Paketquellen" bereit gestellt. Der Befehl für die Element Paketquelle zu deinem System hinzu.
  echo "deb [signed-by=/usr/share/keyrings/element-io-archive-keyring.gpg] https://packages.element.io/debian/ default main" | sudo tee /etc/apt/sources.list.d/element-io.list
  # Hiermit werden die Paketquellen aktualisiert..
  sudo apt update
  # ..um Element schließlich zu installieren.
  sudo apt install element-desktop
`
</script>

<template>
  <CodeHighlight :code="code" v-bind="$attrs" />
</template>
