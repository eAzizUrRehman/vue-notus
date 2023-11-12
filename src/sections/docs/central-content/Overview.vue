<template>
  <div class="docs-content-padding text-center-text mb-10">
    <img :src="overview.overview.image" alt="" />
    <p class="mt-4 font-thin tracking-wide text-md">
      {{ overview.overview.imageDescription }}
    </p>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="card in overview.overview.cards" :key="card.id">
        <OverviewCard
          :title="card.title"
          :description="card.description"
          :iconUrl="card.iconUrl"
          :iconColor="card.iconColor"
        />
      </div>
    </div>
    <div class="mt-20">
      <h3 class="mt-4 mb-2 text-xl font-bold tracking-wide">
        {{ overview.overview.resourcesAndCredits.title }}
      </h3>
      <p class="dim text-base font-thin tracking-wide leading-relaxed">
        {{ overview.overview.resourcesAndCredits.description }}
      </p>
      <div class="mt-6 tracking-wide leading-relaxed">
        <div
          v-for="resource in overview.overview.resourcesAndCredits.resources"
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
      <h3 class="mt-4 mb-2 text-xl font-bold tracking-wide">
        {{ overview.overview.learnMore.title }}
      </h3>
      <p class="dim text-base font-thin tracking-wide leading-relaxed">
        {{ overview.overview.learnMore.description }}
      </p>
      <div class="mt-6 tracking-wide leading-relaxed">
        <div v-for="link in overview.overview.learnMore.links" :key="link.id">
          <p class="dim mt-1">
            Follow
            <a :href="link.link" target="_blank" class="text-center-link">
              {{ link.title }}
            </a>
          </p>
        </div>
      </div>
    </div>
    <h3 class="mt-4 mb-2 text-xl font-bold tracking-wide">Quick Start</h3>
    <div class="mt-8 transition-transform duration-500 hover:-translate-y-1">
      <router-link
        to="/docs/getting-started/quick-start"
        class="w-fit px-4 py-3 rounded border-none outline-none text-white md:text-sm text-xs tracking-wider font-semibold bg-[#2D3748]"
      >
        Quick start here
      </router-link>
    </div>
  </div>
</template>
<script>
import overview from "../../../store/stateForDocs/gettingStarted";
import {
  Button,
  CentralContentHeader,
  OverviewCard,
} from "../../../components";
export default {
  data() {
    return {
      overview,
    };
  },
  components: { CentralContentHeader, OverviewCard, Button },
};
</script>
