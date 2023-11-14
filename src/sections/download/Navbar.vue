<template>
  <header
    class="container-wider w-full h-16 py-5 flex justify-between items-stretch bg-tertiary-white text-sm uppercase"
  >
    <img :src="logo" alt="" />
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full font-extrabold cursor-pointer"
    >
      Vue Notus
    </router-link>
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full font-extrabold cursor-pointer"
    >
      Vue Notus
    </router-link>

    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full font-extrabold cursor-pointer"
    >
      Vue Notus
    </router-link>
    <Button />
  </header>
</template>
<script>
import logo from "../../assets/download/logo.png";
// import { logo } from "../../assets/download";
import { Button } from "../../components";
export default {
  data() {
    return { logo };
  },
  components: {
    Button,
  },
};
</script>
