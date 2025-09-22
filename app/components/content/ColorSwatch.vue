<script setup lang="ts">
const {

} = defineProps<{
  hex: string
  rgb: string
  hsl: string
  cmyk: string
  oklch: string
}>()

const toast = useToast()

const copyToClipboard = async(text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    toast.add({
      title: `Color copied to clipboard!`,
      description: text,
      color: `success`
    })
  } catch(err) {
    toast.add({
      title: `Failed to copy color to clipboard!`,
      description: `An unexpected error occurred. Please try again.`,
      color: `error`
    })
  }
}
</script>

<template>
  <UCard>
    <RLLayoutBox
      direction="horizontal"
      gap="sm"
    >
      <div
        class="aspect-square"
        :style="{ backgroundColor: hex, width: '100%' }"
      />

      <RLLayoutBox
        direction="vertical"
        gap="sm"
        justify-content="center"
      >
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:copy"
          label="Copy HEX"
          class="w-32"
          @click="copyToClipboard(hex)"
        />
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:copy"
          label="Copy RGB"
          class="w-32"
          @click="copyToClipboard(rgb)"
        />
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:copy"
          label="Copy HSL"
          class="w-32"
          @click="copyToClipboard(hsl)"
        />
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:copy"
          label="Copy CMYK"
          class="w-32"
          @click="copyToClipboard(cmyk)"
        />
        <UButton
          variant="outline"
          size="sm"
          icon="lucide:copy"
          label="Copy OKLCH"
          class="w-32"
          @click="copyToClipboard(oklch)"
        />
      </RLLayoutBox>
    </RLLayoutBox>
  </UCard>
</template>
