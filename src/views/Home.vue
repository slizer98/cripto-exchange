<template>
  <div>
    <ring-loader :loading="isLoading" :color="'#81c9fa'"></ring-loader>
    <PxAssetsTable v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";
import RingLoader from "vue-spinner/src/RingLoader.vue";
export default {
  name: "Home",
  components: {
    PxAssetsTable,
    RingLoader,
  },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => {
        this.assets = assets;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
