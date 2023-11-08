<template>
  <div
    class="max-w-[1280px] px-60 py-20 mx-auto flex flex-col items-center bg-tertiary-white rounded-xl translate-y-32 shadow-xl"
  >
    <span class="text-5xl">😍</span>
    <h4 class="my-4 text-2xl font-bold tracking-wide">
      {{ starterKit.title }}
    </h4>
    <p class="text-center">
      {{ starterKit.description }}
    </p>
    <div class="mt-8 flex gap-2">
      <Button :text="starterKit.buttonText1" />
      <Button :text="starterKit.buttonText2" />
    </div>
  </div>
</template>

<script>
import { ContentDetailsCard, Button } from "../../components";
import store from "../../store";
export default {
  data() {
    return {};
  },
  components: { ContentDetailsCard, Button },
  computed: {
    starterKit() {
      return store.state.starterKit;
    },
  },
};
</script>
