<script>
export default {
  props: {
    item: {
      required: true,
      default: () => ({}),
      type: Object,
    },
  },
};
</script>

<template>
  <div class="relative flex flex-row justify-between pb-8">
    <div class="text-secondry-text text-end px-4 basis-4/12">
      <p class="font-semibold">{{ item.year }}</p>
      <p class="font-extralight text-xs">{{ item.organiztion }}</p>
    </div>
    <div class="basis-1/12"></div>
    <div
      class="absolute top-0 bottom-0 bg-primary-bg left-35 w-px h-full divider"
    ></div>
    <div class="basis-7/12 text-white">
      <p class="text-base font-semibold">{{ item.title }}</p>
      <p class="text-md font-extralight">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style>
.divider::after {
  content: "";
  display: block;
  position: absolute;
  margin-top: 8px;
  width: 9px;
  height: 9px;
  margin-left: -4px;
  background-color: #222;
  border-radius: 5px;
  border: 2px solid #0ba376;
  z-index: 1;
}
.divider::before {
  content: "";
  display: block;
  position: absolute;
  margin-top: 4px;
  width: 17px;
  height: 17px;
  position: absolute;
  margin-left: -8px;
  border-radius: 10px;
  background-color: #0ba376;
  opacity: 0.25;
  z-index: 0;
}
</style>