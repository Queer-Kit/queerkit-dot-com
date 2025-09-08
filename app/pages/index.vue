<script setup lang="ts">
useHead({
  title: 'Home',
});

const heroLinks = ref([
  {
    label: 'Get started',
    to: '/docs/getting-started',
    icon: 'i-lucide-square-play'
  },
  {
    label: 'Learn more',
    to: '/docs/getting-started/theme',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])

const projectsFeatures = ref([
  {
    title: 'Terms',
    description: "Learn what each letter represents in various acronyms, as well as various terms used within the queer community.",
    icon: 'lucide:whole-word',
  },
  {
    title: 'Flags',
    description: "Find out the various flags representing various groups within the community, as well as their most widely accepted colors and designs.",
    icon: 'lucide:flag',
  },
  {
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'lucide:x',
  }
])

const projectsLinks = ref([
  {
    label: 'Lorem',
    color: 'primary',
    to: '/guidelines'
  }
])

const musicLinks = ref([
  {
    label: 'Check out my music',
    color: 'primary',
    to: '/music'
  },
  {
    label: 'View me on Spotify',
    color: 'secondary',
    variant: 'subtle',
    trailingIcon: 'mdi:spotify',
    to: 'https://open.spotify.com/user/v5m4qoc9j35ccc6nbzqcookvj?si=d795f9bc1cb34222'
  },
  {
    label: 'Hire me as a DJ',
    color: 'neutral',
    variant: 'outline',
    trailingIcon: 'lucide:send',
    to: '/contact'
  }
])
</script>

<template>
  <UPageHero title="Queer Kit" description="Your guide to all things queer." headline="Your guide to all things queer." orientation="vertical"/>
  <UPageSection variant="outline" title="Knowledge Base" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." headline="Learn" icon="lucide:book-open" :features="projectsFeatures" :links="projectsLinks" orientation="horizontal">
    <RLPlaceholder class="h-full"/>
  </UPageSection>
</template>

<style scoped>

</style>