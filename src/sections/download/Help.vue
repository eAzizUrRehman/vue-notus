<template>
  <section
    class="download-container-tighter w-full px-5 py-10 rounded-2xl bg-white text-download-text-color -translate-y-20"
  >
    <div class="max-w-lg w-full mx-auto">
      <h3 class="text-3xl font-semibold text-center">
        {{ help.topline }}
      </h3>
      <p class="text-center text-lg mt-10 mb-5">
        {{ help.details }}
      </p>
      <div class="flex justify-start flex-wrap gap-2">
        <ul v-for="button in help.buttons" :key="button.id">
          <li class="hover:opacity-100 opacity-70">
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
    <div class="flex mt-5 ml-5">
      <div
        class="w-14 h-14 border-2 border-[#666666] rounded-full border-opacity-60 flex-center p-1.5"
      >
        <img
    loading="lazy" :src="help.logo" alt="" class="logo-black" />
      </div>
      <div class="ml-4 text-download-dim-black">
        <div class="flex gap-2 items-end">
          <span>
            {{ help.testimonial.username }}
          </span>
          <span
            class="text-[9px] text-download-nav-blue px-1.5 py-0.5 border-[0.5px] border-download-nav-blue rounded-md uppercase"
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
      class="mt-6 mb-2 h-[0.6px] w-full bg-download-text-color opacity-10"
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
import { mapState } from "vuex";
import { DownloadButton } from "../../components";
export default {
  computed: {
    ...mapState({
      help: (state) => state.help,
    }),
  },
  components: {
    DownloadButton,
  },
};
</script>
