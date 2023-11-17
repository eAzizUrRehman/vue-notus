<template>
  <div class="my-10 text-center-text">
    <div
      class="w-12 h-12 flex-center bg-black rounded-full"
      :style="{
        backgroundColor: '#' + iconColor,
      }"
    >
      <img
    loading="lazy" :src="iconUrl" alt="" width="20" height="20" />
    </div>
    <h3
      class="mt-4 mb-2 text-md font-bold tracking-wide hover:text-center-link cursor-pointer"
    >
      <router-link to="/">
        {{ title }}
      </router-link>
    </h3>
    <p class="dim text-sm font-thin tracking-wide leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: String,
    iconUrl: String,
    iconColor: String,
  },
};
</script>
