<template>
  <footer class="download-container-wider flex w-full flex-col pt-10">
    <div class="download-container-tighter w-full">
      <div class="flex items-end justify-between">
        <div v-for="stat in footer.stats" :key="stat.id">
          <p class="flex flex-col items-start justify-center gap-1">
            <span class="text-xl">
              {{ stat.numbers }}
            </span>
            <span class="text-sm">
              {{ stat.label }}
            </span>
          </p>
        </div>

        <div class="">
          <label
            class="block text-3xl text-footer-text-color hover:text-white"
            >{{ footer.newsletter.CTA }}</label
          >
          <div class="mt-4 flex gap-4">
            <input
              type="text"
              :placeholder="footer.newsletter.placeholder"
              class="rounded bg-[#4A3D6E] px-4"
            />
            <DownloadButton
              :text="footer.newsletter.buttonText"
              :bgColor="footer.newsletter.buttonBgColor"
              :icon="footer.newsletter.buttonIcon"
            />
          </div>
        </div>
      </div>
      <div class="my-20 flex items-start justify-between tracking-wide">
        <div v-for="column in footer.footerLinks" :key="column.id">
          <p class="mb-4 text-lg">
            {{ column.label }}
          </p>
          <ul v-for="link in column.links" :key="link.id" class="">
            <li class="mt-2 text-sm text-footer-text-color hover:text-white">
              <a :href="link.url">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="h-[0.6px] w-full bg-footer-text-color opacity-20"></div>
    <div class="mx-auto my-20">
      <div class="flex-center flex-col gap-1">
        <img loading="lazy" :src="footer.logo" alt="" class="logo-white w-10" />
        <h3 class="text-xs tracking-wider">
          {{ footer.title }}
        </h3>
        <div class="flex-center mt-4 gap-2">
          <div v-for="handle in footer.socialMedia" :key="handle.id">
            <DownloadFooterIcon
              :label="handle.label"
              :icon="handle.icon"
              :url="handle.url"
            />
          </div>
        </div>
        <p class="mt-8 text-xs tracking-wider">
          {{ footer.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import { DownloadButton, DownloadFooterIcon } from '../../components'
export default {
  components: {
    DownloadButton,
    DownloadFooterIcon
  },
  computed: {
    ...mapState({
      footer: (state) => state.downloadFooter
    })
  }
}
</script>
