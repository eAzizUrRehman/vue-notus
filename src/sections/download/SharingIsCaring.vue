<template>
  <section>
    <h3 class="mt-20 mx-auto w-fit text-white text-3xl">
      {{ sharingIsCaring.text }}
    </h3>
    <div class="mx-auto mt-10 w-fit flex-center gap-2">
      <div v-for="button in sharingIsCaring.buttons" :key="button.id">
        <DownloadButton
          :text="button.label"
          :icon="button.icon"
          :color="button.color"
          :bgColor="button.bgColor"
          :href="button.link"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { DownloadButton } from "../../components";
export default {
  computed: {
    ...mapState({
      sharingIsCaring: (state) => state.sharingIsCaring,
    }),
  },
  components: {
    DownloadButton,
  },
};
</script>
