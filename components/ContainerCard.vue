
<script>
import UserInfo from "./user-info/Index.vue";
export default {
  components: { UserInfo },
  setup() {},
};
</script>


<template>
  <div
    class="
      bg-gray-300
      w-full
      max-w-7xl
      min-h-80
      m-auto
      rounded-3xl
      grid grid-cols-4
    "
  >
    <div class="p-10">
      <UserInfo />
    </div>
    <div class="col-span-3 rounded-3xl h-full bg-red-500">slider</div>
  </div>
</template>
<style>
</style>

   