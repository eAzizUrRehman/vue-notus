<template>
  <router-link
    :to="{
      name: 'download',
    }"
    class="font-medium text-tertiary-white text-xs"
  >
    <div
      class="bg-secondary-green rounded py-2 px-4 cursor-pointer hover:shadow-lg transition-transform duration-1000 ease-in-out transform text-center"
    >
      <img
        :src="downloadIcon"
        alt=""
        width="12"
        class="cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out inline mr-0.5"
      />
      Download
    </div>
  </router-link>
</template>

<script>
import { downloadIcon } from "../assets/home";
export default {
  data() {
    return {
      downloadIcon,
    };
  },
};
</script>
