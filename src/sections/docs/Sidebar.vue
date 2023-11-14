<template>
  {{ sidebar.subtopics }}
  <div class="pt-6 text-sidebar-text">
    <div class="flex justify-start items-center gap-2">
      <img :src="vueLogo" alt="" width="25" />
      <h1 class="font-extrabold text-lg">Vue Notus</h1>
    </div>
    <div class="max-h-[83dvh] overflow-y-auto">
      <div v-for="topic in sidebar.topics" :key="topic.id">
        <h2 class="font-bold text-sm mt-6">{{ topic.label }}</h2>
        <ul>
          <li
            v-for="subtopic in topic.subtopics"
            :key="subtopic.id"
            class="text-sm my-2.5 tracking-wide"
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
import { vueLogo } from "../../assets/docs";
import overview from "../../store/docs/gettingStarted/overview";
export default {
  data() {
    return { overview, vueLogo };
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
};
</script>
<style scoped>
.router-link-active {
  padding-left: 6px;
  color: #2f99e5;
  border-left: 3px solid #2f99e5;
}
</style>
