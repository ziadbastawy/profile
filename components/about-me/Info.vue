<script>
export default {
  setup() {
    const personalInfo = [
      // { key: "Age", value: "27" },
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
  <div class="flex mb-12 flex-row justify-between">
    <p class="basis-3/5 px-4 text-white text-md font-extralight">
      I am a flexible, reliable and supportive front-end developer. I am always
      very willing to learn and obtain new skills, and often seek new
      responsibilities. I started my career in October 2019, as I was an intern
      front-end in Relitt. From one challenge to another my greatest goal is the
      same, <strong> "making an impact" </strong>.
    </p>
    <div class="basis-2/5">
      <p v-for="item in personalInfo" :key="item.key" class="text-sm">
        <span class="text-primary font-bold mr-4"> {{ item.key }}</span>
        <span class="text-white font-semibold">{{ item.value }} </span>
      </p>
    </div>
  </div>
</template>

<style  scoped>
</style>