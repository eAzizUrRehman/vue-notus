<template>
  <div
    class="h-16 w-16 rounded-full bg-tertiary-white shadow-xl flex justify-center items-center"
  >
    <img :src="component.iconUrl" alt="" class="w-7" />
  </div>
  <h4 class="text-2xl font-bold mt-8 mb-4">
    {{ component.title }}
  </h4>
  <p class="dim text-md font-thin leading-relaxed max-w-sm">
    {{ component.description }}
  </p>
  <p
    v-if="component.description2"
    class="dim text-md font-thin leading-relaxed max-w-sm my-6"
  >
    {{ component.description2 }}
  </p>

  <div v-if="component.tags" class="my-8 flex flex-wrap gap-2 max-w-sm">
    <div v-for="(tag, index) in component.tags" :key="index">
      <button
        class="dim px-2 py-1 bg-tertiary-white text-xs tracking-wider uppercase rounded-xl"
      >
        {{ tag }}
      </button>
    </div>
  </div>

  <button
    v-if="component.buttonText"
    class="font-bold align-middle transition-opacity duration-300 ease-in-out hover:opacity-75"
  >
    <a href="/" class="inline">
      {{ component.buttonText }}
    </a>
    <img
      v-if="component.buttonIcon"
      :src="component.buttonIcon"
      alt=""
      class="dim w-4 inline my-auto ml-1"
    />
  </button>
  <button v-if="component.solidButtonText">
    <a
      href="/"
      class="uppercase font-semibold text-xs tracking-wider bg-[#334155] px-6 py-3 rounded-md"
    >
      {{ component.solidButtonText }}
    </a>
  </button>

  <div v-if="component.taglines" class="dim mt-10">
    <div v-for="tagline in component.taglines" :key="tagline.id" class="mb-4">
      <img
        :src="tagline.iconUrl"
        alt=""
        class="w-4 h-4 rounded-full inline mr-4"
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
    component: Object,
  },
};
</script>
