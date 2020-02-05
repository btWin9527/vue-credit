import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const createRouter = () => new Router({
  /*
  * 后端配置
  * springBoot配置：
  * https://blog.csdn.net/wenmin1987/article/details/81069604
  * node配置
  * https://www.cnblogs.com/wtaog/p/9183702.html
  * iis配置
  * https://www.cnblogs.com/shijunLiu/p/6164449.html
  * */
  mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}), // 滚动行为
  /*
  需求：滚动到锚点
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // 如果meta中有scrollTop
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}
}

  * */
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('_views/login') // 路由懒加载
    },
  ]
})

const router = createRouter()
export default router
