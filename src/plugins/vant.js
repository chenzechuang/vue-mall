import {Form, Field, Button} from "vant"

let vantUIs = [Form, Field, Button]

export default {
  install(Vue) {
    vantUIs.forEach(vantUI => [Vue.component(vantUI.name, vantUI)])
  }
}
