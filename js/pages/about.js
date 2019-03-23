/*
 * @File:  个人基础信息页面结构相关方法
 * @Author: Wu Eva 
 * @Date: 2019-03-23 21:24:18 
 * @Last Modified by: melonHero
 * @Last Modified time: 2019-03-23 23:00:31
 */

import { aboutData, bannerData } from '../store/data.js';
import getFullDom from './common.js';

/**
 * 获取技术栈相关页面结构数据
 */
const _getTemplateDom = () => {
  const DEFAULT_TITLE_CLASS = 'mdui-col-xs-5 mdui-col-sm-6 b-b-1';
  const template = `
    <div class="mdui-text-center mdui-m-t-1 mdui-container mdui-typo">
      <div class="mdui-col-xs-5 ${DEFAULT_TITLE_CLASS}"><h5>姓名：{{list.name}}</h5></div>
      <div class="mdui-col-xs-7 ${DEFAULT_TITLE_CLASS}"><h5>工作经验：{{list.expr}}</h5></div>
      <div class="mdui-col-xs-5 ${DEFAULT_TITLE_CLASS}"><h5>学历：{{list.education}}</h5></div>
      <div class="mdui-col-xs-7 ${DEFAULT_TITLE_CLASS}"><h5>求职：{{list.job}}</h5></div>
      <div class="mdui-col-xs-5 ${DEFAULT_TITLE_CLASS}"><h5>期望薪资：{{list.salary}}</h5></div>
      <div class="mdui-col-xs-7 ${DEFAULT_TITLE_CLASS}"><h5>工作地址：{{list.workAdd}}</h5></div>
      <div class="mdui-col-xs-12 ${DEFAULT_TITLE_CLASS}"><h5>电子邮箱：{{list.email}}</h5></div>
      <div class="mdui-col-xs-12 ${DEFAULT_TITLE_CLASS}"><h5>手机号码：{{list.tel}}</h5></div>
      <div class="mdui-col-xs-12 ${DEFAULT_TITLE_CLASS}"><h5>居住地址：{{list.address}}</h5></div>
      <div class="mdui-col-xs-12 ${DEFAULT_TITLE_CLASS}"><h5>座右铭：{{list.motto}}</h5></div>
      <div class="mdui-col-xs-12 ${DEFAULT_TITLE_CLASS}"><h5>博客：{{list.blog}}</h5></div>
      <div class="mdui-col-xs-12 ${DEFAULT_TITLE_CLASS}"><h5>地址和电话请用base64进行decode转义</h5></div>
    </div>`;
  return getFullDom(template);
}

/**
 * 获取技术栈相关页面基础数据设置
 */
const _getTemplateData = () => {
    const template = {
      list: aboutData,
      banner: bannerData.north
    };
    return template;
}
/**
 * 获取技术栈相关页面模板数据
 */
const stackPage = {
    template: _getTemplateDom(),
    data() {
        return _getTemplateData();
    }
};
export default stackPage;