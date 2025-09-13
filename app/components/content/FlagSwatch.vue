<script setup lang="ts">
const props = defineProps<{
  jpg: string
  png: string
  webp: string
  svg: string
}>();

const toast = useToast()

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.add(
      {
        title: 'Color copied to clipboard!',
        description: text,
        color: 'success',
      }
    )
  } catch (err) {
    toast.add(
      {
        title: 'Failed to copy color to clipboard!',
        description: 'An unexpected error occurred. Please try again.',
        color: 'error',
      }
    )
  }
};
</script>

<template>
  <UCard>
    <RLLayoutBox
      direction="vertical"
      gap="sm"
    >
      <NuxtImg :src="props.webp"/>
      <RLLayoutBox
        direction="horizontal"
        gap="md"
        justifyContent="between"
      >
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download JPG" class="w-40" to="" />
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download PNG" class="w-40" to="" />
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download WEBP" class="w-40" to="" />
        <UButton variant="outline" size="sm" icon="lucide:download" label="Download SVG" class="w-40" to="" />
      </RLLayoutBox>
    </RLLayoutBox>
  </UCard>
</template>