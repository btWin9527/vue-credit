/*
* 布局容器相关路由
* */
export default [
  /* 首页 */
  {
    path: '/',
    // redirect: '/home', // 重定向到首页
    component: () => import('@/layout'),
    children: [
      {
        path: '/home',
        // 通过alias别名设置，解决默认进入页面显示首页内容,且地址栏只显示域名
        alias: ['/'],
        name: 'home',
        component: () => import('_views/home'),
      },
    ]
  },
  /* 贷款申请 */
  {
    path: '/loan-input',
    redirect: 'loan-input/index',
    component: () => import('@/layout'),
    children: [
      {
        path: 'index',
        name: 'loan-input',
        component: () => import('_views/loan-input'),
      }
    ]
  },
  /* 申请管理 */
  {
    path: '/input-manager',
    redirect: 'input-manager/index',
    component: () => import('@/layout'),
    children: [
      {
        path: 'index',
        name: 'input-manager',
        component: () => import('_views/input-manager'),
      }
    ]
  },
]
