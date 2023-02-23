<script>
import Timeline from "@/components/partials/Timeline.vue";
import ProgressBar from "@/components/partials/ProgressBar.vue";
export default {
  components: {
    Timeline,
    ProgressBar,
  },
  setup() {
    const educations = [
      {
        year: "2018",
        organiztion: "Akhabr Elyoum Academy",
        title: "Computer Science",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, ",
      },
      {
        year: "2018",
        organiztion: "Akhabr Elyoum Academy",
        title: "Computer Science",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, ",
      },
    ];
 
    const experiences = [
      {
        year: "2018",
        organiztion: "Akhabr Elyoum Academy",
        title: "Computer Science",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, ",
      },
      {
        year: "2018",
        organiztion: "Akhabr Elyoum Academy",
        title: "Computer Science",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor, ",
      },
    ];

    const skills = [
      {
        key: "CSS",
        value: 56,
      },
      {
        key: "HTML",
        value: 67,
      },
      {
        key: "HTML5",
        value: 23,
      },
    ];

    const Knowledges = [
      "Javascript",
      "API",
      "Axios",
      "vue.js",
      "Vuex",
      "Vue Router",
      "Javascript",
      "API",
      "Axios",
      "vue.js",
      "Vuex",
      "Vue Router",
      "Javascript",
      "API",
      "Axios",
      "vue.js",
      "Vuex",
      "Vue Router",
    ];

    return {
      educations,
      experiences,
      skills,
      Knowledges,
    };
  },
};
</script>

<template>
  <div
    class="h-full bg-secondry-bg rounded-3xl p-16 overflow-y-scroll relative"
  >
    <h3 class="mb-8 text-3xl text-white font-bold inline-block relative title">
      Resume
    </h3>
    <div class="grid grid-cols-12">
      <div class="col-span-7">
        <div class="mb-12">
          <h3
            class="
              text-xl text-white
              font-semibold
              inline-block
              relative
              semi-title
              mb-6
            "
          >
            Eductions
          </h3>
          <Timeline
            v-for="(item, index) in educations"
            :key="index"
            :item="item"
          />
        </div>
        <div class="mb-12">
          <h3
            class="
              text-xl text-white
              font-semibold
              inline-block
              relative
              semi-title
              mb-6
            "
          >
            Experience
          </h3>
          <Timeline
            v-for="(item, index) in experiences"
            :key="index"
            :item="item"
          />
        </div>
      </div>
      <div class="col-span-5 ml-8">
        <div class="mb-12">
          <h3
            class="
              text-xl text-white
              font-semibold
              inline-block
              relative
              semi-title
              mb-6
            "
          >
            Coding <span class="text-primary"> Skills</span>
          </h3>

          <div v-for="(skill, index) in skills" :key="index" class="mb-2">
            <div class="flex justify-between items-end mb-1 px-1">
              <p class="text-white font-bold text-sm">{{ skill.key }}</p>
              <span class="text-secondry-text text-xs">{{ skill.value }}%</span>
            </div>
            <ProgressBar :width="skill.value" />
          </div>
        </div>
        <div>
          <h3
            class="
              text-xl text-white
              font-semibold
              inline-block
              relative
              semi-title
              mb-6
            "
          >
            Knowledges
          </h3>

          <div>
            <p
              v-for="(item, index) in Knowledges"
              :key="index"
              class="
                bg-primary
                text-white text-sm
                py-1
                px-3
                rounded-md
                inline-block
                mx-1
                my-1
              "
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

