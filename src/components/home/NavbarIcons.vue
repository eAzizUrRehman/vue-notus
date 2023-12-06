<template>
  <ul class="flex items-center justify-between gap-5">
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
          class="transform cursor-pointer transition-transform duration-100 ease-in-out hover:scale-125"
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
          class="transform cursor-pointer transition-transform duration-100 ease-in-out hover:scale-125"
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
          class="transform cursor-pointer transition-transform duration-100 ease-in-out hover:scale-125"
        />
      </a>
    </li>
  </ul>
</template>

<script>
import { facebookIcon, twitterIcon, githubIcon } from '../../assets/home'
export default {
  data() {
    return {
      facebookIcon,
      twitterIcon,
      githubIcon
    }
  }
}
</script>
