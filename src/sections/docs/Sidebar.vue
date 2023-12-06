<template>
  {{ sidebar.subtopics }}
  <div class="pt-6 text-sidebar-text">
    <div class="flex items-center justify-start gap-2">
      <img loading="lazy" :src="vueLogo" alt="" width="25" />
      <h1 class="text-lg font-extrabold">Vue Notus</h1>
    </div>
    <div class="max-h-[83dvh] overflow-y-auto">
      <div v-for="topic in sidebar.topics" :key="topic.id">
        <h2 class="mt-6 text-sm font-bold">{{ topic.label }}</h2>
        <ul>
          <li
            v-for="subtopic in topic.subtopics"
            :key="subtopic.id"
            class="my-2.5 text-sm tracking-wide"
          >
            <router-link :to="subtopic.link">
              {{ subtopic.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { vueLogo } from '../../assets/docs'
import { overview } from '../../store/docs/gettingStarted'
export default {
  data() {
    return { overview, vueLogo }
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.sidebar
    })
  }
}
</script>
<style scoped>
.router-link-active {
  padding-left: 6px;
  color: #2f99e5;
  border-left: 3px solid #2f99e5;
}
</style>
