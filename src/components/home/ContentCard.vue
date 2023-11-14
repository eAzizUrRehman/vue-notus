<template>
  <div
    class="ml-1 h-12 w-12 rounded-full bg-tertiary-white shadow-xl flex-center"
  >
    <img :src="contentCard.iconUrl" alt="" class="w-4" />
  </div>
  <h4 class="text-lg font-bold mt-4 mb-1">
    {{ contentCard.title }}
  </h4>
  <p class="dim text-sm">
    {{ contentCard.description }}
  </p>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    contentCard: Object,
  },
};
</script>
