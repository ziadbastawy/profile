<script>
export default {
  props: {
    //   items: {
    //     type: Array,
    //     required: true,
    //   },
    activeTab: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      items: [
        {
          name: "All",
          value: "",
        },
        {
          name: "Side Projects",
          value: "side_projects",
        },
        {
          name: "Freelance",
          value: "freelance",
        },
      ],
    };
  },
  methods: {
    setActiveTab({ value }) {
      this.$emit("set-active-tab", value);
    },
  },
};
</script>


<template>
  <div class="flex justify-start">
    <p
      v-for="item in items"
      :key="item.value"
      class="mr-3 cursor-pointer"
      :class="activeTab === item.value ? 'text-white' : 'text-secondry-text'"
      @click="setActiveTab(item)"
    >
      {{ item.name }}
    </p>
  </div>
</template>