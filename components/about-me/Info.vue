<script>
export default {
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
  <div class="flex mb-12 flex-row justify-between">
    <p class="basis-3/5 px-4 text-white text-lg font-extralight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam, sunt
      itaque laboriosam aspernatur eum fugit aliquam sint id? Numquam obcaecati
      sunt minima quia perspiciatis. Ullam sapiente fugiat blanditiis vitae.
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