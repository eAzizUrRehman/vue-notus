<template>
  <div
    class="flex-center ml-1 h-12 w-12 rounded-full bg-tertiary-white shadow-xl"
  >
    <img loading="lazy" :src="contentCard.iconUrl" alt="" class="w-4" />
  </div>
  <h4 class="mb-1 mt-4 text-lg font-bold">
    {{ contentCard.title }}
  </h4>
  <p class="dim text-sm">
    {{ contentCard.description }}
  </p>
</template>

<script>
export default {
  props: {
    contentCard: Object
  }
}
</script>
