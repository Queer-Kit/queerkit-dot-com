<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui"

useHead({
  title: `Home`
})

const heroLinks = ref([
  {
    label: `Get started`,
    to: `/docs/getting-started`,
    icon: `i-lucide-square-play`
  },
  {
    label: `Learn more`,
    to: `/docs/getting-started/theme`,
    color: `neutral`,
    variant: `subtle`,
    trailingIcon: `i-lucide-arrow-right`
  }
])

const projectsFeatures = ref([
  {
    title: `Terms`,
    description: `Learn what each letter represents in various acronyms, as well as various terms used within the queer community.`,
    icon: `lucide:whole-word`
  },
  {
    title: `Flags`,
    description: `Find out the various flags representing various groups within the community, as well as their most widely accepted colors and designs.`,
    icon: `lucide:flag`
  },
  {
    title: `Lorem`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    icon: `lucide:x`
  }
])

const projectsLinks = ref([
  {
    label: `Lorem`,
    color: `primary`,
    to: `/guidelines`
  }
])

const { data: posts } = await useAsyncData(`posts`, () =>
  queryCollection(`blog`).all()
)

const frequentlyAskedQuestions = ref<AccordionItem[]>([
  {
    label: `I identify as something not currently represented in this website, why is that?`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    label: `Lorem ipsum dolor sit amet?`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }
])
</script>

<template>
  <UPage>
    <UPageHero
      title="Queer Kit"
      description="Your guide to all things queer."
      orientation="vertical"
      reverse
      :links="heroLinks"
    >
      <UIcon name="first-party:logomark-color" class="h-48 w-auto" />
    </UPageHero>
    <UPageSection
      variant="outline"
      title="Knowledge Base"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      headline="Learn"
      icon="lucide:book-open"
      :features="projectsFeatures"
      :links="projectsLinks"
      orientation="horizontal"
    >
      <QKPlaceholder class="h-full" />
    </UPageSection>
    <UMarquee>
      <UIcon name="flags:flag_queer" class="size-24 shrink-0" />
      <UIcon name="flags:flag_transgender" class="size-24 shrink-0" />
      <UIcon name="flags:flag_genderfluid" class="size-24 shrink-0" />
      <UIcon name="flags:flag_agender" class="size-24 shrink-0" />
      <UIcon name="flags:flag_gay" class="size-24 shrink-0" />
      <UIcon name="flags:flag_lesbian" class="size-24 shrink-0" />
      <UIcon name="flags:flag_bisexual" class="size-24 shrink-0" />
      <UIcon name="flags:flag_pansexual" class="size-24 shrink-0" />
      <UIcon name="flags:flag_polisexual" class="size-24 shrink-0" />
      <UIcon name="flags:flag_demisexual" class="size-24 shrink-0" />
      <UIcon name="flags:flag_intersex" class="size-24 shrink-0" />
      <UIcon name="flags:flag_nonmonogamous" class="size-24 shrink-0" />
    </UMarquee>
    <UPageSection
      title="Latest Blog Posts"
      description="View articles by our community members."
    >
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
    <UPageSection
      title="Frequently Asked Questions"
      description="Lorem ipsum dolor sit amet."
      headline="Lorem"
    >
      <UAccordion :items="frequentlyAskedQuestions" />
    </UPageSection>
  </UPage>
</template>

<style scoped></style>
