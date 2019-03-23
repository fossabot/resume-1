/*
 * @File:  页面公共组件结构相关
 * @Author: Wu Eva 
 * @Date: 2019-03-23 21:24:18 
 * @Last Modified by: melonHero
 * @Last Modified time: 2019-03-23 23:09:12
 */

/**
 * 获取技术栈相关页面结构数据
 */
const getFullDom = (domTemplate, needCenter = false) => {
    let template = '<div class="mdui-container-fluid">';
    needCenter && (template += '<div class="mdui-text-center">');
    template += `<div class="mdui-row"><div class="banner" v-html="banner"></div></div>
        ${domTemplate}`
    needCenter && (template += '</div>');
    template += '</div>';
    return template;
}
export default getFullDom;