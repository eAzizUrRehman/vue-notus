<template>
  <header
    class="container-wider w-full h-16 py-5 flex justify-between items-stretch bg-tertiary-white text-sm uppercase"
  >
    <div class="flex gap-4">
      <VueNotus />
      <Docs />
    </div>
    <div class="hidden sm:block">
      <Credit color="334155" />
    </div>
    <div class="hidden md:flex-center gap-5">
      <NavbarIcons />
      <DownloadButton />
    </div>
    <div
      class="dim my-auto block md:hidden cursor-pointer"
      @click="openSidebar"
    >
      <img :src="hamburgerIcon" alt="" class="w-6" />
    </div>
    <div
      class="fixed top-0 right-0 w-full h-full bg-[#00000080] flex justify-end items-end backdrop-blur-sm md:hidden"
      @click.self="closeSidebar"
      v-if="showSidebar"
    >
      <div
        class="sm:w-72 w-60 h-[100vh] m-0 bg-background-gray text-tertiary-white tracking-widest"
      >
        <div class="w-full flex justify-end">
          <img
            :src="closeIcon"
            alt=""
            class="w-8 mt-4 mr-4"
            @click="closeSidebar"
          />
        </div>
        <div class="pt-10 sm:px-16 px-12 flex flex-col justify-start gap-6">
          <div @click="showSidebar = false">
            <VueNotus />
          </div>
          <div @click="showSidebar = false">
            <Docs />
          </div>
          <div @click="showSidebar = false">
            <DemoPages />
          </div>
          <div @click="showSidebar = false">
            <NavbarIcons />
          </div>
          <div @click="showSidebar = false">
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import {
  facebookIcon,
  githubIcon,
  twitterIcon,
  hamburgerIcon,
  closeIcon,
} from "../assets/home";
import {
  Button,
  VueNotus,
  Docs,
  DemoPages,
  NavbarIcons,
  DownloadButton,
  Credit,
} from "../components";
export default {
  data() {
    return {
      facebookIcon,
      githubIcon,
      twitterIcon,
      hamburgerIcon,
      closeIcon,
      showSidebar: false,
    };
  },
  components: {
    Button,
    VueNotus,
    Docs,
    DemoPages,
    NavbarIcons,
    DownloadButton,
    Credit,
  },
  methods: {
    openSidebar() {
      this.showSidebar = true;
      document.body.classList.add("overflow-hidden");
    },
    closeSidebar() {
      this.showSidebar = false;
      document.body.classList.remove("overflow-hidden");
    },
  },
};
</script>
