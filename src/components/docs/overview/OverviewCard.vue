<template>
  <div class="my-10 text-center-text">
    <div
      class="flex-center h-12 w-12 rounded-full bg-black"
      :style="{
        backgroundColor: '#' + iconColor
      }"
    >
      <img loading="lazy" :src="iconUrl" alt="" width="20" height="20" />
    </div>
    <h3
      class="text-md mb-2 mt-4 cursor-pointer font-bold tracking-wide hover:text-center-link"
    >
      <router-link to="/">
        {{ title }}
      </router-link>
    </h3>
    <p class="dim text-sm font-thin leading-relaxed tracking-wide">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: String,
    iconUrl: String,
    iconColor: String
  }
}
</script>
