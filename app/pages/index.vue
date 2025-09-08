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

const { data: posts } = await useAsyncData('posts', () => queryCollection('blog').all())
</script>

<template>
  <UPage>
    <UPageHero title="Queer Kit" description="Your guide to all things queer." headline="Your guide to all things queer." orientation="vertical" :links="heroLinks"/>
    <UPageSection variant="outline" title="Knowledge Base" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." headline="Learn" icon="lucide:book-open" :features="projectsFeatures" :links="projectsLinks" orientation="horizontal">
      <RLPlaceholder class="h-full"/>
    </UPageSection>
    <UMarquee>
      <UIcon name="lucide:flag" class="size-10 shrink-0" />
      <UIcon name="lucide:flag" class="size-10 shrink-0" />
      <UIcon name="lucide:flag" class="size-10 shrink-0" />
      <UIcon name="lucide:flag" class="size-10 shrink-0" />
      <UIcon name="lucide:flag" class="size-10 shrink-0" />
      <UIcon name="lucide:flag" class="size-10 shrink-0" />
    </UMarquee>
    <UPageSection title="Latest Blog Posts" description="View articles by our community members.">
      <UBlogPosts>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.image.src"
          :date="post.datePosted"
          :authors="post.authors"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="subtle"
        />
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>

<style scoped>

</style>