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
        year: "2014 - 2018",
        organiztion: "Akhabr Elyoum Academy",
        title: "Computer Science",
        description:
          "Studing principal areas of study within Computer Science include artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering, bioinformatics and theory of computing",
      },
    ];

    const experiences = [
      {
        year: "Dec 2021 - present",
        organiztion: "Arabyads (Boostiny)",
        title: "Mid Frontend Engineer",
        descriptions: [
          "Work in a multidisciplinary team with other professional back-end developers, QC, and web designers.",
          "Maintain, improve, and implement new features to the internal team dashboard using Vuejs, Vuex.",
          "Participate in the sprint grooming, and fill the business gaps.",
        ],
      },
      {
        year: "Oct 2021 - Apr 2022",
        organiztion: "FreeLancer - CofePedia",
        title: "Frontend Engineer",
        descriptions: [
          "Responsible for project delivery.",
          "Divide Tasks through the team.",
          "Code review.",
          "Built core functions.",
        ],
      },
      {
        year: "Dec 2020 - Nov 2021",
        organiztion: "Schoolia",
        title: "Frontend Engineer",
        descriptions: [
          "We was building LMS using VueJs and Vuesax my tasks divided into",
          "Building and developing the exam assessment module.",
          "Revamping both the assignment and task modules for IB and American learning systems.",
        ],
      },
      {
        year: "Oct 2020 - Apr 2021",
        organiztion: "EPAL Solution",
        title: "Part-time Frontend Engineer",
        description:
          "I was working remotely with a company located in Canada to build a system to support real estate companies to manage their relationship with their customers. we were using VueJs and BootstrapVue",
      },
      {
        year: "Dec 2019 - Nov 2021",
        organiztion: "Eduvaly “Schoolver”",
        title: "Junior Frontend Engineer",
        descriptions: [
          "We was building school managment system (SMS) using VueJs and Vuesax my tasks divided into",
          "Building and developing different modules.",
          "Code Review Sessions",
        ],
      },
    ];

    const skills = [
      {
        key: "HTML",
        value: 90,
      },
      {
        key: "CSS",
        value: 80,
      },
      {
        key: "Javascript",
        value: 90,
      },
      {
        key: "VueJs",
        value: 90,
      },
    ];

    const Knowledges = [
      "HTML",
      "PugJS",
      "CSS",
      "Bootstrab",
      "Tailwind",
      "sass/scss",
      "Javascript",
      "VueJs",
      "Vue Router",
      "VueX",
      "API's",
      "AxiosJs",
      "Webpack",
      "Firebase",
      "Git",
      "MySQL",
      "JQuery",
      "NuxtJs",
      "Vuetify",
      "Vuesax",
      "Jira",
      "Figma",
      "Jest",
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
            class="text-xl text-white font-semibold inline-block relative semi-title mb-6"
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
            class="text-xl text-white font-semibold inline-block relative semi-title mb-6"
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
            class="text-xl text-white font-semibold inline-block relative semi-title mb-6"
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
            class="text-xl text-white font-semibold inline-block relative semi-title mb-6"
          >
            Knowledges
          </h3>

          <div>
            <p
              v-for="(item, index) in Knowledges"
              :key="index"
              class="bg-primary text-white text-sm py-1 px-3 rounded-md inline-block mx-1 my-1"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

