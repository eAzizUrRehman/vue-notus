<template>
  <section class="flex h-full w-full flex-col">
    <div
      class="flex h-full max-h-[84.62vh] w-full flex-1 gap-8 overflow-y-auto"
    >
      <div class="w-full">
        <div class="docs-content-padding text-center-text">
          <h1
            class="my-1.5 border-l-2 border-l-center-title-border px-5 py-2.5 text-2xl font-semibold tracking-wide"
          >
            {{ curTitle }}
          </h1>
          <p class="my-7 max-w-2xl text-sm">
            {{ curTopline }}
          </p>
          <div class="my-9 h-[0.6px] w-full bg-dim-gray opacity-40"></div>
        </div>
        <div class="flex min-w-full">
          <router-view />
        </div>
      </div>
      <div class="min-w-[28%]">
        <div class="fixed mt-12 border-l-[0.6px] pl-6">
          <div v-for="list in curContentList" :key="list.id">
            <h3
              class="dim mb-1 max-w-[10rem] cursor-pointer text-sm leading-normal tracking-wider hover:text-center-link"
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
      <div class="h-[0.6px] w-full bg-dim-gray opacity-40"></div>
      <div
        class="dim mr-12 mt-3 flex w-full justify-between px-[52px] text-xs text-center-text"
      >
        <p class="font-thin">
          Copyright © Nov 2023
          <router-link
            :to="{ name: 'home' }"
            class="cursor-pointer text-sm font-bold text-center-link"
          >
            Vue Notus by Aziz - Creative Pulse
          </router-link>
        </p>
        <ul class="flex gap-4">
          <li>
            <router-link :to="{ name: 'home' }"> Vue Notus </router-link>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentRoutePath: ''
    }
  },
  computed: {
    curTitle() {
      for (const topic of this.$store.state.sidebar.topics) {
        if (this.currentRoutePath.includes(topic.link)) {
          for (const subtopic of topic.subtopics) {
            if (this.currentRoutePath.includes(subtopic.link)) {
              return subtopic.content.title
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
              return subtopic.content.topline
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
              return subtopic.content.contentList
            }
          }
        }
      }
    }
  },
  mounted() {
    this.currentRoutePath = this.$route.path
    this.$router.afterEach((to) => {
      this.currentRoutePath = to.path
    })
  }
}
</script>
