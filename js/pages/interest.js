/*
 * @File:  个人作品集页面结构相关方法
 * @Author: Wu Eva 
 * @Date: 2019-03-23 21:24:18 
 * @Last Modified by: melonHero
 * @Last Modified time: 2019-03-23 23:14:03
 */

import { interestData, bannerData } from '../store/data.js';
import getFullDom from './common.js';

/**
 * 获取技术栈相关页面结构数据
 */
const _getTemplateDom = () => {
    const template = `
      <div class="mdui-shadow-15 mdui-col-sm-12 mdui-col-md-6 mdui-col-lg-4 mdui-m-t-4 mdui-m-b-4"  v-for="(works, idx) in list" :key="idx">
        <div class="mdui-card">
            <div class="mdui-card-primary mdui-p-b-0">
            <div class="mdui-card-primary-title">{{works.name}}</div>
            <div class="mdui-card-primary-subtitle mdui-typo"><p>仓库地址：<br/>{{works.url}}</p></div>
        </div>
        <div class="mdui-card-content mdui-p-t-0">
            <p>{{works.describe}}</p>
            <p><span class="mdui-text-color-blue" v-for="(item, idx) in works.tags" :key="idx"><i class="mdui-icon material-icons">local_offer</i>{{item}}</span></p>
        </div>
      </div>`;
    return getFullDom(template);
}

/**
 * 获取技术栈相关页面基础数据设置
 */
const _getTemplateData = () => {
    const template = {
      list: interestData,
      banner: bannerData.west
    };
    return template;
}
/**
 * 获取技术栈相关页面模板数据
 */
const interestPage = {
    template: _getTemplateDom(),
    data() {
        return _getTemplateData();
    }
};
export default interestPage;