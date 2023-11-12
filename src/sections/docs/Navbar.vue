<template>
  <header class="docs-container text-white py-4 flex justify-between items-center">
    <div class="flex justify-between items-center gap-8 w-fit">
      <div class="flex justify-between gap-3 w-fit">
        <router-link
          :to="{ name: 'home' }"
          class="dim   font-medium text-sm uppercase cursor-pointer"
        >
          Creative Tim
        </router-link>
        <div class="dim pr-[2px] my-0.5 bg-white"></div>
        <router-link
          :to="{ name: 'docs' }"
          class="dim   font-medium text-sm uppercase cursor-pointer"
        >
          Docs
        </router-link>
      </div>
      <router-link
        :to="{ name: 'live-preview' }"
        class="dim text-sm cursor-pointer"
      >
        Live Preview
      </router-link>
      <router-link
        :to="{ name: 'support' }"
        class="dim text-sm cursor-pointer"
      >
        Support
      </router-link>
    </div>
    <router-link :to="{ name: 'download' }" class="dim text-sm cursor-pointer">
      Download Free
    </router-link>
  </header>
</template>

<script>
export default {};
</script>
