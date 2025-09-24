<script setup lang="ts">
import { ar, en, es, fr, ja, ko, pt, ro, zh_cn } from "@nuxt/ui/locale"
import type { FooterColumn } from "@nuxt/ui"

const { locale, setLocale } = useI18n()

type Locale = "ar" | "en" | "es" | "fr" | "ja" | "ko" | "pt" | "ro" | "zh_cn"

function onLocaleUpdate(newLocale: string | undefined) {
  if (typeof newLocale === "string") {
    setLocale(newLocale as Locale)
  }
}

const columns: FooterColumn[] = [
  {
    label: `Resources`,
    children: [
      {
        label: `Branding`,
        to: `/branding/`
      }
    ]
  },
  {
    label: `Documents`,
    children: [
      {
        label: `Privacy Policy`,
        to: `/documents/policies/privacy-policy/`
      },
      {
        label: `Cookie Policy`,
        to: `/documents/policies/cookie-policy/`
      },
      {
        label: `Terms of Service`,
        to: `/documents/policies/terms-of-service/`
      }
    ]
  }
]
</script>

<template>
  <UFooter>
    <template #top>
      <UContainer>
        <QKLayoutBox
          direction="vertical"
          gap="lg"
          class="md:flex-row md:items-start"
        >
          <QKNewsletterSignup
            label="Subscribe to the Queer Kit Newsletter"
            description="Stay updated on new blog posts and company updates. Unsubscribe at any time."
          />
          <UFooterColumns :columns="columns" />
        </QKLayoutBox>
      </UContainer>
    </template>
    <template #left>
      <QKLayoutBox
        direction="vertical"
        gap="sm"
        align-items="center"
        class="md:items-start"
      >
        <NuxtLink to="/">
          <UIcon name="first-party:logotype-color" class="h-48 w-full" />
        </NuxtLink>
        <p class="text-muted text-sm">
          © {{ new Date().getFullYear() }} Queer Kit
        </p>
      </QKLayoutBox>
    </template>
    <template #right>
      <UContainer>
        <QKLayoutBox
          direction="vertical"
          gap="md"
          align-items="center"
          class="md:items-end"
        >
          <QKLayoutBox
            direction="horizontal"
            gap="sm"
            justify-content="center"
            class="md:justify-end"
          >
            <UButton
              size="xl"
              variant="ghost"
              color="primary"
              icon="mdi:instagram"
              to="https://www.instagram.com/idantity.me"
            />
            <UButton
              size="xl"
              variant="ghost"
              color="primary"
              icon="ic:baseline-discord"
              to="https://discord.com/users/682049695173836979"
            />
            <UButton
              size="xl"
              variant="ghost"
              color="primary"
              icon="mdi:spotify"
              to="https://open.spotify.com/user/v5m4qoc9j35ccc6nbzqcookvj?si=d795f9bc1cb34222"
            />
          </QKLayoutBox>
          <QKLayoutBox
            direction="vertical"
            gap="md"
            align-items="center"
            class="md:items-end md:flex-row"
          >
            <ULocaleSelect
              v-model="locale"
              :locales="[ar, en, es, fr, ja, ko, pt, ro, zh_cn]"
              color="secondary"
              class="w-48"
              @update:model-value="onLocaleUpdate($event)"
            />
          </QKLayoutBox>
        </QKLayoutBox>
      </UContainer>
    </template>
  </UFooter>
</template>

<style scoped></style>
