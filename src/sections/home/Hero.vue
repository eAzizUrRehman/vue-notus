<template>
  <section
    class="container-wider max-w-1/2 h-screen max-h-[860px] bg-white flex justify-between items-center lg:scale-100 sm:scale-110 scale-100"
  >
    <div
      class="flex flex-col justify-start items-start w-[71rem] lg:px-0 md:px-20 sm:pl-10 px-5"
    >
      <h1
        class="dim max-w-xl text-3xl font-semibold tracking-wide leading-normal"
      >
        {{ hero.title }}
      </h1>
      <p class="mt-4 max-w-xl mb-10 text-md tracking-wide leading-relaxed">
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
        <Button :text="hero.buttonText1" bgColor="10B981" href="/" />
        <Button :text="hero.buttonText2" bgColor="334155" href="/" />
      </div>
    </div>
    <div class="w-full hidden lg:block">
      <img
        loading="lazy"
        :src="heroImg"
        alt=""
        class="object-cover translate-x-24 scale-110"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { Button } from "../../components";
import { heroImg } from "../../assets/home";

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
    ...mapState({
      hero: (state) => state.hero,
    }),
  },
};
</script>
