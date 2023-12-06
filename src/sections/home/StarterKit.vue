<template>
  <section
    class="xs:max-w-[680px] mx-auto flex max-w-[380px] translate-y-32 flex-col items-center rounded-xl bg-tertiary-white px-16 py-10 shadow-xl md:max-w-[720px] md:px-32 lg:max-w-[980px] lg:px-44 lg:py-20 xl:max-w-[1250px] xl:px-60"
  >
    <span class="text-5xl">😍</span>
    <h4 class="my-4 text-center text-2xl font-bold tracking-wide">
      {{ starterKit.title }}
    </h4>
    <p class="text-center">
      {{ starterKit.description }}
    </p>
    <div class="mt-8 flex gap-2">
      <Button
        :text="starterKit.button1Text"
        :bgColor="starterKit.button1Color"
      />
      <Button
        :text="starterKit.button2Text"
        :bgColor="starterKit.button2Color"
        :icon="starterKit.button2Icon"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { ContentDetailsCard, Button } from '../../components'

export default {
  components: { ContentDetailsCard, Button },
  computed: {
    ...mapState({
      starterKit: (state) => state.starterKit
    })
  }
}
</script>
