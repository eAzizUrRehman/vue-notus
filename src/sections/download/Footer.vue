<template>
  <footer class="download-container-wider w-full pt-10 flex flex-col">
    <div class="download-container-tighter w-full">
      <div class="flex justify-between items-end">
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
              class="px-4 rounded bg-[#4A3D6E]"
            />
            <DownloadButton
              :text="footer.newsletter.buttonText"
              :bgColor="footer.newsletter.buttonBgColor"
              :icon="footer.newsletter.buttonIcon"
            />
          </div>
        </div>
      </div>
      <div class="my-20 flex justify-between items-start tracking-wide">
        <div v-for="column in footer.footerLinks" :key="column.id">
          <p class="text-lg mb-4">
            {{ column.label }}
          </p>
          <ul v-for="link in column.links" :key="link.id" class="">
            <li class="mt-2 text-footer-text-color text-sm hover:text-white">
              <a :href="link.url">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full h-[0.6px] opacity-20 bg-footer-text-color"></div>
    <div class="my-20 mx-auto">
      <div class="flex-center flex-col gap-1">
        <img loading="lazy" :src="footer.logo" alt="" class="logo-white w-10" />
        <h3 class="text-xs tracking-wider">
          {{ footer.title }}
        </h3>
        <div class="mt-4 flex-center gap-2">
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
import { mapState } from "vuex";
import { DownloadButton, DownloadFooterIcon } from "../../components";
export default {
  components: {
    DownloadButton,
    DownloadFooterIcon,
  },
  computed: {
    ...mapState({
      footer: (state) => state.downloadFooter,
    }),
  },
};
</script>
