<script setup lang="ts">
const {} = defineProps<{
  jpg: string
  png: string
  webp: string
  svg: string
}>()
</script>

<template>
  <UCard>
    <QKLayoutBox direction="horizontal" gap="sm">
      <NuxtImg :src="webp" class="h-fit w-auto" />
      <QKLayoutBox direction="vertical" gap="sm" justify-content="center">
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:download"
          label="Download JPG"
          class="w-40"
          :to="png"
          target="_blank"
        />
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:download"
          label="Download PNG"
          class="w-40"
          :to="png"
          target="_blank"
        />
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:download"
          label="Download WEBP"
          class="w-40"
          :to="webp"
          target="_blank"
        />
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:download"
          label="Download SVG"
          class="w-40"
          :to="svg"
          target="_blank"
        />
      </QKLayoutBox>
    </QKLayoutBox>
  </UCard>
</template>
