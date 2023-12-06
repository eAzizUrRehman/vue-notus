<template>
  <div
    class="h-10 w-10 cursor-pointer rounded-full border-[1px] border-white p-2.5 opacity-80 hover:opacity-50"
  >
    <a :href="url">
      <img
        loading="lazy"
        :src="icon"
        :alt="label"
        class="w-full opacity-80 hover:opacity-100"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    url: String,
    label: String
  }
}
</script>
