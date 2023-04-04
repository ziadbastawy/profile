<script>
import Computer from "@/assets/images/computer.vue";
export default {
  components: {
    Computer,
  },
};
</script>

<template>
  <div class="mb-12">
    <h3
      class="text-xl text-white font-semibold inline-block relative semi-title mb-4"
    >
      What <span class="text-primary">I Do</span>
    </h3>
    <div class="flex flex-wrap flex-row">
      <div class="basis-1/2 text-white px-3 my-3">
        <Computer />
        <p class="text-lg my-2">Web Development</p>
        <p class="text-sm font-extralight">
          Building responsive websites, Integrate with API's, Building reusable
          components.
        </p>
      </div>
    </div>
  </div>
</template>

<style  scoped>
</style>