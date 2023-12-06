<template>
  <header
    class="download-container-wider flex h-16 w-full items-center justify-between py-9 pl-28 pr-4 text-sm"
  >
    <div class="flex-center gap-2">
      <img loading="lazy" :src="logo" alt="" class="logo-black w-9" />
      <router-link
        :to="{ name: 'home' }"
        class="cursor-pointer text-base font-semibold"
      >
        Vue Notus
      </router-link>
    </div>

    <div class="custom-development flex items-center gap-9">
      <router-link
        to="/"
        class="cursor-pointer text-xs font-semibold uppercase tracking-wide text-download-nav-blue"
      >
        Custom Development
      </router-link>
      <router-link
        :to="{ name: 'live-preview' }"
        class="cursor-pointer text-xs font-semibold uppercase tracking-wide text-download-nav-blue"
      >
        Preview
      </router-link>
      <router-link
        :to="{ name: 'docs' }"
        class="cursor-pointer text-xs font-semibold uppercase tracking-wide text-download-nav-blue"
      >
        Docs
      </router-link>
      <DownloadButton text="Download" bgColor="00BBFF" />
    </div>
  </header>
</template>
<script>
import { logo } from '../../assets/download'
import { DownloadButton } from '../../components'
export default {
  data() {
    return { logo }
  },
  components: {
    DownloadButton
  }
}
</script>
