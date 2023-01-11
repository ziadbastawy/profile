<script>
import qoute from "@/assets/images/qoute.vue";
export default {
  components: {
    qoute,
  },
  setup() {},
};
</script>

<template>
  <div class="mb-12 relative">
    <h3
      class="
        text-xl text-white
        font-semibold
        inline-block
        relative
        semi-title
        mb-20
      "
    >
      Testimonials
    </h3>
    <div class="flex flex-row justify-between">
      <div
        class="
          text-white
          basis-1/2
          border-2 border-primary-bg
          px-6
          py-3
          rounded-xl
          relative
          mr-4
        "
      >
        <img
          src="../../assets/images/avatar.jpg"
          alt="test"
          class="rounded-full w-24 absolute -top-10 left-1/3"
        />
        <p class="text-md font-extralight mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          architecto repellendus minima, eligendi deleniti
        </p>
        <div class="flex justify-between items-center mt-5">
          <div>
            <p>Nagwan Samiii</p>
            <p class="font-extralight text-xs">Arabyads</p>
          </div>
          <div>
            <qoute class="w-10 h-10" />
          </div>
        </div>
      </div>
      <div
        class="
          text-white
          basis-1/2
          border-2 border-primary-bg
          px-6
          py-3
          rounded-xl
          relative
        "
      >
        <img
          src="../../assets/images/avatar.jpg"
          alt="test"
          class="rounded-full w-24 absolute -top-10 left-1/3"
        />
        <p class="text-md font-extralight mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          architecto repellendus minima, eligendi deleniti
        </p>
        <div class="flex justify-between items-center mt-5">
          <div>
            <p>Nagwan Samiii</p>
            <p class="font-extralight text-xs">Arabyads</p>
          </div>
          <div>
            <qoute class="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>