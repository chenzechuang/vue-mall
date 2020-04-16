<template>
  <van-swipe>
    <van-swipe-item v-for="(list, index) in lists" :key="index">
      <ul class="icon-list">
        <li class="icon-item" v-for="(item, index) in list" :key="index">
          <img v-lazy="item.image" />
          <p>{{ item.label }}</p>
        </li>
      </ul>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import Vue from "vue";
  import { Lazyload } from "vant";

  Vue.use(Lazyload);

  export default {
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        lists: this.data
      }
    },
  }
</script>

<style lang="less" scoped>
  .icon-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .icon-item {
      width: 20%;
      margin-bottom: 10px;
      cursor: pointer;
      p {
        margin: 5px 0;
        font-size: 18px;
      }
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
</style>