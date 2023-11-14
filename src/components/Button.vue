<template>
  <div class="">
    <a
      :href="href"
      target="_blank"
      class="w-fit md:px-8 px-4 md:py-4 py-2 rounded border-none outline-none text-white md:text-sm text-xs tracking-wider font-semibold uppercase flex-center gap-2 border-2"
      :style="{
        backgroundColor: '#' + bgColor,
      }"
    >
      <img
        v-if="icon"
        :src="icon"
        alt=""
        width="22"
        height="22"
        class="inline"
      />
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    href: String,
    text: String,
    bgColor: String,
    icon: String,
  },
};
</script>
