
<script >
// import useState from "@/state/index.js";
// import { useFiltersStore } from "@/composables/index.js";

import state from "@/composables/useState.js";
import UserInfo from "./user-info/Index.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    UserInfo,
    Home: () => import("./home/Index.vue"),
    About: () => import("./about-me/Index.vue"),
    Experience: () => import("./experience/Index.vue"),
    Contact: () => import("./contact/Index.vue"),
    Portfolio: () => import("./portfolio/Index.vue"),
  },
  setup() {
    const animationsList = [
      "fade",
      "fade-x",
      "fade-y",
      "roll-in-left",
      // "rotate",
      "scale-in",
      "shrink",
      "swirl",
      "tilt-in",
    ];
    let lastAnimationIndex = 0;
    function getTransation() {
      ++lastAnimationIndex;
      if (animationsList.length === lastAnimationIndex) {
        lastAnimationIndex = 0;
      }
      return animationsList[lastAnimationIndex];
    }

    return { state, getTransation };
  },
};
</script>


<template>
  <div
    class="
      bg-primary-bg
      w-full
      max-w-7xl
      min-h-80
      max-h-80
      m-auto
      rounded-3xl
      grid grid-cols-6
      relative
    "
  >
    <div class="p-10 col-span-2">
      <UserInfo />
    </div>
    <div class="col-span-4">
      <transition :name="getTransation()" mode="out-in">
        <component :is="state.activeTab.component" class="max-h-80" />
      </transition>
    </div>
    <Sidebar />
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-x-enter,
.fade-x-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fade-x-enter-active,
.fade-x-leave-to {
  transition: opacity 0.3s, transform 0.5s;
}

.fade-y-enter,
.fade-y-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-y-enter-active,
.fade-y-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}

.roll-in-left-enter,
.roll-in-left-leave-to {
  transform: translateX(-500px) rotate(-200deg);
  opacity: 0;
}

.roll-in-left-enter-active,
.roll-in-left-leave-active {
  transition: transform 0.3s, opacity 0.5s;
}

.rotate-enter,
.rotate-leave-to {
  transform: rotate(-360deg);
  opacity: 0;
}

.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.7s, opacity 0.5s;
}

.scale-in-enter,
.scale-in-leave-to {
  transform: scale(0.88);
  opacity: 0;
}

.scale-in-enter-active,
.scale-in-leave-active {
  transition: transform 0.3s, opacity 0.5s;
}

.shrink-enter,
.shrink-leave-to {
  transform: scale(1.12);
  opacity: 0;
}

.shrink-enter-active,
.shrink-leave-active {
  transition: transform 0.5s, opacity 0.3s;
}

.swirl-enter,
.swirl-leave-to {
  transform: rotate(-540deg) scale(0);
  opacity: 0;
}

.swirl-enter-active,
.swirl-leave-active {
  transition: transform 0.5s, opacity 1s;
}
.tilt-in-enter,
.tilt-in-leave-to {
  transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
    skew(-35deg, 10deg);
  opacity: 0;
}

.tilt-in-enter-active,
.tilt-in-leave-active {
  transition: ease-out transform 0.4s, opacity 0.3s;
}
</style>

   