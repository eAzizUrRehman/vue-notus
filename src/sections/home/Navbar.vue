<template>
  <header
    class="container-wider h-16 py-5 flex justify-between items-stretch bg-tertiary-white text-sm uppercase"
  >
    <div class="flex gap-4">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full font-extrabold cursor-pointer"
      >
        Vue Notus
      </router-link>
      <div class="cursor-pointer">
        <router-link
          to="/docs"
          class="dim inline-flex items-center h-full text-xs font-bold transition-colors hover:text-hover-gray duration-100 ease-in-out transform"
        >
          <img
            :src="fileIcon"
            alt=""
            width="12"
            class="mr-2 cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out"
          />
          Docs
        </router-link>
      </div>
    </div>

    <div class="flex justify-center items-center gap-5">
      <router-link
        :to="{
          name: 'demo-pages',
        }"
        class="inline-flex items-center px-2 h-full transition-colors text-xs font-bold hover:text-hover-gray duration-100 ease-in-out transform cursor-pointer"
      >
        Demo Pages
      </router-link>
      <div>
        <ul class="flex justify-center items-center gap-5">
          <li>
            <a
              href="https://www.facebook.com/SignupSolution.official/"
              target="_blank"
            >
              <img
                :src="facebookIcon"
                alt=""
                width="19"
                class="cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/SignupSolution.official/"
              target="_blank"
            >
              <img
                :src="twitterIcon"
                alt=""
                width="19"
                class="cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/SignupSolution.official/"
              target="_blank"
            >
              <img
                :src="githubIcon"
                alt=""
                width="19"
                class="cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out"
              />
            </a>
          </li>
        </ul>
      </div>
      <router-link
          :to="{
            name: 'download',
          }"
          class="font-medium text-tertiary-white text-xs"
        >
      <div
        class="bg-secondary-green rounded py-2 px-4 cursor-pointer hover:shadow-lg transition-transform duration-1000 ease-in-out transform    "
      >
        
          <img
            :src="downloadIcon"
            alt=""
            width="12"
            class="cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out inline mr-0.5"
          />
          Download
        </div>
        </router-link>
    </div>
  </header>
</template>
<script>
import {
  downloadIcon,
  facebookIcon,
  fileIcon,
  githubIcon,
  twitterIcon,
} from "../../assets/home";
import Button from "../../components/Button.vue";
export default {
  data() {
    return {
      downloadIcon,
      facebookIcon,
      fileIcon,
      githubIcon,
      twitterIcon,
    };
  },
  components: {
    Button,
  },
};
</script>
