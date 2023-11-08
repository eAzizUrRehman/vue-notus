<template>
  <div class="mt-6 bg-red-500">
    <div class="flex justify-start items-center">
      <img :src="vueLogo" alt="" class="w-10" />
      <h1>Vue Notus</h1>
    </div>
    <div class="">
      <!-- <div v-for="topic in sidebar" :key="topic.id">
        <h2>
          {{ topic.title }}
        </h2>
        <div v-for="subtopic in topic" :key="subtopic.id">
          <h3>
            {{ subtopic.title }}
          </h3>
        </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import { vueLogo } from "../../assets/docs";
// import store from "../../store";
export default {
  data() {
    return {
      vueLogo,
    };
  },
  computed: {
    // sidebar() {
    //   return store.state.sidebar;
    // },
  },
};
</script>
