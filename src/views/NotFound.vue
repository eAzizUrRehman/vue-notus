<template>
  <div class="w-full h-[90dvh] max-h-screen flex-center">
    <img
    loading="lazy"
      :src="Img404"
      alt=""
      class="w-full max-w-sm rounded-xl shadow-2xl border-2 border-[#334155] scale-125"
    />
  </div>
</template>
<script>
import { Img404 } from "../assets/home";
export default {
  data() {
    return {
      Img404,
    };
  },
};
</script>
