<template>
  <section class="download-container-wider w-full py-10 text-white">
    <div class="flex w-full items-center justify-between">
      <div class="flex-center">
        <img loading="lazy" :src="logo" alt="" width="40" class="logo-white" />
        <router-link
          :to="{ name: 'home' }"
          class="text-md ml-2 max-w-[5rem] tracking-wide"
        >
          {{ quickLinks.title }}
        </router-link>
      </div>
      <nav class="flex gap-4">
        <ul v-for="links in quickLinks.links" :key="links.id">
          <li class="flex-center cursor-pointer flex-col gap-2 text-xs">
            <img loading="lazy" :src="links.iconUrl" alt="" width="20" />
            <span>
              {{ links.label }}
              <img
                loading="lazy"
                v-if="links.dropdownIcon"
                :src="links.dropdownIcon"
                alt=""
                class="inline w-3"
              />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { logo } from '../../assets/download'
export default {
  data() {
    return { logo }
  },
  computed: {
    ...mapState({
      quickLinks: (state) => state.quickLinks
    })
  }
}
</script>
