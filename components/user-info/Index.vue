<script setup>
import { ref } from "vue";
import Avatar from "./Avatar.vue";
import github from "@/assets/images/github.vue";
import linkedin from "@/assets/images/linkedin.vue";
const user = ref({ name: "Ziad Bastawy", jobTitle: "Frontend Engineer 💻" });


function downloadCv() {
  let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = "https://drive.google.com/uc?export=download&id=1-qKU9ZmFxI7E3qdUWsRh6U_64l0LsYNw";
    a.download = "ziadbastawy";
    a.click();
}
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
      <a target="_blank" href="https://www.linkedin.com/in/zeyadbastawy/" class="mr-3"><linkedin /></a>
      <a target="_blank" href="https://github.com/ziadbastawy" class="mr-3"><github /></a>
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
        @click="downloadCv"
      >
        Download CV
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>