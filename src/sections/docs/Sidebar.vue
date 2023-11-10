<template>
  <div class="pt-6 text-sidebar-text bg-sidebar-green">
    <div class="flex justify-start items-center gap-2">
      <img :src="vueLogo" alt="" width="25" />
      <h1 class="font-extrabold text-lg">Vue Notus</h1>
    </div>
    <div class="max-h-[100dvh] overflow-y-auto">
      <div v-for="topic in sidebar.topics" :key="topic.id">
        <h2 class="font-bold text-sm mt-6">{{ topic.title }}</h2>
        <ul>
          <li
            v-for="subtopic in topic.subtopics"
            :key="subtopic.id"
            class="text-sm mt-1"
          >
            <router-link :to="subtopic.link">
              {{ subtopic.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { vueLogo } from "../../assets/docs";
import store from "../../store";
export default {
  data() {
    return {
      vueLogo,
    };
  },
  computed: {
    sidebar() {
      return store.state.sidebar;
    },
  },
};
</script>
