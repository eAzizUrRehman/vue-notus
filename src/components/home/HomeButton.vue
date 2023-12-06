<template>
  <router-link
    :to="{
      name: 'download'
    }"
    class="text-xs font-medium text-tertiary-white"
  >
    <div
      class="transform cursor-pointer rounded bg-secondary-green px-4 py-2 text-center transition-transform duration-1000 ease-in-out hover:shadow-lg"
    >
      <img
        loading="lazy"
        :src="downloadIcon"
        alt=""
        width="12"
        class="mr-0.5 inline transform cursor-pointer transition-transform duration-100 ease-in-out hover:scale-125"
      />
      Download
    </div>
  </router-link>
</template>

<script>
import { downloadIcon } from '../../assets/home'
export default {
  data() {
    return {
      downloadIcon
    }
  }
}
</script>
