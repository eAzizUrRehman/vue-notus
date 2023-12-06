<template>
  <header
    class="container-wider flex h-16 w-full items-stretch justify-between py-5 text-sm uppercase"
  >
    <div class="flex gap-4">
      <VueNotus />
      <Docs />
    </div>
    <div class="hidden sm:block">
      <Credit color="334155" />
    </div>
    <div class="md:flex-center hidden gap-5">
      <NavbarIcons />
      <HomeButton />
    </div>
    <div
      class="dim my-auto block cursor-pointer md:hidden"
      @click="openSidebar"
    >
      <img loading="lazy" :src="hamburgerIcon" alt="" class="w-6" />
    </div>
    <div
      class="fixed right-0 top-0 flex h-full w-full items-end justify-end bg-[#00000080] backdrop-blur-sm md:hidden"
      @click.self="closeSidebar"
      v-if="showSidebar"
    >
      <div
        class="m-0 h-[100vh] w-60 bg-background-gray tracking-widest text-tertiary-white sm:w-72"
      >
        <div class="flex w-full justify-end">
          <img
            loading="lazy"
            :src="closeIcon"
            alt=""
            class="mr-4 mt-4 w-8"
            @click="closeSidebar"
          />
        </div>
        <div class="flex flex-col justify-start gap-6 px-12 pt-10 sm:px-16">
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
            <HomeButton />
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
  closeIcon
} from '../assets/home'
import {
  Button,
  VueNotus,
  Docs,
  DemoPages,
  NavbarIcons,
  HomeButton,
  Credit
} from '../components'
export default {
  data() {
    return {
      facebookIcon,
      githubIcon,
      twitterIcon,
      hamburgerIcon,
      closeIcon,
      showSidebar: false
    }
  },
  components: {
    Button,
    VueNotus,
    Docs,
    DemoPages,
    NavbarIcons,
    HomeButton,
    Credit
  },
  methods: {
    openSidebar() {
      this.showSidebar = true
      document.body.classList.add('overflow-hidden')
    },
    closeSidebar() {
      this.showSidebar = false
      document.body.classList.remove('overflow-hidden')
    }
  }
}
</script>
