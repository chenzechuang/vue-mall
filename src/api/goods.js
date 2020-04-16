import Vue from 'vue'

export function getBanner() {
  return Vue.axios({
    url: '/vue-mall/goods/banner',
    method: 'get',
  })
}

export function getIconList() {
  return Vue.axios({
    url: '/vue-mall/goods/iconList',
    method: 'get',
  })
}
