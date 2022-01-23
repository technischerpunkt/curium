<script lang="ts" setup>
import { computed, ref } from 'vue'
import GuideStep from './GuideStep.vue'
import WrapperAndroid from '../wrappers/AndroidWrapper.vue'
import googlePlayBadgeSrc from '../../assets/google_play_badge.png'
const screenshots = Object.values(import.meta.globEager('../../assets/screenshots/android/*.webp'))

const props = defineProps<{
  store: string,
}>()

const steps = computed(() => {
  const stepsArray = [
    {
      imgSrc: googlePlayBadgeSrc,
      link: 'https://play.google.com/store/apps/details?id=im.vector.app',
      alt: 'Download Element im Google Play Store',
      desc: 'Suche nach "Element" im Google Play Store.',
    },
    {
      imgSrc: screenshots[1].default,
      alt: 'Element Willkommens Bildschirm',
      desc: 'Element ist ein Client für Matrix, so wie Thunderbird ein Client für E-Mail ist. Es gibt noch viele weitere Clients für Matrix.',
    },
    {
      imgSrc: screenshots[2].default,
      alt: 'Element Server Auswahl Bildschirm',
      desc: `Wie bei E-Mail gibt es verschiedene Anbieter für dein Matrix Konto, die sog. Homeserver betreiben. <code>matrix.org</code> ist der Größte.
            Damit nicht alle beim gleichen Anbieter sind, wählen wir mit <code>Andere</code> einen anderen aus.`,
    },
    {
      imgSrc: screenshots[3].default,
      alt: 'Element Andere Server Bildschirm',
      desc: 'Gib deinen gewünschten Server bei Adresse ein, bspw. <code>chat.livingutopia.org</code>.',
    },
    {
      imgSrc: screenshots[4].default,
      alt: 'Element Registrieren Bildschirm',
      desc: 'Wir registrieren einen neuen Account. Merk dir das Passwort, du brauchst es, um dich mit anderen Geräten, wie z.B. deinem Laptop einzuloggen.',
    },
    {
      imgSrc: screenshots[6].default,
      alt: 'Element E-Mail Bildschirm',
      desc: 'Du kannst optional eine E-Mail Adresse angeben, mit der dich andere finden können und du dein Passwort zurücksetzen kannst.',
    },
    {
      imgSrc: screenshots[7].default,
      alt: 'Element Nutzungsdaten Bildschirm',
      desc: 'Wenn du Element bei der Entwicklung unterstützen möchtest, kannst du anonyme Nutzungsdaten teilen.',
    },
    {
      imgSrc: screenshots[8].default,
      alt: 'Element leerer Start Bildschirm',
      desc: 'Herzlichen Glückwunsch! Du hast dein Matrix Konto erfolgreich erstellt. Jetzt noch die erste Nachricht schreiben :)',
    },
  ]

  if (props.store === 'F-Droid') {
    stepsArray[0] = {
      imgSrc: screenshots[0].default,
      alt: 'Die Element App im F-Droid Store',
      desc: 'Suche nach "Element" im F-Droid Store. F-Droid ist ein alternativer App-Store mit ausschließlich Open Source Apps.',
    }
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
    <WrapperAndroid style="max-width: 20rem;">
      <a
        v-if="currentStep.link"
        :title="currentStep.alt"
        :href="currentStep.link"
        target="_blank"
      >
        <img :alt="currentStep.alt" :src="currentStep.imgSrc" />
      </a>
      <img v-else :alt="currentStep.alt" :src="currentStep.imgSrc" />
    </WrapperAndroid>
  </GuideStep>
</template>
