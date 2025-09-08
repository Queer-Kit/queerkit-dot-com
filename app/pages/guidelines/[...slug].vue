<script lang="ts" setup>
import { mapContentNavigation } from '@nuxt/ui/utils/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'
import type { PageAnchor } from '@nuxt/ui'

definePageMeta({
  layout: 'guidelines'
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('guidelines').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('guidelines', route.path, {
    fields: ['description']
  })
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('guidelines'))

const breadcrumb = computed(() =>
  mapContentNavigation(
    findPageBreadcrumb(navigation?.value, page.value?.path, {
      indexAsChild: true,
    }),
  ).map(({ icon, ...link }) => link),
)

const lastModified = useDateFormat(page.value.lastModified, 'DD/MM/YYYY')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UContainer>
    <UPage v-if="page">
      <template #left>
        <UPageAside>
          <template #top>
            <UPageAnchors :links="links" class="w-full" />
          </template>
          <RLLayoutBox
            direction="vertical"
            gap="md"
          >
            <USeparator />
            <UContentSearchButton :collapsed="false" label="Search" />
            <UContentNavigation :navigation="navigation" highlight />
          </RLLayoutBox>
        </UPageAside>
      </template>
      <UBreadcrumb :items="breadcrumb" class="mt-8" />
      <UPageHeader
        :title="page.title"
        :description="page.description"
        :headline="page.type"
        :links="page.links"
      />
      <UPageBody>
        <UBadge v-if="page.tags" v-for="tag in page.tags" :key="tag" variant="soft" :label="tag" />
        <ContentRenderer
          v-if="page.body"
          :value="page"
        />
        <USeparator v-if="surround?.length" />
        <UContentSurround :surround="surround" />
      </UPageBody>
      <template v-if="page?.body?.toc?.links?.length" #right>
        <RLLayoutBox
          direction="vertical"
          gap="md"
        >
          <UContentToc title="Table of Contents" :links="page.body.toc.links" highlight />
          <USeparator />
          <UButton variant="link" leadingIcon="lucide:file-edit" label="Edit Page"/>
          <span class="text-muted text-sm">Last Modified: <time :datetime="page.lastModified">{{ lastModified }}</time></span>
        </RLLayoutBox>
      </template>
    </UPage>
  </UContainer>
</template>

<style scoped>

</style>