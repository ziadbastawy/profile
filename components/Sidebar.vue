<script >
import state from "@/composables/useState.js";
import Home from "@/assets/images/home.vue";
import About from "@/assets/images/about.vue";
import Experience from "@/assets/images/experience.vue";
import Portfolio from "@/assets/images/portfolio.vue";
import Contact from "@/assets/images/contact.vue";

export default {
  components: {
    Home,
    About,
    Experience,
    Portfolio,
    Contact,
  },
  setup() {
    return {
      state,
    };
  },
};
// const { setActiveTab, activeTab } = useState();
</script>

<template>
  <div class="absolute -right-24">
    <ul class="bg-primary-bg rounded-4xl py-2">
      <li
        v-for="tab in state.tabs"
        :key="tab.id"
        class="p-3 custom-icon"
        :class="state.activeTab.id === tab.id ? 'active-icon' : ''"
      >
        <component
          :is="tab.component"
          @click.native="state.setActiveTab(tab.id)"
          class="cursor-pointer"
        />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.custom-icon svg {
  fill: #b5b6b7 !important;
}
.custom-icon svg:hover,
.active-icon svg {
  fill: #0ba376 !important;
}
</style>