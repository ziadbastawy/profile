<script>
import Heart from "@/assets/images/Heart.vue";
export default {
  components: {
    Heart,
  },
  setup() {},
};
</script>

<template>
  <div class="mb-12 relative">
    <h3
      class="
        text-xl text-white
        font-semibold
        inline-block
        relative
        semi-title
        mb-10
      "
    >
      Fun <span class="text-primary">Factss</span>
    </h3>
    <div class="flex flex-row justify-between">
      <div
        v-for="card in 3"
        :key="card"
        class="
          text-white
          basis-1/3
          border-2 border-primary-bg
          bg-card-bg
          px-6
          py-3
          rounded-xl
          relative
          mr-4
          flex flex-col
          justify-center
          items-center
        "
      >
        <Heart />
        <p class="text-white text-lg font-semibold my-3">Happy Clients</p>
        <p class="text-secondry-text text-4xl">578</p>
      </div>
    </div>
  </div>
</template>