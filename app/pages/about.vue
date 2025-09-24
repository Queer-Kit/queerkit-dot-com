<script setup lang="ts">
useHead({
  title: `About`
})

const team = ref([
  {
    src: `https://cdn.queerkit.com/images/team/bruna-corso.webp`,
    icon: `flags:flag_bisexual`,
    name: `Bruna Corso`,
    badges: [`Co-founder`, `Designer`],
    description: `Lorem ipsum dolor sit amet.`,
    links: [
      {
        to: `https://instagram.com/brunaluizacorso/`,
        icon: `mdi:instagram`
      }
    ]
  },
  {
    src: `https://cdn.queerkit.com/images/team/daniel-marchi.webp`,
    icon: `flags:flag_gay`,
    name: `Daniel Marchi`,
    badges: [`Co-founder`, `Developer`],
    description: `Lorem ipsum dolor sit amet.`,
    links: [
      {
        to: `https://instagram.com/idantity.me/`,
        icon: `mdi:instagram`
      },
      {
        to: `https://github.com/idantitydotme/`,
        icon: `mdi:github`
      }
    ]
  },
  {
    src: `https://cdn.queerkit.com/images/team/gustavo-cardoso.webp`,
    icon: `flags:flag_gay`,
    name: `Gustavo Cardoso`,
    badges: [`Co-founder`, `Designer`],
    description: `Lorem ipsum dolor sit amet.`,
    links: [
      {
        to: `https://instagram.com/gusfcardoso/`,
        icon: `mdi:instagram`
      }
    ]
  }
])

const text = ref(`testing`)
</script>

<template>
  <UPage>
    <UContainer>
      <UPageSection title="History" description="How we got to today." />
      <ProseCallout variant="creator" :v-model="`Testing`" />
      <QKCalloutBlock v-model="text" variant="creator" />
      <UPageSection
        title="Team"
        description="Queer Kit is developed and maintained by these wonderful people."
      >
        <UPageColumns>
          <UPageCard
            v-for="(member, index) in team"
            :key="index"
            variant="subtle"
            :icon="member.icon"
            :title="member.name"
            :description="member.description"
            reverse
          >
            <NuxtImg
              v-if="member.src"
              :src="member.src"
              :alt="member.name"
              class="w-full"
            />
            <QKLayoutBox direction="horizontal" gap="sm">
              <template v-if="member.badges">
                <UBadge
                  v-for="badge in member.badges"
                  :key="badge"
                  :label="badge"
                  color="primary"
                  variant="subtle"
                  class="w-fit"
                />
              </template>
            </QKLayoutBox>
            <template #footer>
              <QKLayoutBox>
                direction="horizontal" gap="sm" >
                <template v-if="member.links">
                  <UButton
                    v-for="link in member.links"
                    :key="link"
                    variant="outline"
                    :to="link.to"
                    :icon="link.icon"
                  />
                </template>
              </QKLayoutBox>
            </template>
          </UPageCard>
        </UPageColumns>
      </UPageSection>
    </UContainer>
  </UPage>
</template>

<style scoped></style>
