import Vue from 'vue'

export function getBanner() {
  return Vue.axios({
    url: '/goods/banner',
    method: 'get',
  })
}

export function getIconList() {
  return Vue.axios({
    url: '/goods/iconList',
    method: 'get',
  })
}
