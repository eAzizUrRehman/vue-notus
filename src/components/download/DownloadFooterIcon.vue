<template>
  <div
    class="w-10 h-10 p-2.5 rounded-full border-[1px] border-white cursor-pointer hover:opacity-50 opacity-80"
  >
    <a :href="url">
      <img
        :src="icon"
        :alt="label"
        class="w-full hover:opacity-100 opacity-80"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    url: String,
    label: String,
  },
};
</script>
