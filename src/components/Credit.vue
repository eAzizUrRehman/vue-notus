<template>
  <p
    class="dim flex-center h-full text-xs capitalize"
    :style="{ color: '#' + color }"
  >
    Originally designed & created by
    <span class="ml-1 font-semibold text-center-link">
      <a
        class="cursor-pointer"
        target="_blank"
        href="https://www.creative-tim.com/"
      >
        Creative Tim
      </a>
    </span>
  </p>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>
