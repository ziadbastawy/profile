<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div class="border border-primary p-1 rounded-lg">
    <div class="bg-primary rounded-lg h-1" :style="`width: ${width}%;`"></div>
  </div>
</template>