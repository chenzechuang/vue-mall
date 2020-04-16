<template>
  <div>
    <router-view class="router"></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
export default {
  components: {
    Tabbar
  }
};
</script>

<style lang="less" scoped>
</style>