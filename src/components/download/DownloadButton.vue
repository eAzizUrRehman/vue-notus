<template>
  <div
    class="w-fit py-2.5 px-8 rounded-full outline-none text-xs tracking-wider uppercase flex-center gap-2"
    :style="{
      backgroundColor: bgColor ? '#' + bgColor : '#00000000',
      color: color ? '#' + color : '#ffffff',
      border: borderColor ? '1px solid #' + borderColor : '',
    }"
  >
    <img v-if="icon" :src="icon" alt="" width="16" class="inline" />
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    href: String,
    bgColor: String,
    color: String,
    borderColor: String,
    icon: String,
  },
};
</script>
