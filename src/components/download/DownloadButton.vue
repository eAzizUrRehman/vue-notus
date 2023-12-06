<template>
  <a
    :href="href"
    class="flex-center w-fit gap-2 rounded-full px-8 py-2.5 text-xs uppercase tracking-wider outline-none"
    :style="{
      backgroundColor: bgColor ? '#' + bgColor : '#00000000',
      color: color ? '#' + color : '#ffffff',
      border: borderColor
        ? '1px solid #' + borderColor
        : '1px solid #' + bgColor
    }"
  >
    <img
      loading="lazy"
      v-if="icon"
      :src="icon"
      alt=""
      width="16"
      class="inline"
    />
    {{ text }}
  </a>
  <a href=""></a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    href: String,
    bgColor: String,
    color: String,
    borderColor: String,
    icon: String
  }
}
</script>
