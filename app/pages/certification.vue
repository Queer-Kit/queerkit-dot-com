<script setup lang="ts">
import * as z from 'zod'
import type {
  FormSubmitEvent, SelectItem
} from '@nuxt/ui'

useHead({
  title: `Certification`
})

const pronouns = ref([
  `He / Him`,
  `She / Her`,
  `They / Them`
])

const schema = z.object({
  first_name: z.string().min(2, `First name must be between 2 and 24 characters long.`).
    max(24, `First name must be between 2 and 24 characters long.`),
  last_name: z.string().min(2, `Last name must be between 2 and 24 characters long.`).
    max(24, `Last name must be between 2 and 24 characters long.`),
  pronouns: z.enum([
    `He / Him`,
    `She / Her`,
    `They / Them`
  ]),
  certification: z.string(),
  terms: z.boolean().refine((val) => val, {
    message: `You must agree to the terms of service.`
  })
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
  first_name: ``,
  last_name: ``,
  pronouns: `He / Him`,
  certification: ``,
  terms: false
})

const emissionDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString()
})

const expirationDate = computed(() => {
  const date = new Date()
  // Add one year
  date.setFullYear(date.getFullYear() + 1)
  return date.toLocaleDateString()
})

const items = ref<SelectItem[]>([
  {
    type: `label`,
    label: `Gender Identity`
  },
  `Cisgender`,
  `Transgender`,
  `Agender`,
  {
    type: `separator`
  },
  {
    type: `label`,
    label: `Sexual Orientation`
  },
  `Heterosexual`,
  `Gay`,
  `Lesbian`,
  `Bisexual`,
  `Asexual`,
  {
    type: `separator`
  },
  {
    type: `label`,
    label: `Romantic Orientation`
  },
  `Heteroromantic`,
  `Homoromantic`,
  `Biromantic`,
  `Aromantic`
])

const value = ref(null)

const certificateId = ref(generateCertificateId())
function generateCertificateId(): string {
  const now = new Date()

  // Get the month (0-11) and day (1-31) and pad them
  const month = (now.getMonth() + 1).toString().padStart(2, `0`)
  const day = now.getDate().toString().
    padStart(2, `0`)

  // Combine them into a short date code
  const datePart = `${ month }${ day }`

  // Generate a random 4-digit number (from 0000 to 9999)
  const randomPart = Math.floor(Math.random() * 10000).toString().
    padStart(4, `0`)

  // Combine the date code and the random part with a hyphen
  return `${ datePart }-${ randomPart }`
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  return
}
</script>

<template>
  <UPage>
    <UContainer>
      <RLLayoutBox
        direction="vertical"
        padding="md"
        gap="md"
        align-items="center"
        justify-content="center"
      >
        <UPageCard class="w-full max-w-md">
          <UForm
            title="Queer Certification"
            :schema="schema"
            :state="state"
            @submit="onSubmit"
          >
            <RLLayoutBox
              direction="vertical"
              gap="sm"
            >
              <UFileUpload
                v-model="value"
                accept="image/*"
                label="Drag and drop an image here or select from your device"
                description="PNG, JPG or WEBP (max. 2MB)"
                class="w-96 min-h-48"
              />
              <RLLayoutBox
                direction="horizontal"
                gap="md"
              >
                <UFormField label="First Name" description="" required>
                  <UInput v-model="state.first_name" placeholder="Enter your first name" />
                </UFormField>
                <UFormField label="Last Name" description="" hint="Optional">
                  <UInput v-model="state.last_name" placeholder="Enter your last name" />
                </UFormField>
              </RLLayoutBox>
              <UFormField label="Pronouns" description="" required>
                <USelect v-model="state.pronouns" :items="pronouns" class="w-48" />
              </UFormField>
              <UFormField label="Certification" description="" required>
                <USelect v-model="state.certification" :items="items" class="w-48" />
              </UFormField>
              <UCheckbox v-model="state.terms" name="terms" required>
                <template #label>
                  I have read and agree to the <ULink to="/documents/terms-of-service" class="text-primary font-medium">Terms of Service</ULink>.
                </template>
              </UCheckbox>
              <UButton
                type="submit"
                label="Generate Certificate"
                color="primary"
                block
              />
            </RLLayoutBox>
          </UForm>
        </UPageCard>
        <RLLayoutBox
          direction="vertical"
        >
          <span>Name: {{ state.first_name }} {{ state.last_name }}</span>
          <span>Pronouns: {{ state.pronouns }}</span>
          <span>Certification: {{ state.certification }}</span>
          <span>Emission Date: {{ emissionDate }}</span>
          <span>Expiration Date: {{ expirationDate }}</span>
          <span>Document ID: QK-{{ certificateId }}</span>
        </RLLayoutBox>
      </RLLayoutBox>
    </UContainer>
  </UPage>
</template>

<style scoped>

</style>
