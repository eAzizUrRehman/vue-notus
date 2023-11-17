<template>
  <ul class="flex justify-between items-center gap-5">
    <li>
      <a
        href="https://www.facebook.com/SignupSolution.official/"
        target="_blank"
      >
        <img
    loading="lazy"
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
    loading="lazy"
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
    loading="lazy"
          :src="githubIcon"
          alt=""
          width="19"
          class="cursor-pointer hover:scale-125 transform transition-transform duration-100 ease-in-out"
        />
      </a>
    </li>
  </ul>
</template>

<script>
import { facebookIcon, twitterIcon, githubIcon } from "../../assets/home";
export default {
  data() {
    return {
      facebookIcon,
      twitterIcon,
      githubIcon,
    };
  },
};
</script>
