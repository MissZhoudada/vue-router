import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:"home"
      }
    },
    {
      path: '/page1',
      name: 'page1',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page1.vue"], resolve);
      },
      meta:{
        title:"page1"
      }
    },
    {
      path: '/page2',
      name: 'page2',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page2.vue"], resolve);
      },
      meta:{
        title:"page2"
      }
    },
    {
      path: '/page3',
      name: 'page3',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page3.vue"], resolve);
      },
      meta:{
        title:"page3"
      }
    },
    {
      path: '/page4',
      name: 'page4',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page4.vue"], resolve);
      },
      meta:{
        title:"page4"
      }
    },
    {
      path: '/page5',
      name: 'page5',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page5.vue"], resolve);
      },
      meta:{
        title:"page5"
      }
    },
    {
      path: '/page6',
      name: 'page6',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page6.vue"], resolve);
      },
      meta:{
        title:"page6"
      }
    },
    {
      path: '/page7',
      name: 'page7',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page7.vue"], resolve);
      },
      meta:{
        title:"page7"
      }
    },
    {
      path: '/page8',
      name: 'page8',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page8.vue"], resolve);
      },
      meta:{
        title:"page8"
      }
    },
    {
      path: '/page9',
      name: 'page9',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page9.vue"], resolve);
      },
      meta:{
        title:"page9"
      }
    },
    {
      path: '/page10',
      name: 'page10',
      props: route => ({
        start: route.query.s,
      }),
      component: resolve => {
        require(["@/components/page10.vue"], resolve);
      },
      meta:{
        title:"page10"
      }
    }
  ]
})
