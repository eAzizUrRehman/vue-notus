<template>
  <div class="flex-center h-16 w-16 rounded-full bg-tertiary-white shadow-xl">
    <img loading="lazy" :src="component.iconUrl" alt="" class="w-7" />
  </div>
  <h4 class="mb-4 mt-8 text-2xl font-bold">
    {{ component.title }}
  </h4>
  <p class="dim text-md max-w-sm font-thin leading-relaxed">
    {{ component.description }}
  </p>
  <p
    v-if="component.description2"
    class="dim text-md my-6 max-w-sm font-thin leading-relaxed"
  >
    {{ component.description2 }}
  </p>

  <div v-if="component.tags" class="my-8 flex max-w-sm flex-wrap gap-2">
    <div v-for="(tag, index) in component.tags" :key="index">
      <button
        class="dim rounded-xl bg-tertiary-white px-2 py-1 text-xs uppercase tracking-wider"
      >
        {{ tag }}
      </button>
    </div>
  </div>

  <button
    v-if="component.buttonText"
    class="align-middle font-bold transition-opacity duration-300 ease-in-out hover:opacity-75"
  >
    <a href="/" class="inline">
      {{ component.buttonText }}
    </a>
    <img
      loading="lazy"
      v-if="component.buttonIcon"
      :src="component.buttonIcon"
      alt=""
      class="dim my-auto ml-1 inline w-4"
    />
  </button>
  <button v-if="component.solidButtonText">
    <a
      href="/"
      class="rounded-md bg-[#334155] px-6 py-3 text-xs font-semibold uppercase tracking-wider"
    >
      {{ component.solidButtonText }}
    </a>
  </button>

  <div v-if="component.taglines" class="dim mt-10">
    <div v-for="tagline in component.taglines" :key="tagline.id" class="mb-4">
      <img
        loading="lazy"
        :src="tagline.iconUrl"
        alt=""
        class="mr-4 inline h-4 w-4 rounded-full"
      />
      <p class="inline">
        {{ tagline.tagline }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    component: Object
  }
}
</script>
