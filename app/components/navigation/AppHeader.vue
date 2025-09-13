<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

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
      <UIcon name="first-party:logomark-color" class="h-12" />
    </template>
    <UNavigationMenu :items="items" variant="link"/>
    <template #right>

    </template>
    <template #body>
      <UNavigationMenu :items="items" variant="link" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<style scoped>

</style>