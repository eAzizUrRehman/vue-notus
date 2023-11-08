<template>
  <a
    :href="href"
    target="_blank"
    class="px-8 py-4 rounded border-none outline-none text-white text-sm tracking-wider font-semibold uppercase"
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
