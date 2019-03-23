/*
 * @File:  个人学习工作经历页面结构相关方法
 * @Author: Wu Eva 
 * @Date: 2019-03-23 21:24:18 
 * @Last Modified by: melonHero
 * @Last Modified time: 2019-03-23 23:31:20
 */

import { experienceData, bannerData } from '../store/data.js';
import getFullDom from './common.js';

/**
 * 获取技术栈相关页面结构数据
 */
const _getTemplateDom = () => {
    const template = `
    <div class="msn-item msn-item_other">
        <div class="msn-head"><img src="img/tiger.jpg"></div>
        <p class="msn-content">自我评价</p>
        </div>
        <div class="msn-item msn-item_me">
        <div class="msn-head"><img src="img/avatar.jpg"></div>
        <p class="msn-content">
            <span v-html="evaluate"><span>
        </p>
        </div>
        <div class="msn-item msn-item_other">
        <div class="msn-head"><img src="img/tiger.jpg"></div>
        <p class="msn-content">学历情况</p>
        </div>
        <div class="msn-item msn-item_me">
        <div class="msn-head"><img src="img/avatar.jpg"></div>
        <p class="msn-content">
            <span>毕业时间:{{school.graTime}}<br/></span>
            <span>毕业学校:{{school.name}}<br/></span>
            <span>学校经历:{{school.expr}}<br/></span>
            <span>校内得奖:{{school.record}}<br/></span>
            <span>校内排名:{{school.ranking}}<br/></span>
        </p>
        </div>
        \
        <div class="msn-item msn-item_other">
        <div class="msn-head"><img src="img/tiger.jpg"></div>
        <p class="msn-content">工作经历</p>
        </div>
        <div class="msn-item msn-item_me" v-for="(item, idx) in job" :key="idx">
        <div class="msn-head"><img src="img/avatar.jpg"></div>
            <p class="msn-content">
            <span>工作时间:{{item.time}}<br/></span>
            <span>公司名称:{{item.name}}<br/></span>
            <span>职位名称:{{item.position}}<br/></span>
            </p>
        <div class="msn-head"><img src="img/avatar.jpg"></div>
        <p class="msn-content">
            <span>工作范围:<br/><span v-html="item.duty"><span><br/></span>
        </p>
    </div>`;
    return getFullDom(template);
}

/**
 * 获取技术栈相关页面基础数据设置
 */
const _getTemplateData = () => {
    const template = {
        school: experienceData.school,
        job: experienceData.job,
        evaluate: experienceData.evaluate,
        banner: bannerData.south
      };
    return template;
}
/**
 * 获取技术栈相关页面模板数据
 */
const experiencePage = {
    template: _getTemplateDom(),
    data() {
        return _getTemplateData();
    }
};
export default experiencePage;