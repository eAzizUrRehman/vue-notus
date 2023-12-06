<template>
  <div class="cursor-pointer">
    <router-link
      to="/docs"
      class="dim hover:text-hover-gray inline-flex h-full transform items-center text-xs font-bold transition-colors duration-100 ease-in-out"
    >
      <img
        loading="lazy"
        :src="fileIcon"
        alt=""
        width="12"
        class="mr-2 transform cursor-pointer transition-transform duration-100 ease-in-out hover:scale-125"
      />
      Docs
    </router-link>
  </div>
</template>

<script>
import { fileIcon } from '../../assets/home'
export default {
  data() {
    return {
      fileIcon
    }
  }
}
</script>
