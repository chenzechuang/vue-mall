import Vue from 'vue';
import {Form, Field, Button, Tabbar, TabbarItem, Swipe, SwipeItem, Notify} from "vant"

let vantUIs = [Form, Field, Button, Tabbar, TabbarItem, Swipe, SwipeItem, Notify]

vantUIs.forEach(vantUI => Vue.use(vantUI))
