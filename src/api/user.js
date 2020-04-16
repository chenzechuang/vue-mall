import Vue from 'vue'

export function login(data) {
  return Vue.axios({
    url: '/vue-mall/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return Vue.axios({
    url: '/vue-mall/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return Vue.axios({
    url: '/vue-mall/user/logout',
    method: 'post'
  })
}
