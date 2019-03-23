import stackPage from '../pages/stack.js';
import experiencePage from '../pages/experience.js';
import interestPage from '../pages/interest.js';
import aboutPage from '../pages/about.js';

//添加技术栈模版
const stackTpl = Vue.extend(stackPage);

//添加经历模版
const experienceTpl = Vue.extend(experiencePage);

//添加作品模版
const interestTpl = Vue.extend(interestPage);

//添加关于我模版
const aboutTpl = Vue.extend(aboutPage);

//添加页面路由
const melonRouter = new VueRouter({
  linkActiveClass: 'mdui-bottom-nav-active',
  routes: [{
      path: '/',
      redirect: '/v-about'
    },
    {
      path: '/v-stack',
      name: 'v-stack',
      component: stackTpl
    },
    {
      path: '/v-exper',
      name: 'v-exper',
      component: experienceTpl,
    },
    {
      path: '/v-interest',
      name: 'v-interest',
      component: interestTpl
    },
    {
      path: '/v-about',
      name: 'v-about',
      component: aboutTpl
    }
  ]
});

export default melonRouter;