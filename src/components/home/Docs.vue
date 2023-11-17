<template>
  <div class="cursor-pointer">
    <router-link
      to="/docs"
      class="dim inline-flex items-center h-full text-xs font-bold transition-colors hover:text-hover-gray duration-100 ease-in-out transform"
    >
      <img
    loading="lazy"
        :src="fileIcon"
        alt=""
        width="12"
        class="mr-2 cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out"
      />
      Docs
    </router-link>
  </div>
</template>

<script>
import {fileIcon} from "../../assets/home";
export default {
  data() {
    return {
      fileIcon,
    };
  },
};
</script>
