/*
 * @File:  简历项目初始启动入口
 * @Author: Wu Eva 
 * @Date: 2019-03-23 23:35:13 
 * @Last Modified by: melonHero
 * @Last Modified time: 2019-04-18 21:51:10
 */

import melonRouter from './router/index.js';
(() => {
  /**
   * 获取简历子模块路由html结构
   * @param {String} routerPath 路由地址
   * @param {String} routerIcon 路由图标
   * @param {String} rooterName 路由名称
   * @returns {String} routerHtml 拼接好的子路由信息
   */
  const getFullChildRouterHtml = ([routerPath, routerIcon, rooterName]) => {
    const template = `
    <router-link class='mdui-ripple' to='/v-${routerPath}'>
      <i class='mdui-icon material-icons'>${routerIcon}</i>
      <label>${rooterName}</label>
    </router-link>
    `;
    return template;
  };
  /**
   * 获取简历主页面的页面主要html结构
   * @returns {String} fullHtml 拼接好的页面信息
   */
  const getFullHtml = () => {
    const routerPathArr = ['about','interest','stack','exper'];
    const routerIconArr = ['assignment_ind','assessment','assignment_turned_in','assistant'];
    const rooterNameArr = ['关于我','作品集','技术栈','经历线'];
    let template = `
      <router-view></router-view>
      <div class='mdui-bottom-nav mdui-bottom-nav-scroll-hide mdui-color-blue mdui-bottom-nav-text-auto'>
    `;
    routerPathArr.map((item,index)=>{
      template += getFullChildRouterHtml([item,routerIconArr[index],rooterNameArr[index]]);
    })
    template +='</div>';
    return template;
  }
  /**
   * 获取简历主页面的页面主要Dom元素
   */
  const getFullDom = () => {
    const divDom = document.createElement('div');
    divDom.setAttribute('id', 'app');
    divDom.setAttribute('v-cloak', true);
    divDom.innerHTML = getFullHtml();
    return divDom;
  }
  /**
   * 初始化简历项目
   */
  const initResume = () => {
    const allDom = getFullDom();
    document.body.prepend(allDom);
    new Vue({
      router: melonRouter
    }).$mount('#app');
  }

  // 初始化简历页面结构
  initResume();
})()