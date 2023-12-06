<template>
  <footer class="container-wider dim flex flex-col pl-5 pr-10">
    <div
      class="mx-auto mb-16 flex scale-100 flex-col justify-between sm:scale-110 md:scale-125 lg:mx-0 lg:scale-100 lg:flex-row"
    >
      <div class="flex flex-col">
        <h4
          class="mx-auto mb-1 mt-3 text-2xl font-semibold tracking-wide lg:mx-0"
        >
          {{ footer.callToAction }}
        </h4>
        <p
          class="xs:max-w-md mx-auto mb-6 max-w-sm text-center tracking-wide lg:mx-0 lg:max-w-xl"
        >
          {{ footer.socialMedia.businessTime }}
        </p>
        <div class="mx-auto flex gap-2 lg:mx-0">
          <div v-for="icon in footer.socialMedia.icons" :key="icon.id">
            <a :href="icon.url" target="_blank" class="cursor-pointer">
              <div
                class="flex-center h-10 w-10 rounded-full bg-tertiary-white shadow-lg"
              >
                <img loading="lazy" :src="icon.icon" alt="" class="w-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-8 flex gap-16 sm:gap-28 lg:mx-0 lg:mt-0">
        <div v-for="footerLink in footer.footerLinks" :key="footerLink.id">
          <h5 class="text-sm font-semibold uppercase tracking-wider">
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

    <div class="h-[0.08px] w-full bg-background-gray opacity-30"></div>

    <p class="mx-auto my-6 text-xs font-semibold tracking-wider">
      {{ footer.copyright }}
    </p>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      footer: (state) => state.footer
    })
  }
}
</script>
