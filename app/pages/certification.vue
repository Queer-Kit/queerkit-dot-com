<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

useHead({
  title: 'Certification',
});

const pronouns = ref(['He / Him', 'She / Her', 'They / Them'])
const gender_identities = ref(['Cisgender', 'Transgender', 'Agender'])
const sexual_orientations = ref(['Heterosexual', 'Gay', 'Lesbian', 'Bisexual', 'Asexual'])
const romantic_orientations = ref(['Heteroromantic', 'Homoromantic', 'Aromantic'])

const schema = z.object({
  first_name: z.string().min(2, 'First name must be between 2 and 24 characters long.').max(24, 'First name must be between 2 and 24 characters long.'),
  last_name: z.string().min(2, 'Last name must be between 2 and 24 characters long.').max(24, 'Last name must be between 2 and 24 characters long.'),
  pronouns: z.enum(["He / Him", "She / Her", "They / Them"]),
  gender_identity: z.enum(["Cisgender", "Transgender", "Agender"]),
  sexual_orientation: z.enum(["Heterosexual", "Gay", "Lesbian", "Bisexual", "Asexual"]),
  romantic_orientation: z.enum(["Heteroromantic", "Homoromantic", "Aromantic"]),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms of service.'
  })
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
  first_name: '',
  last_name: '',
  pronouns: 'He / Him',
  gender_identity: 'Cisgender',
  sexual_orientation: 'Heterosexual',
  romantic_orientation: 'Heteroromantic',
  terms: false,
});

const emissionDate = computed(() => {
  const date = new Date();
  return date.toLocaleDateString(); // Formats as 'MM/DD/YYYY'
});

const expirationDate = computed(() => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1); // Add one year
  return date.toLocaleDateString();
});

const value = ref(null)
</script>

<template>
  <UPage>
    <UContainer>
        <RLLayoutBox
          direction="vertical"
          padding="md"
          gap="md"
          alignItems="center"
          justifyContent="center"
        >
          <UPageCard class="w-full max-w-md">
            <UForm title="Queer Certification" :schema="schema" :state="state" @submit="onSubmit">
              <RLLayoutBox
                direction="vertical"
                gap="sm"
              >
                <UFileUpload v-model="value" accept="image/*" label="Drag and drop an image here or select from your device" description="PNG, JPG or WEBP (max. 2MB)" class="w-96 min-h-48" />
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
                  <USelect v-model="state.pronouns" :items="pronouns" />
                </UFormField>
                <UFormField label="Gender Identity" description="" required>
                  <USelect v-model="state.gender_identity" :items="gender_identities" />
                </UFormField>
                <UFormField label="Sexual Orientation" description="" required>
                  <USelect v-model="state.sexual_orientation" :items="sexual_orientations" />
                </UFormField>
                <UFormField label="Romantic Orientation" description="" required>
                  <USelect v-model="state.romantic_orientation" :items="romantic_orientations" />
                </UFormField>
                <UButton type="submit" label="Generate Certificate" color="primary" block />
              </RLLayoutBox>
            </UForm>
          </UPageCard>
          <RLLayoutBox
            direction="vertical"
          >
            <span>First Name: {{ state.first_name }}</span>
            <span>Last Name: {{ state.last_name }}</span>
            <span>Pronouns: {{ state.pronouns }}</span>
            <span>Gender Identity: {{ state.gender_identity }}</span>
            <span>Sexual Orientation: {{ state.sexual_orientation }}</span>
            <span>Romantic Orientation: {{ state.romantic_orientation }}</span>
            <span>Date of Emission: {{ emissionDate }}</span>
            <span>Expiration Date: {{ expirationDate }}</span>
          </RLLayoutBox>
        </RLLayoutBox>
    </UContainer>
  </UPage>
</template>

<style scoped>

</style>