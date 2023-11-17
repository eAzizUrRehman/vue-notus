<template>
  <header
    class="download-container-wider w-full h-16 py-9 pl-28 pr-4 flex items-center justify-between text-sm"
  >
    <div class="flex-center gap-2">
      <img loading="lazy" :src="logo" alt="" class="logo-black w-9" />
      <router-link
        :to="{ name: 'home' }"
        class="font-semibold text-base cursor-pointer"
      >
        Vue Notus
      </router-link>
    </div>

    <div class="custom-development flex items-center gap-9">
      <router-link
        to="/"
        class="font-semibold text-xs text-download-nav-blue tracking-wide uppercase cursor-pointer"
      >
        Custom Development
      </router-link>
      <router-link
        :to="{ name: 'live-preview' }"
        class="font-semibold text-xs text-download-nav-blue tracking-wide uppercase cursor-pointer"
      >
        Preview
      </router-link>
      <router-link
        :to="{ name: 'docs' }"
        class="font-semibold text-xs text-download-nav-blue tracking-wide uppercase cursor-pointer"
      >
        Docs
      </router-link>
      <DownloadButton text="Download" bgColor="00BBFF" />
    </div>
  </header>
</template>
<script>
import { logo } from "../../assets/download";
import { DownloadButton } from "../../components";
export default {
  data() {
    return { logo };
  },
  components: {
    DownloadButton,
  },
};
</script>
