<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },

  data() {
    return {
      projects: [
        {
          type: "Self Project",
          img: "https://lh5.googleusercontent.com/lP4MpyJam3BjPNA0r8bF5M6huMJrfKW3JMTaweoghGXa_UrSTMMM5pJEjOBOzgwY5mU=w2400",
          name: "Realtime Mark-up Language translator",
          describation: "test teststtststststtstststst",
          technologies: ["html", "css", "vue", "firebase"],
          github: "",
          url: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <div class="h-full bg-secondry-bg rounded-3xl p-10">
    <h3 class="mb-14 text-3xl text-white font-bold inline-block relative title">
      Projects
    </h3>
    <div>
      <!-- <h3
        class="text-xl text-white font-semibold inline-block relative semi-title mb-6"
      >
        Eductions 
      </h3> -->
      <ProjectCard
        v-for="project in projects"
        :key="project.domin"
        :project="project"
      />
    </div>
  </div>
</template>