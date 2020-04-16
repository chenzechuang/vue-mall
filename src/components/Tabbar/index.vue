<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/catalogue" icon="search">分类</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: 'Tabbar',
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped></style>
