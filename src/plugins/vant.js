import {Form, Field, Button, Tabbar, TabbarItem} from "vant"

let vantUIs = [Form, Field, Button, Tabbar, TabbarItem]

export default {
  install(Vue) {
    vantUIs.forEach(vantUI => [Vue.component(vantUI.name, vantUI)])
  }
}
