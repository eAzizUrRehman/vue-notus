<template>
  <div class="text-center-text">
    <h1
      class="my-1.5 border-l-2 border-l-center-title-border px-5 py-2.5 text-2xl font-semibold tracking-wide"
    >
      {{ title }}
    </h1>
    <p class="my-7 text-sm">
      {{ topline }}
    </p>
    <div class="my-9 h-[0.6px] w-full bg-dim-gray opacity-40"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    topline: String
  }
}
</script>
