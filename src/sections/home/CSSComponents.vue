<template>
  <div
    class="container-tighter flex lg:flex-row flex-col lg:scale-100 md:scale-125 sm:scale-110 scale-100"
  >
    <div class="lg:mx-0 mx-auto lg:w-1/2 w-fit lg:mb-0 mb-20">
      <ContentDetailsCard :component="cssComponents" />
    </div>
    <div
      class="lg:mx-0 mx-auto px-20 lg:w-1/2 md:w-[38rem] sm:w-[35rem] w-[20rem] aspect-[13/10] relative block lg:mt-0 mt-20  "
    >
      <img
        :src="excellentServices"
        alt=""
        class="shadow-lg absolute lg:w-48 md:w-56 sm:w-48 w-36 rounded-lg sm:left-20 left-4 sm:-top-20 -top-28"
      />
      <img
        :src="github"
        alt=""
        class="shadow-lg absolute lg:w-24 md:w-32 sm:w-24 w-20 lg:top-32 md:top-40 sm:top-32 top-12 sm:left-48 left-24 rounded"
      />
      <img
        :src="rominaHadid"
        alt=""
        class="shadow-lg absolute lg:w-48 md:w-60 sm:w-52 w-32 right-0 lg:top-0 md:-top-6 rounded-lg "
      />
      <img
        :src="freeRevision"
        alt=""
        class="shadow-lg absolute lg:w-52 md:w-56 sm:w-52 w-32 sm:bottom-16 bottom-12 lg:-left-8 md:left-0 sm:-left-8 -left-4 rounded-lg"
      />
      <img
        :src="regular"
        alt=""
        class="shadow-lg absolute lg:w-32 md:w-40 sm:w-36 w-24 lg:bottom-32 md:bottom-36 sm:bottom-32 bottom-16 sm:right-32 right-20 rounded-lg"
      />
      <img
        :src="indigoMenu"
        alt=""
        class="shadow-lg absolute w-[95%] bottom-0 right-0 rounded-lg"
      />
    </div>
  </div>
</template>

<script>
import {
  excellentServices,
  github,
  indigoMenu,
  regular,
  rominaHadid,
  freeRevision,
} from "../../assets/home";
import { ContentDetailsCard } from "../../components";
import store from "../../store";
export default {
  data() {
    return {
      excellentServices,
      github,
      indigoMenu,
      regular,
      rominaHadid,
      freeRevision,
    };
  },
  components: {
    ContentDetailsCard,
  },
  computed: {
    cssComponents() {
      return store.state.cssComponents;
    },
  },
};
</script>
