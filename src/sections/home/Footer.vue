<template>
  <div class="container-wider pl-5 pr-10 dim flex flex-col">
    <div
      class="mb-16 flex flex-col lg:mx-0 mx-auto lg:flex-row justify-between"
    >
      <div class="flex flex-col">
        <h4
          class="lg:mx-0 mx-auto mt-3 mb-1 text-2xl font-semibold tracking-wide"
        >
          {{ footer.callToAction }}
        </h4>
        <p
          class="lg:max-w-xl xs:max-w-md lg:mx-0 mx-auto max-w-sm mb-6 tracking-wide text-center"
        >
          {{ footer.socialMedia.businessTime }}
        </p>
        <div class="flex gap-2 lg:mx-0 mx-auto">
          <div v-for="icon in footer.socialMedia.icons" :key="icon.id">
            <a :href="icon.url" target="_blank" class="cursor-pointer">
              <div
                class="w-10 h-10 rounded-full shadow-lg flex justify-center items-center bg-tertiary-white"
              >
                <img :src="icon.icon" alt="" class="w-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="lg:mt-0 mt-8 lg:mx-0 mx-auto flex gap-28">
        <div v-for="footerLink in footer.footerLinks" :key="footerLink.id">
          <h5 class="uppercase text-sm font-semibold tracking-wider">
            {{ footerLink.title }}
          </h5>
          <div
            v-for="link in footerLink.links"
            :key="link.id"
            class="mt-1 hover:text-black"
          >
            <a :href="link.url" class="cursor-pointer text-sm">{{
              link.text
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="opacity-30 w-full h-[0.08px] bg-background-gray"></div>

    <p class="my-6 mx-auto text-xs font-semibold tracking-wider">
      {{ footer.copyright }}
    </p>
  </div>
</template>

<script>
import store from "../../store";
export default {
  data() {
    return {};
  },
  computed: {
    footer() {
      return store.state.footer;
    },
  },
};
</script>
