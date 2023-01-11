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
      class="
        text-xl text-white
        font-semibold
        inline-block
        relative
        semi-title
        mb-4
      "
    >
      What <span class="text-primary">I Do</span>
    </h3>
    <div class="flex flex-wrap flex-row">
      <div class="basis-1/2 text-white px-3 my-3" v-for="i in 4" :key="i">
        <Computer />
        <p class="text-lg my-2">Web Design</p>
        <p class="text-sm font-extralight">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          dignissimos ipsam voluptatibus repellendus nobis tempore aut fuga
          voluptatem, ipsam voluptatibus repellendus .
        </p>
      </div>
    </div>
  </div>
</template>

<style  scoped>
</style>