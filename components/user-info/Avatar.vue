<script setup>
const props = defineProps({
  url: {
    type: String,
    default: "../../assets/images/avatar.jpg",
  },
});
</script>

<template>
  <img
    class="rounded-full w-52 h-52 mx-auto mt-10"
    src="../../assets/images/avatar.jpg"
    alt="mine"
  />
</template>

<style scoped>
img::after {
  position: absolute;
  opacity: 0.3;
  top: 7%;
  left: 7%;
  border-radius: 300px;
  content: "";
  height: 100%;
  width: 100%;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    #fff,
    #fff 1px,
    transparent 0px,
    transparent 100%
  );
  background-image: -moz-repeating-radial-gradient(
    center center,
    #fff,
    #fff 1px,
    transparent 0px,
    transparent 100%
  );
  background-image: -ms-repeating-radial-gradient(
    center center,
    #fff,
    #fff 1px,
    transparent 0px,
    transparent 100%
  );
  -webkit-background-size: 6px 6px;
  -moz-background-size: 6px 6px;
  background-size: 6px 6px;
  z-index: -1;
}
</style>