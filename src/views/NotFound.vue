<template>
  <div class="flex-center h-[90dvh] max-h-screen w-full">
    <img
      loading="lazy"
      :src="Img404"
      alt=""
      class="w-full max-w-sm scale-125 rounded-xl border-2 border-[#334155] shadow-2xl"
    />
  </div>
</template>
<script>
import { Img404 } from '../assets/home'
export default {
  data() {
    return {
      Img404
    }
  }
}
</script>
