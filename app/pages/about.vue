<script setup lang="ts">
useHead({
  title: 'About',
});

const team = ref([
  {
    src: 'https://cdn.queerkit.com/images/team/bruna-corso.webp',
    icon: 'flags:flag_bisexual',
    name: 'Bruna Corso',
    badges: [
      'Co-founder',
      'Designer'
    ],
    description: 'Lorem ipsum dolor sit amet.',
    links: [
      {
        to: 'https://instagram.com/brunaluizacorso/',
        icon: 'mdi:instagram',
      }
    ]
  },
  {
    src: 'https://cdn.queerkit.com/images/team/daniel-marchi.webp',
    icon: 'flags:flag_gay',
    name: 'Daniel Marchi',
    badges: [
      'Co-founder',
      'Developer'
    ],
    description: 'Lorem ipsum dolor sit amet.',
    links: [
      {
        to: 'https://instagram.com/idantity.me/',
        icon: 'mdi:instagram',
      },
      {
        to: 'https://github.com/idantitydotme/',
        icon: 'mdi:github',
      }
    ]
  },
  {
    src: 'https://cdn.queerkit.com/images/team/gustavo-cardoso.webp',
    icon: 'flags:flag_gay',
    name: 'Gustavo Cardoso',
    badges: [
      'Co-founder',
      'Designer'
    ],
    description: 'Lorem ipsum dolor sit amet.',
    links: [
      {
        to: 'https://instagram.com/gusfcardoso/',
        icon: 'mdi:instagram',
      }
    ]
  }
])
</script>

<template>
  <UPage>
    <UContainer>

      <UPageSection title="History" description="How we got to today.">

      </UPageSection>
      <UPageSection title="Team" description="Queer Kit is developed and maintained by these wonderful people.">
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
            <NuxtImg v-if="member.src" :src="member.src" :alt="member.name" class="w-full" />
            <RLLayoutBox
              direction="horizontal"
              gap="sm"
            >
              <UBadge v-if="member.badges" v-for="badge in member.badges" :label="badge" color="primary" variant="subtle" class="w-fit"/>
            </RLLayoutBox>
            <template #footer>
              <RLLayoutBox
                direction="horizontal"
                gap="sm"
              >
                <UButton v-if="member.links" v-for="link in member.links" variant="outline" :to="link.to" :icon="link.icon" />
              </RLLayoutBox>
            </template>
          </UPageCard>
        </UPageColumns>
      </UPageSection>
    </UContainer>
  </UPage>
</template>

<style scoped>

</style>