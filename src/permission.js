import router from "./router"
import { getToken } from './utils/auth'

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    const hasToken = getToken();
    if (hasToken) {
        if (to.path === '/login') {
            next({path : '/'})
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    }
})