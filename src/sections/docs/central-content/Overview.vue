<template>
  <section class="docs-content-padding mb-10 text-center-text">
    <img loading="lazy" :src="overview.image" alt="" />
    <p class="text-md mt-4 font-thin tracking-wide">
      {{ overview.imageDescription }}
    </p>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="card in overview.cards" :key="card.id">
        <OverviewCard
          :title="card.title"
          :description="card.description"
          :iconUrl="card.iconUrl"
          :iconColor="card.iconColor"
        />
      </div>
    </div>
    <div class="mt-20">
      <h3 class="mb-2 mt-4 text-xl font-bold tracking-wide">
        {{ overview.resourcesAndCredits.title }}
      </h3>
      <p class="dim text-base font-thin leading-relaxed tracking-wide">
        {{ overview.resourcesAndCredits.description }}
      </p>
      <div class="mt-6 leading-relaxed tracking-wide">
        <div
          v-for="resource in overview.resourcesAndCredits.resources"
          :key="resource.id"
        >
          <p class="dim mt-1">
            <a :href="resource.link" target="_blank" class="text-center-link">
              {{ resource.title }}
            </a>
            - {{ resource.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <h3 class="mb-2 mt-4 text-xl font-bold tracking-wide">
        {{ overview.learnMore.title }}
      </h3>
      <p class="dim text-base font-thin leading-relaxed tracking-wide">
        {{ overview.learnMore.description }}
      </p>
      <div class="mt-6 leading-relaxed tracking-wide">
        <div v-for="link in overview.learnMore.links" :key="link.id">
          <p class="dim mt-1">
            Follow
            <a :href="link.link" target="_blank" class="text-center-link">
              {{ link.title }}
            </a>
          </p>
        </div>
      </div>
    </div>
    <h3 class="mb-2 mt-4 text-xl font-bold tracking-wide">Quick Start</h3>
    <div class="mt-8 transition-transform duration-500 hover:-translate-y-1">
      <router-link
        to="/docs/getting-started/quick-start"
        class="w-fit rounded border-none bg-[#2D3748] px-4 py-3 text-xs font-semibold tracking-wider text-white outline-none md:text-sm"
      >
        Quick start here
      </router-link>
    </div>
  </section>
</template>
<script>
import { overview } from '../../../store/docs/gettingStarted'
import { Button, CentralContentHeader, OverviewCard } from '../../../components'
export default {
  data() {
    return {
      overview
    }
  },
  components: {
    CentralContentHeader,
    OverviewCard,
    Button
  }
}
</script>
