<script setup>
import { ref } from "vue";
import Avatar from "./Avatar.vue";
import facebook from "@/assets/images/facebook.vue";
import linkedin from "@/assets/images/linkedin.vue";
import twitter from "@/assets/images/twitter.vue";
const user = ref({ name: "Ziad Bastawy", jobTitle: "Na2ash" });
</script>


<template>
  <div class="relative h-full">
    <div><Avatar /></div>
    <p class="text-center text-white text-4xl font-bold mt-6">
      {{ user.name }}
    </p>
    <p class="text-center text-white text-2xl mt-2">
      {{ user.jobTitle }}
    </p>
    <div class="flex justify-center items-center font-medium mt-5">
      <a href="#" class="mr-3"><linkedin /></a>
      <a href="#" class="mr-3"><facebook /></a>
      <a href="#"><twitter /></a>
    </div>
    <div class="text-center mt-14">
      <button
        class="
          text-white
          py-3
          px-7
          border-2
          rounded-3xl
          hover:bg-white hover:text-slate-500
          transition
          ease-in-out
        "
      >
        Download CV
      </button>
    </div>
    <div class="absolute bottom-4 left-24">
      <p class="text-sm text-white">© 2020 All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>
</style>