<template>
  <div class="text-center-text">
    <h1
      class="px-5 py-2.5 my-1.5 font-semibold text-2xl tracking-wide border-l-2 border-l-center-title-border"
    >
      {{ title }}
    </h1>
    <p class="my-7 text-sm">
      {{ topline }}
    </p>
    <div class="w-full h-[0.6px] bg-dim-gray opacity-40 my-9"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    topline: String,
  },
};
</script>
