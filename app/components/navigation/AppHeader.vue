<script setup lang="ts">
import { ar, en, es, fr, ja, ko, pt, ro, zh_cn } from '@nuxt/ui/locale'
import type { NavigationMenuItem } from '@nuxt/ui'

const { locale, setLocale } = useI18n()

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  },
  {
    label: 'Guidelines',
    to: '/guidelines',
    active: route.path.startsWith('/guidelines')
  },
  {
    label: 'Certification',
    to: '/certification',
    active: route.path.startsWith('/certification')
  },
  {
    label: 'Store',
    to: '/store',
    active: route.path.startsWith('/store')
  },
  {
    label: 'Blog',
    to: '/blog',
    active: route.path.startsWith('/blog')
  }
])
</script>

<template>
  <UHeader mode="slideover" toggle-side="left" to="/">
    <template #title>
      <NuxtImg src="https://cdn.idantity.me/images/logos/logomark-white.webp" alt="idantity.me Logomark" class="h-12 w-auto" />
    </template>
    <UNavigationMenu :items="items" variant="link"/>
    <template #right>
      <ULocaleSelect hidden v-model="locale" :locales="[ar, en, es, fr, ja, ko, pt, ro, zh_cn]" @update:model-value="setLocale($event)" color="secondary" class="w-48" />
      <UColorModeButton/>
    </template>
    <template #body>
      <UNavigationMenu :items="items" variant="link" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<style scoped>

</style>