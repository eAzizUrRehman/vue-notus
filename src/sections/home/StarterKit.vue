<template>
  <div
    class="xl:max-w-[1250px] lg:max-w-[980px] md:max-w-[720px] xs:max-w-[680px] max-w-[380px] xl:px-60 lg:px-44 md:px-32 px-16 lg:py-20 py-10 mx-auto flex flex-col items-center bg-tertiary-white rounded-xl translate-y-32 shadow-xl"
  >
    <span class="text-5xl">😍</span>
    <h4 class="my-4 text-2xl font-bold tracking-wide text-center">
      {{ starterKit.title }}
    </h4>
    <p class="text-center">
      {{ starterKit.description }}
    </p>
    <div class="mt-8 flex gap-2">
      <Button :text="starterKit.button1Text" :bgColor="starterKit.button1Color" />
      <Button :text="starterKit.button2Text" :bgColor="starterKit.button2Color" :icon="starterKit.button2Icon"/>
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
