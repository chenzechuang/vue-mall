<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

export default {
  name: "Swiper",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.van-swipe {
  .van-swipe-item {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 240px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
</style>