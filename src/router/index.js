import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue'),
    meta: {
      title: '服務介紹'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
    meta: {
      title: '團隊介紹'
    }
  },
  {
    path: '/column',
    name: 'Column',
    component: () => import(/* webpackChunkName: "column" */ '../views/Column.vue'),
    meta: {
      title: '專欄介紹'
    }
  },
  {
    path: '/reserve',
    name: 'Reserve',
    component: () => import(/* webpackChunkName: "reserve" */ '../views/Reserve.vue'),
    meta: {
      title: '預約服務'
    }
  },
  {
    path: '/back',
    name: 'Backpage',
    component: () => import(/* webpackChunkName: "back" */ '../views/Backpage.vue'),
    meta: {
      title: '後台'
    },
    children: [
      {
        path: '/cases',
        name: 'Cases',
        component: () => import(/* webpackChunkName: "cases" */ '../views/Cases.vue'),
        meta: {
          title: '個案管理'
        }
      },
      {
        path: '/member',
        name: 'Member',
        component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
        meta: {
          login: true,
          title: '人員管理'
        }
      }
    ]
  },
  {
    path: '/back',
    name: 'B',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/Backpage.vue'),
    meta: {
      title: '後台'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
    meta: {
      title: '找不到頁面喔'
    }
  }
]

const router = new VueRouter({
  routes
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
