<script>
import Info from "./Info.vue";
import WhatIDo from "./WhatIDo.vue";
import Testimonials from "./Testimonials.vue";
import FunFacts from "./FunFacts.vue";
export default {
  components: {
    Info,
    WhatIDo,
    Testimonials,
    FunFacts,
  },
  setup() {
    const personalInfo = [
      { key: "Age", value: "27" },
      { key: "Residence", value: "Egypt" },
      { key: "Address", value: "Fasil .st - giza" },
      { key: "e-mail", value: "Ziadmahmoud413@gmail.com" },
      { key: "Phone", value: "+201116530215" },
    ];
    return {
      personalInfo,
    };
  },
};
</script>

<template>
  <div class="h-full bg-secondry-bg rounded-3xl p-16 overflow-y-scroll">
    <h3 class="mb-8 text-3xl text-white font-bold inline-block relative title">
      About <span class="text-primary">Me</span>
    </h3>
    <Info />
    <WhatIDo />
    <Testimonials />
    <FunFacts />
  </div>
</template>

<style>
.title::after {
  position: absolute;
  opacity: 0.45;
  top: 12px;
  right: -15px;
  content: "";
  height: 35px;
  width: 50px;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    #0ba376,
    #0ba376 1px,
    transparent 0px,
    transparent 100%
  );
  -webkit-background-size: 6px 6px;
  -moz-background-size: 6px 6px;
  background-size: 6px 6px;
  z-index: 0;
}

.semi-title::after {
  position: absolute;
  opacity: 0.45;
  top: 12px;
  right: -15px;
  content: "";
  height: 25px;
  width: 40px;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    #0ba376,
    #0ba376 1px,
    transparent 0px,
    transparent 100%
  );
  -webkit-background-size: 6px 6px;
  -moz-background-size: 6px 6px;
  background-size: 6px 6px;
  z-index: 0;
}
</style>