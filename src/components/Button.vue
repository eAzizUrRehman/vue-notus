<template>
  <a
    :href="href"
    target="_blank"
    class="bg-black md:px-8 px-4 md:py-4 py-2 rounded border-none outline-none text-white md:text-sm text-xs tracking-wider font-semibold uppercase text-center"
    :class="color.length ? 'bg-black' : ''"
  >
    {{ text ? text : "Click Me" }}
  </a>
</template>

<script>
export default {
  data() {
    return {
      color: "",
    };
  },
  props: {
    href: String,
    text: String,
    bgColor: String,
  },
  computed: {
    bgNewColor() {
      this.color = "qqq";
      // this.color = "bg-[#" + this.bgColor + "]";
    },
  },
};
</script>
