/*
 * @File:  个人技术栈页面结构相关方法
 * @Author: Wu Eva 
 * @Date: 2019-03-23 21:24:18 
 * @Last Modified by: melonHero
 * @Last Modified time: 2019-03-23 23:09:03
 */

import { stackData, bannerData } from '../store/data.js';
import getFullDom from './common.js';

/**
 * 获取技术栈相关页面结构数据
 */
const _getTemplateDom = () => {
    const template = `
    <div class="mdui-row-xs-3">
        <div class="mdui-col">
            <label class="mdui-radio" @click="checked($event)">
                <input type="radio" name="group1" checked/>
                <i class="mdui-radio-icon"></i>
                front
            </label>
        </div>
        <div class="mdui-col">
            <label class="mdui-radio" @click="checked($event)">
                <input type="radio" name="group1"/>
                <i class="mdui-radio-icon"></i>
                backstage
            </label>
        </div>
        <div class="mdui-col">
            <label class="mdui-radio" @click="checked($event)">
                <input type="radio" name="group1"/>
                <i class="mdui-radio-icon"></i>
                software
            </label>
        </div>
    </div>
    <div id="front" v-show="isFront">
        <div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>
        <p>熟练(运用自如)</p>
        <div class="mdui-chip mdui-clearfix" v-for="(sitem, idx) in front.skilled" :key="idx">
            <span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_available</i></span>
            <span class="mdui-chip-title">{{sitem}}</span>
        </div>
        <div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>
        <p>熟悉(得心应手)</p>
        <div class="mdui-chip mdui-clearfix" v-for="(fitem, idx) in front.familiar" :key="idx">
            <span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_note</i></span>
            <span class="mdui-chip-title">{{fitem}}</span>
        </div>
        <div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>
        <p>了解(一知半解)</p>
        <div class="mdui-chip mdui-clearfix" v-for="(uitem, idx) in front.understand" :key="idx">
            <span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event</i></span>
            <span class="mdui-chip-title">{{uitem}}</span>
        </div>
    </div>
    \
    <div id="backstage" v-show="isBack">
        <div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>
        <p>熟悉(得心应手)</p>
        <div class="mdui-chip mdui-clearfix" v-for="(fitem, idx) in backstage.familiar" :key="idx">
            <span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_note</i></span>
            <span class="mdui-chip-title">{{fitem}}</span>
        </div>
        <div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>
        <p>了解(一知半解)</p>
        <div class="mdui-chip mdui-clearfix" v-for="(uitem, idx) in backstage.understand" :key="idx">
            <span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event</i></span>
            <span class="mdui-chip-title">{{uitem}}</span>
        </div>
    </div>
    \
    <div id="software" v-show="isSoft">
    <div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>
        <p>熟练(运用自如)</p>
        <div class="mdui-chip mdui-clearfix" v-for="(sitem, idx) in software.skilled" :key="idx">
            <span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_available</i></span>
            <span class="mdui-chip-title">{{sitem}}</span>
        </div>
        <div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>
        <p>熟悉(得心应手)</p>
        <div class="mdui-chip mdui-clearfix" v-for="(fitem, idx) in software.familiar" :key="idx">
            <span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_note</i></span>
            <span class="mdui-chip-title">{{fitem}}</span>
        </div>
    </div>`;
    return getFullDom(template, true);
}

/**
 * 获取技术栈相关页面基础数据设置
 */
const _getTemplateData = () => {
    const template = {
        front: stackData.front,
        backstage: stackData.backstage,
        software: stackData.software,
        banner: bannerData.east,
        isFront: true,
        isBack: false,
        isSoft: false
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
    },
    methods: {
        checked(e) {
            const DEFAULT_RETURN = false;
            const DEFAULT_CHECK_TYPE = 'INPUT';
            if (e.target.tagName == DEFAULT_CHECK_TYPE) {
                return DEFAULT_RETURN
            }
            const stackTypeArr = ['front', 'backstage', 'software']
            //console.log(e.target.tagName);
            //console.log(e.path[1].innerText);					
            const currStackType = e.path[1].innerText;
            if (!currStackType) {
                return DEFAULT_RETURN
            }
            switch (currStackType) {
                case stackTypeArr[0]:
                    {
                        this.isFront = !DEFAULT_RETURN;
                        this.isBack = DEFAULT_RETURN;
                        this.isSoft = DEFAULT_RETURN;
                        break;
                    }
                case stackTypeArr[1]:
                    {
                        this.isFront = DEFAULT_RETURN;
                        this.isBack = !DEFAULT_RETURN;
                        this.isSoft = DEFAULT_RETURN;
                        break;
                    }
                case stackTypeArr[2]:
                    {
                        this.isFront = DEFAULT_RETURN;
                        this.isBack = DEFAULT_RETURN;
                        this.isSoft = !DEFAULT_RETURN;
                        break;
                    }
            }
        }

    }
};
export default stackPage;