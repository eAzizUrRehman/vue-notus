<template>
  <section>
    <h3 class="mx-auto mt-20 w-fit text-3xl text-white">
      {{ sharingIsCaring.text }}
    </h3>
    <div class="flex-center mx-auto mt-10 w-fit gap-2">
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
import { mapState } from 'vuex'
import { DownloadButton } from '../../components'
export default {
  computed: {
    ...mapState({
      sharingIsCaring: (state) => state.sharingIsCaring
    })
  },
  components: {
    DownloadButton
  }
}
</script>
