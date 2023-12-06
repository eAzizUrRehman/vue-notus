<template>
  <header
    class="docs-container flex items-center justify-between py-4 text-white"
  >
    <div class="flex w-fit items-center justify-between gap-8">
      <div class="flex w-fit justify-between gap-3">
        <router-link
          :to="{ name: 'home' }"
          class="dim cursor-pointer text-sm font-medium uppercase"
        >
          Vue Notus
        </router-link>
        <div class="dim my-0.5 bg-white pr-[2px]"></div>
        <router-link
          :to="{ name: 'docs' }"
          class="dim cursor-pointer text-sm font-medium uppercase"
        >
          Docs
        </router-link>
      </div>
      <router-link
        :to="{ name: 'live-preview' }"
        class="dim cursor-pointer text-sm"
      >
        Live Preview
      </router-link>
      <router-link :to="{ name: 'support' }" class="dim cursor-pointer text-sm">
        Support
      </router-link>
    </div>
    <div class="hidden sm:block">
      <Credit color="ffffff" />
    </div>
    <router-link :to="{ name: 'download' }" class="dim cursor-pointer text-sm">
      Download Free
    </router-link>
  </header>
</template>

<script>
import { Credit } from '../../components'
export default {
  components: {
    Credit
  }
}
</script>
