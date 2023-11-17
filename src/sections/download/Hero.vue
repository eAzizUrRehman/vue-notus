<template>
  <section class="download-container-wider pb-40 w-full text-white flex">
    <div class="w-1/2">
      <img
        loading="lazy"
        :src="hero.image"
        alt=""
        class="w-11/12 rounded-3xl"
      />
      <div class="mt-8 flex-center gap-4">
        <DownloadButton
          :text="hero.button2Text"
          :bgColor="hero.button2BgColor"
          :color="hero.button2Color"
          :borderColor="hero.button2BorderColor"
        />
        <DownloadButton
          :text="hero.button3Text"
          :bgColor="hero.button3BgColor"
          :color="hero.button3Color"
        />
      </div>
    </div>
    <div class="w-1/2 flex-center flex-col pl-32">
      <h1 class="text-3xl">
        {{ hero.title }}
      </h1>
      <p class="mt-5 uppercase text-sm font-base tracking-wide">
        {{ hero.tagline }}
      </p>

      <div class="flex-center mt-10">
        <img loading="lazy" :src="hero.icon1" alt="" width="20" />
        <img loading="lazy" :src="hero.icon1" alt="" width="20" />
        <img loading="lazy" :src="hero.icon1" alt="" width="20" />
        <img loading="lazy" :src="hero.icon1" alt="" width="20" />
        <img loading="lazy" :src="hero.icon1" alt="" width="20" />
        <p class="ml-2 text-sm">
          {{ hero.rating }} ({{ hero.reviews }} Reviews)
        </p>
      </div>
      <div class="mt-5 flex-center gap-2">
        <img loading="lazy" :src="hero.icon2" alt="" width="20" />
        <span>
          {{ hero.licence }}
        </span>
      </div>
      <div class="my-5 w-full h-[0.6px] bg-white opacity-30"></div>
      <DownloadButton
        :text="hero.button1Text"
        :bgColor="hero.button1BgColor"
        :color="hero.button1Color"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { DownloadButton } from "../../components";
export default {
  components: {
    DownloadButton,
  },
  computed: {
    ...mapState({
      hero: (state) => state.downloadHero,
    }),
  },
};
</script>