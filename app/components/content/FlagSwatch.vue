<script setup lang="ts">
const props = defineProps<{
  jpg: string
  png: string
  webp: string
  svg: string
}>()
</script>

<template>
  <UCard>
    <RLLayoutBox
      direction="horizontal"
      gap="sm"
    >
      <NuxtImg :src="props.webp" class="h-fit w-auto"/>
      <RLLayoutBox
        direction="vertical"
        gap="sm"
        justifyContent="center"
      >
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download JPG" class="w-40" :to="props.png" target="_blank" />
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download PNG" class="w-40" :to="props.png" target="_blank" />
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download WEBP" class="w-40" :to="props.webp" target="_blank" />
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download SVG" class="w-40" :to="props.svg" target="_blank" />
      </RLLayoutBox>
    </RLLayoutBox>
  </UCard>
</template>