<template>
  <div>
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      transitionName: 'slide-fade'
    }
  },
};
</script>

<style lang="less" scoped>
  .router {
    width: 100%;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s ease;
  }
  .slide-enter, .slide-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translate(100%, 0);
    opacity: 0;
  }
</style>