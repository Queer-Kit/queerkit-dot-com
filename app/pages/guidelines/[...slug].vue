<script lang="ts" setup>
import { mapContentNavigation } from "@nuxt/ui/utils/content"
import { findPageBreadcrumb } from "@nuxt/content/utils"
import type { PageAnchor, PageLink } from "@nuxt/ui"

definePageMeta({
  layout: `guidelines`
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection(`guidelines`).path(route.path).first()
)
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found`,
    fatal: true
  })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings(`guidelines`, route.path, {
    fields: [`description`]
  })
})

const { data: navigation } = await useAsyncData(`navigation`, () =>
  queryCollectionNavigation(`guidelines`)
)

const breadcrumb = computed(() =>
  mapContentNavigation(
    findPageBreadcrumb(navigation?.value, page.value?.path, {
      indexAsChild: true
    })
  ).map(({ icon, ...link }) => link)
)

const lastModified = useDateFormat(page.value.lastModified, `DD/MM/YYYY`)

const pageAnchors: PageAnchor[] = [
  {
    label: `Documentation`,
    icon: `i-lucide-book-open`,
    to: `/docs/getting-started`
  },
  {
    label: `Components`,
    icon: `i-lucide-box`,
    to: `/docs/components`
  },
  {
    label: `Figma Kit`,
    icon: `i-simple-icons-figma`,
    to: `https://go.nuxt.com/figma-ui`,
    target: `_blank`
  },
  {
    label: `Releases`,
    icon: `i-lucide-rocket`,
    to: `https://github.com/nuxt/ui/releases`,
    target: `_blank`
  }
]

const pageLinks = ref<PageLink[]>([
  {
    label: `Share Page`,
    icon: `lucide:send`,
    to: `https://github.com/nuxt/ui/blob/v4/docs/content/3.components/page-links.md`
  },
  {
    label: `Star on GitHub`,
    icon: `i-lucide-star`,
    to: `https://github.com/nuxt/ui`
  },
  {
    label: `Releases`,
    icon: `i-lucide-rocket`,
    to: `https://github.com/nuxt/ui/releases`
  }
])
</script>

<template>
  <UContainer>
    <UPage v-if="page">
      <template #left>
        <UPageAside>
          <template #top>
            <UPageAnchors :links="pageAnchors" class="w-full" />
          </template>
          <QKLayoutBox direction="vertical" gap="md">
            <USeparator />
            <UContentSearchButton :collapsed="false" label="Search" />
            <UContentNavigation :navigation="navigation" highlight />
          </QKLayoutBox>
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
        <template v-if="page.tags">
          <UBadge
            v-for="tag in page.tags"
            :key="tag"
            variant="soft"
            :label="tag"
          />
        </template>
        <ContentRenderer v-if="page.body" :value="page" />
        <QKFeedback :page="page" />
        <USeparator v-if="surround?.length" />
        <UContentSurround :surround="surround" />
      </UPageBody>
      <template v-if="page?.body?.toc?.links?.length" #right>
        <QKLayoutBox direction="vertical" gap="md">
          <UContentToc
            title="Table of Contents"
            :links="page.body.toc.links"
            highlight
          >
            <template #bottom>
              <USeparator />
              <UPageLinks title="Links" :links="pageLinks" />
              <span class="text-sm text-muted"
                >Last Modified:
                <time :datetime="page.lastModified">{{
                  lastModified
                }}</time></span
              >
            </template>
          </UContentToc>
        </QKLayoutBox>
      </template>
    </UPage>
  </UContainer>
</template>

<style scoped></style>
