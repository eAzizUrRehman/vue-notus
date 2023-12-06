<template>
  <div class="">
    <a
      :href="href"
      target="_blank"
      class="flex-center w-fit gap-2 rounded border-2 border-none px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white outline-none md:px-8 md:py-4 md:text-sm"
      :style="{
        backgroundColor: '#' + bgColor
      }"
    >
      <img
        loading="lazy"
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
  props: {
    href: String,
    text: String,
    bgColor: String,
    icon: String
  }
}
</script>
