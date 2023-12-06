<template>
  <section
    class="download-container-tighter w-full -translate-y-20 rounded-2xl bg-white px-5 py-10 text-download-text-color"
  >
    <div class="mx-auto w-full max-w-lg">
      <h3 class="text-center text-3xl font-semibold">
        {{ help.topline }}
      </h3>
      <p class="mb-5 mt-10 text-center text-lg">
        {{ help.details }}
      </p>
      <div class="flex flex-wrap justify-start gap-2">
        <ul v-for="button in help.buttons" :key="button.id">
          <li class="opacity-70 hover:opacity-100">
            <DownloadButton
              :text="button.text"
              :icon="button.icon"
              :href="button.link"
              color="666666"
              borderColor="666666"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="ml-5 mt-5 flex">
      <div
        class="flex-center h-14 w-14 rounded-full border-2 border-[#666666] border-opacity-60 p-1.5"
      >
        <img loading="lazy" :src="help.logo" alt="" class="logo-black" />
      </div>
      <div class="ml-4 text-download-dim-black">
        <div class="flex items-end gap-2">
          <span>
            {{ help.testimonial.username }}
          </span>
          <span
            class="rounded-md border-[0.5px] border-download-nav-blue px-1.5 py-0.5 text-[9px] uppercase text-download-nav-blue"
          >
            {{ help.testimonial.action }}
          </span>
          <span class="text-[9px]">
            {{ help.testimonial.time }}
          </span>
        </div>
        <p class="mt-1 text-sm">
          {{ help.testimonial.comment }}
        </p>
      </div>
    </div>
    <div
      class="mb-2 mt-6 h-[0.6px] w-full bg-download-text-color opacity-10"
    ></div>
    <p class="ml-5">
      {{ help.login.instruction }}
      <span class="text-download-nav-blue">
        <router-link :to="help.login.buttonLink">
          {{ help.login.buttonText }}
        </router-link>
      </span>
    </p>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { DownloadButton } from '../../components'
export default {
  computed: {
    ...mapState({
      help: (state) => state.help
    })
  },
  components: {
    DownloadButton
  }
}
</script>
