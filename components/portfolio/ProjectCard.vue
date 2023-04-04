<script>
import ProjectCard from "./ProjectCard.vue";
import Github from "@/assets/images/github.vue";
import metaData from "./data";

export default {
  components: {
    ProjectCard,
    Github,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    getTechnologies() {
      return metaData.technologies.filter((item) =>
        this.project.technologies.includes(item.value)
      );
    },
  },
};
</script>

<template>
  <div class="bg-primary-bg rounded-md text-white project-card flex relative">
    <img :src="project.img" alt="string" class="w-40 rounded-l-md" />
    <div class="p-4">
      <p class="text-xs text-secondry-text">{{ project.type }}</p>
      <p class="text-lg mt-1 mb-2">{{ project.name }}</p>
      <p class="text-md text-secondry-text">
        {{ project.describation }}
      </p>
      <div class="flex mt-2 mb-4">
        <div
          class="mr-2 flex items-center px-2 py-1 rounded-lg bg-secondry-bg technology"
          v-for="item in getTechnologies"
          :key="item.value"
        >
          <img :src="item.img" :alt="item.value" class="mr-2" />
          <p class="text-sm">{{ item.name }}</p>
          <!-- <Html /> -->
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 right-0 flex px-4 py-3 links">
      <a :href="project.url" class="mr-3">
        <img
          src="https://lh4.googleusercontent.com/rC996m4Vp2WNaNIM6f3AVajDp0Rg-7qmkpM7dbSU0F4CSTMmh1Wd9JJ0Gjo508vW6Js=w2400"
          alt="url"
        />
      </a>
      <a target="_blank" :href="project.github"><Github /></a>
    </div>
  </div>
</template>

<style>
.project-card > img {
  filter: grayscale(1);
  transition: all 0.4s ease-in-out;
}
.project-card:hover > img {
  filter: grayscale(0);
  transition: all 0.6s ease-in-out;
}

.technology img {
  width: 24px;
  height: 24px;
  filter: grayscale(1);
  transition: all 0.2s ease-in-out;
}
.technology:hover img {
  filter: grayscale(0);
  transition: all 0.4s ease-in-out;
}

.links svg {
  transform: scale(1.5);
}

.links img {
  width: 28px;
  height: 28px;
}
</style>