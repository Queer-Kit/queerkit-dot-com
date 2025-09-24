<script setup lang="ts">
const { copy } = useClipboard()
const toast = useToast()

const {} = defineProps<{
  hex: string
  rgb: string
  hsl: string
  cmyk: string
  oklch: string
}>()

const copyToClipboard = async (text: string) => {
  try {
    await copy(`${text}`)
    toast.add({
      title: `Color copied to clipboard!`,
      description: text,
      color: `success`
    })
  } catch {
    toast.add({
      title: `Failed to copy color to clipboard.`,
      description: `An unexpected error occurred. Please try again.`,
      color: `error`
    })
  }
}
</script>

<template>
  <UCard>
    <QKLayoutBox direction="horizontal" gap="sm">
      <div
        class="aspect-square"
        :style="{ backgroundColor: hex, width: '100%' }"
      />

      <QKLayoutBox direction="vertical" gap="sm" justify-content="center">
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
      </QKLayoutBox>
    </QKLayoutBox>
  </UCard>
</template>
