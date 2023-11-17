<template>
  <section class="download-container-wider w-full py-10 text-white">
    <div class="w-full flex justify-between items-center">
      <div class="flex-center">
        <img loading="lazy" :src="logo" alt="" width="40" class="logo-white" />
        <router-link
          :to="{ name: 'home' }"
          class="max-w-[5rem] ml-2 text-md tracking-wide"
        >
          {{ quickLinks.title }}
        </router-link>
      </div>
      <nav class="flex gap-4">
        <ul v-for="links in quickLinks.links" :key="links.id">
          <li class="flex-center flex-col gap-2 text-xs cursor-pointer">
            <img loading="lazy" :src="links.iconUrl" alt="" width="20" />
            <span>
              {{ links.label }}
              <img
                loading="lazy"
                v-if="links.dropdownIcon"
                :src="links.dropdownIcon"
                alt=""
                class="w-3 inline"
              />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { logo } from "../../assets/download";
export default {
  data() {
    return { logo };
  },
  computed: {
    ...mapState({
      quickLinks: (state) => state.quickLinks,
    }),
  },
};
</script>
