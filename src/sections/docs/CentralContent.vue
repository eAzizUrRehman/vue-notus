<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="flex flex-1 w-full h-full gap-8 max-h-[84.62vh] overflow-y-auto"
    >
      <div class="w-full">
        <div class="docs-content-padding text-center-text">
          <h1
            class="px-5 py-2.5 my-1.5 font-semibold text-2xl tracking-wide border-l-2 border-l-center-title-border"
          >
            {{ curTitle }}
          </h1>
          <p class="my-7 text-sm max-w-2xl">
            {{ curTopline }}
          </p>
          <div class="w-full h-[0.6px] bg-dim-gray opacity-40 my-9"></div>
        </div>
        <div class="min-w-full flex">
          <router-view />
        </div>
      </div>
      <div class="min-w-[28%]">
        <div class="mt-12 pl-6 border-l-[0.6px] fixed">
          <div v-for="list in curContentList" :key="list.id">
            <h3
              class="dim max-w-[10rem] mb-1 text-sm tracking-wider leading-normal hover:text-center-link cursor-pointer"
            >
              <router-link to="/">
                {{ list.title }}
              </router-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <div class="w-full h-[0.6px] bg-dim-gray opacity-40"></div>
      <div
        class="mt-3 w-full dim text-center-text text-xs px-[52px] mr-12 flex justify-between"
      >
        <p class="font-thin">
          © 2023
          <router-link
            :to="{ name: 'home' }"
            class="font-bold text-sm text-center-link cursor-pointer"
          >
            Creative Tim
          </router-link>
        </p>
        <ul class="flex gap-4">
          <li>
            <router-link :to="{ name: 'home' }"> Creative Tim </router-link>
          </li>
          <li>
            <router-link to="/docs/contact-us"> Contact Us </router-link>
          </li>
          <li>
            <router-link to="/docs/blog"> Blog </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoutePath: "",
    };
  },
  computed: {
    curTitle() {
      for (const topic of this.$store.state.sidebar.topics) {
        if (this.currentRoutePath.includes(topic.link)) {
          for (const subtopic of topic.subtopics) {
            if (this.currentRoutePath.includes(subtopic.link)) {
              return subtopic.content.title;
            }
          }
        }
      }
    },
    curTopline() {
      for (const topic of this.$store.state.sidebar.topics) {
        if (this.currentRoutePath.includes(topic.link)) {
          for (const subtopic of topic.subtopics) {
            if (this.currentRoutePath.includes(subtopic.link)) {
              return subtopic.content.topline;
            }
          }
        }
      }
    },
    curContentList() {
      for (const topic of this.$store.state.sidebar.topics) {
        if (this.currentRoutePath.includes(topic.link)) {
          for (const subtopic of topic.subtopics) {
            if (this.currentRoutePath.includes(subtopic.link)) {
              return subtopic.content.contentList;
            }
          }
        }
      }
    },
  },
  mounted() {
    this.currentRoutePath = this.$route.path;

    this.$router.afterEach((to, from) => {
      this.currentRoutePath = to.path;
    });
  },
};
</script>
