<script setup lang="ts">
import type { PageLink } from "@nuxt/ui";

const route = useRoute()

const { data: blog } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())
if (!blog.value) {
  throw createError({ statusCode: 404, statusMessage: 'blog not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('blog', route.path, {
    fields: ['description']
  })
})

const title = blog.value.seo?.title || blog.value.title
const description = blog.value.seo?.description || blog.value.description

const datePosted = useDateFormat(blog.value.datePosted, 'DD/MM/YYYY')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const pageLinks = ref<PageLink[]>([
  {
    label: 'Share Post',
    icon: 'lucide:send',
    to: 'https://github.com/nuxt/ui/blob/v4/docs/content/3.components/page-links.md'
  },
  {
    label: 'Star on GitHub',
    icon: 'i-lucide-star',
    to: 'https://github.com/nuxt/ui'
  },
  {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: 'https://github.com/nuxt/ui/releases'
  }
])
</script>

<template>
  <UContainer v-if="blog">
    <UPage>
      <UPageHeader
        :title="blog.title"
        :description="blog.description"
        :headline="blog.type"
        :links="blog.links"
      >
        <RLLayoutBox
          direction="vertical"
          gap="md"
          class="pt-4"
        >
          <UAvatarGroup>
            <UTooltip v-for="(author, index) in blog.authors" :key="index" :text="author.name">
              <ULink :to="author.to">
                <UAvatar :src="author.avatar.src" :alt="author.name" />
              </ULink>
            </UTooltip>
          </UAvatarGroup>
          <span class="text-muted">Date Posted: <time :datetime="blog.datePosted">{{ datePosted }}</time></span>
        </RLLayoutBox>
      </UPageHeader>
      <UPageBody>
        <ContentRenderer
          v-if="blog"
          :value="blog"
        />
        <USeparator v-if="surround?.length" />
        <UContentSurround :surround="surround" />
      </UPageBody>
      <template v-if="blog?.body?.toc?.links?.length" #right>
        <UContentToc title="Table of Contents" :links="blog.body.toc.links" highlight>
          <template #bottom>
            <USeparator />
            <UPageLinks title="Links" :links="pageLinks"/>
            <span class="text-muted text-sm">Date Posted: <time :datetime="page.datePosted">{{ datePosted }}</time></span>
          </template>
        </UContentToc>
      </template>
    </UPage>
  </UContainer>
</template>