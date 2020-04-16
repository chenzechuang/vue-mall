import {Form, Field, Button, Tabbar, TabbarItem, Swipe, SwipeItem} from "vant"

let vantUIs = [Form, Field, Button, Tabbar, TabbarItem, Swipe, SwipeItem]

export default {
  install(Vue) {
    vantUIs.forEach(vantUI => [Vue.component(vantUI.name, vantUI)])
  }
}
