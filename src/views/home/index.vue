<template>
  <div>
    <swiper :data="banner" v-if="banner.length"></swiper>
    <goods-swiper :data="iconList" v-if="iconList.length"></goods-swiper>
  </div>
</template>

<script>
  import swiper from '@/components/Swiper'
  import GoodsSwiper from '@/components/GoodsSwiper'
  import { getBanner, getIconList } from '@/api/goods'
  export default {
    components: {
      swiper,
      GoodsSwiper
    },
    data() {
      return {
        banner: [],
        iconList: []
      }
    },
    created() {
      getBanner(this.$store.getters.token).then(response => {
        const data = response.data;
        if (response.data) {
          if (data.code === 20000) {
            this.banner = data.data;
          }
        }
      })
      getIconList(this.$store.getters.token).then(response => {
        const data = response.data;
        if (response.data) {
          if (data.code === 20000) {
            this.iconList = data.data;
          }
        }
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>