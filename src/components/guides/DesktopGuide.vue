<script lang="ts" setup>
import { computed, ref, h } from 'vue'
import GuideStep from './GuideStep.vue'
import LaptopWrapper from '../wrappers/LaptopWrapper.vue'
import DesktopUbuntuStep from './DesktopUbuntuStep.vue'
import ButtonLink from '../ButtonLink.vue'
import { Step } from '../../types'
const screenshots = Object.values(import.meta.globEager('../../assets/screenshots/desktop/*.webp'))

const props = defineProps<{
  operatingSystem: string,
}>()

const steps = computed((): Step[] => {
  const stepsArray: Step[] = [
    {
      imgSrc: screenshots[0].default,
      alt: 'Element Willkommens Bildschirm',
      desc: 'Element ist ein Client für Matrix, so wie Thunderbird ein Client für E-Mail ist. Es gibt noch viele weitere Clients für Matrix. Drücke auf <code>Konto erstellen</code>.',
    },
    {
      imgSrc: screenshots[1].default,
      alt: 'Element Konto anlegen Bildschirm',
      desc: `Wie bei E-Mail gibt es verschiedene Anbieter für dein Matrix Konto, die sog. Homeserver betreiben. <code>matrix.org</code> ist der Größte.
            Damit nicht alle beim gleichen Anbieter sind, wählen wir mit <code>Bearbeiten</code> einen anderen aus.`,
    },
    {
      imgSrc: screenshots[2].default,
      alt: 'Element Homeserver auswählen Bildschirm',
      desc: 'Wähle <code>Anderer Homeserver</code> aus und gebe einen deiner Wahl an, bspw. <code>chat.livingutopia.org</code>.',
    },
    {
      imgSrc: screenshots[3].default,
      alt: 'Element Homeserver auswählen Bildschirm',
      desc: `Gib deinen gewünschten Benutzernamen und Passwort ein. Optional kannst du eine E-Mail angeben, mit der dich
            andere finden können und du dein Passwort zurücksetzen kannst. Mit <code>Registrieren</code> geht's weiter.`,
    },
    {
      imgSrc: screenshots[5].default,
      alt: 'Element Start Bildschirm ohne Chatnachrichten',
      desc: `Herzlichen Glückwunsch, du hast nun ein Matrix Konto! Wenn du Element bei der Entwicklung unterstützen
            möchtest, kannst du anonyme Nutzungsdaten teilen.`,
    },
    {
      imgSrc: screenshots[6].default,
      alt: 'Element Start Bildschirm ohne Chatnachrichten',
      desc: `Mit einem Klick auf <code>Direktnachricht senden</code> kannst du deine erste Nachricht schreiben.
            Du erreichst Leute über ihre Matrix ID, also z.B. <code>@benutzername:livingutopia.org</code>`,
    },
    {
      imgSrc: screenshots[7].default,
      alt: 'Element Beispiel Nachricht Bildschirm',
      desc: `Nachdem du deine erste Nachricht gesendet hast, wirst du aufgefordert deine Schlüssel zu sichern.`,
    },
    {
      imgSrc: screenshots[8].default,
      alt: 'Element Schlüsselsicherung einrichten Bildschirm',
      desc: `Las dir einen Sicherheitsschlüssel generieren. Du brauchst ihn, um deine Nachrichten wieder entschlüsseln zu können,
            falls du dich aus irgendeinem Grund auf allen Geräten ausgeloggt hast.`,
    },
    {
      imgSrc: screenshots[9].default,
      alt: 'Element Schlüsselsicherung einrichten Bildschirm',
      desc: `Speicher den Sicherheitsschlüssel oder schreib ihn in dein Notizbuch. Am besten aufgehoben
            ist er in einem <a href="https://keepassxc.org/" target="_blank">Passwort Manager</a>.`,
    },
    {
      imgSrc: screenshots[10].default,
      alt: 'Element Schlüsselsicherung einrichten Bildschirm',
      desc: `Super! Nun bist du Startklar!`,
    },
  ]

  switch (props.operatingSystem) {
    case 'Ubuntu':
    case 'Linux Mint':
      stepsArray.unshift({
      component: DesktopUbuntuStep,
      desc: `Öffne ein Terminal und installiere Element mit den angezeigten Kommandos. Die Kommandos stammen von der offiziellen
            <a href="https://element.io/get-started#linux">Element Webseite</a>.`
      })
    break;
    case 'Windows':
    case 'macOS':
      stepsArray.unshift({
      component: h(ButtonLink, { url: 'https://element.io/get-started#download' }, 'Download Element'),
      desc: `Lade Element Desktop von der offiziellen <a href="https://element.io/get-started#download">Element Webseite</a>
            herunter und installiere das Programm.`
      })
    break
  }

  return stepsArray
})

const currentIndex = ref(0)
const currentStep = computed(() => steps.value[currentIndex.value])
</script>

<template>
  <GuideStep
    v-model:current-index="currentIndex"
    :length="steps.length"
    :description="currentStep.desc"
  >
    <LaptopWrapper>
      <component v-if="currentStep.component" :is="currentStep.component" />
      <img v-else :alt="currentStep.alt" :src="currentStep.imgSrc" />
    </LaptopWrapper>
  </GuideStep>
</template>
