<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#81c9fa'"></beat-loader>
    <slot v-if="!isLoading"></slot>
  </button>
</template>

<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
export default {
  name: "PxButton",
  components: {
    BeatLoader,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
