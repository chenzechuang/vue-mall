
export function login(data) {
  return axios({
    url: '/vue-mall/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return axios({
    url: '/vue-mall/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return axios({
    url: '/vue-mall/user/logout',
    method: 'post'
  })
}
