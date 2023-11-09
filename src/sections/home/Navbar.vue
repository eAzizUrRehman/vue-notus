<template>
  <header
    class="container-wider w-full h-16 py-5 flex justify-between items-stretch bg-tertiary-white text-sm uppercase"
  >
    <div class="flex gap-4">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full font-extrabold cursor-pointer"
      >
        Vue Notus
      </router-link>
      <div class="cursor-pointer">
        <router-link
          to="/docs"
          class="dim inline-flex items-center h-full text-xs font-bold transition-colors hover:text-hover-gray duration-100 ease-in-out transform"
        >
          <img
            :src="fileIcon"
            alt=""
            width="12"
            class="mr-2 cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out"
          />
          Docs
        </router-link>
      </div>
    </div>

    <div class="hidden md:flex justify-center items-center gap-5">
      <NavbarIcons />
      <DownloadButton />
    </div>
    <div
      class="dim my-auto block md:hidden cursor-pointer"
      @click="showSidebar = true"
    >
      <img :src="hamburgerIcon" alt="" class="w-6" />
    </div>

    <div class="modal-overlay block md:hidden" v-if="showSidebar">
      <div
        class="w-72 h-[100vh] m-0 bg-background-gray text-tertiary-white tracking-widest"
      >
        <img
          :src="closeIcon"
          alt=""
          class="w-8 mt-4 ml-4"
          @click="showSidebar = false"
        />
        <div class="pt-10 px-16 flex flex-col justify-start gap-6">
          <DemoPages />
          <NavbarIcons />
          <DownloadButton />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import {
  facebookIcon,
  fileIcon,
  githubIcon,
  twitterIcon,
  hamburgerIcon,
  closeIcon,
} from "../../assets/home";
import {
  Button,
  DownloadButton,
  NavbarIcons,
  DemoPages,
} from "../../components";
export default {
  data() {
    return {
      facebookIcon,
      fileIcon,
      githubIcon,
      twitterIcon,
      hamburgerIcon,
      closeIcon,
      showSidebar: false,
    };
  },
  components: {
    Button,
    DownloadButton,
    NavbarIcons,
    DemoPages,
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: end;
  backdrop-filter: blur(5px);
}
</style>
