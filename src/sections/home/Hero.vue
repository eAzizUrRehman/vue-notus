<template>
  <div
    class="container-wider max-w-1/2 h-screen max-h-[860px] bg-white flex justify-between items-center"
  >
    <div class="flex flex-col justify-start items-start w-[71rem]">
      <h1
        class="dim w-11/12 text-3xl font-semibold tracking-wide leading-normal"
      >
        {{ hero.title }}
      </h1>
      <p class="mt-4 mb-10 text-md tracking-wide leading-relaxed">
        <span class="dim">
          {{ hero.description1 }}
        </span>
        <span>
          {{ hero.spanText }}
        </span>
        <span class="dim">
          {{ hero.description2 }}
        </span>
      </p>

      <div class="dim flex justify-start items-center gap-1.5">
        <Button :text="hero.buttonText1" bgColor="bg-[#10B981}" href="/" />
        <Button :text="hero.buttonText2" bgColor="334155" href="/" />
      </div>
    </div>
    <div class="w-full">
      <img :src="heroImg" alt="" class="object-cover translate-x-12" />
    </div>
  </div>
</template>

<script>
import { Button } from "../../components";
import { heroImg } from "../../assets/home";
import store from "../../store";

export default {
  data() {
    return {
      heroImg,
    };
  },
  components: {
    Button,
  },
  computed: {
    hero() {
      return store.state.hero;
    },
  },
};
</script>

<style></style>
