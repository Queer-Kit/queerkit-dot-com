<script setup lang="ts">
const route = useRoute()

const { data: posts } = await useAsyncData(route.path, () => queryCollection(`blog`).all())
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Blog"
        description="Read the latest articles by our community members."
      />
      <UPageBody>
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
      </UPageBody>
    </UPage>
  </UContainer>
</template>
