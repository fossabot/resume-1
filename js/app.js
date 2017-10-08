  const stackData = getStackData();
  const experData = getExperData();
  const worksData = getWorksData();
  const aboutData = getAboutData();
  const bannerData = getBannerData();
/**
 * 					<div class="mdui-tab mdui-text-color-blue" mdui-tab>\
						<a href="#front" class="mdui-ripple">front</a>\
						<a href="#backstage" class="mdui-ripple">backstage</a>\
						<a href="#software" class="mdui-ripple">software</a>\
					</div>\
 */
  const Stack = Vue.extend({
    template:
			'<div class="mdui-container-fluid">\
				<div class="mdui-text-center">\
					<div class="mdui-row"><div class="banner" v-html="banner"></div></div>\
					<div class="mdui-row-xs-3">\
						<div class="mdui-col">\
							<label class="mdui-radio" @click="checked($event)">\
								<input type="radio" name="group1" checked/>\
								<i class="mdui-radio-icon"></i>\
								front\
							</label>\
						</div>\
						<div class="mdui-col">\
							<label class="mdui-radio" @click="checked($event)">\
								<input type="radio" name="group1"/>\
								<i class="mdui-radio-icon"></i>\
								backstage\
							</label>\
						</div>\
						<div class="mdui-col">\
							<label class="mdui-radio" @click="checked($event)">\
								<input type="radio" name="group1"/>\
								<i class="mdui-radio-icon"></i>\
								software\
							</label>\
						</div>\
					</div>\
					<div id="front" v-show="isFront">\
						<div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>\
						<p>熟练</p>\
						<div class="mdui-chip mdui-clearfix" v-for="(sitem, idx) in front.skilled" key="idx">\
							<span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_available</i></span>\
							<span class="mdui-chip-title">{{sitem}}</span>\
						</div>\
						<div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>\
						<p>熟悉</p>\
						<div class="mdui-chip mdui-clearfix" v-for="(fitem, idx) in front.familiar" key="idx">\
							<span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_note</i></span>\
							<span class="mdui-chip-title">{{fitem}}</span>\
						</div>\
						<div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>\
						<p>了解</p>\
						<div class="mdui-chip mdui-clearfix" v-for="(uitem, idx) in front.understand" key="idx">\
							<span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event</i></span>\
							<span class="mdui-chip-title">{{uitem}}</span>\
						</div>\
					</div>\
					\
					<div id="backstage" v-show="isBack">\
						<div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>\
						<p>熟悉</p>\
						<div class="mdui-chip mdui-clearfix" v-for="(fitem, idx) in backstage.familiar" key="idx">\
							<span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_note</i></span>\
							<span class="mdui-chip-title">{{fitem}}</span>\
						</div>\
						<div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>\
						<p>了解</p>\
						<div class="mdui-chip mdui-clearfix" v-for="(uitem, idx) in backstage.understand" key="idx">\
							<span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event</i></span>\
							<span class="mdui-chip-title">{{uitem}}</span>\
						</div>\
					</div>\
					\
					<div id="software" v-show="isSoft">\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>\
						<p>熟练</p>\
						<div class="mdui-chip mdui-clearfix" v-for="(sitem, idx) in software.skilled" key="idx">\
							<span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_available</i></span>\
							<span class="mdui-chip-title">{{sitem}}</span>\
						</div>\
						<div class="mdui-divider-dark mdui-color-blue mdui-m-t-1"></div>\
						<p>熟悉</p>\
						<div class="mdui-chip mdui-clearfix" v-for="(fitem, idx) in software.familiar" key="idx">\
							<span class="mdui-chip-icon mdui-color-blue"><i class="mdui-icon material-icons">event_note</i></span>\
							<span class="mdui-chip-title">{{fitem}}</span>\
						</div>\
					</div>\
				</div>\
			</div>\
      ',    
    data:function(){
        return{
						front: stackData.front,
						backstage: stackData.backstage,
						software: stackData.software,						
						banner:bannerData.east,
						isFront:true,
						isBack:false,
						isSoft:false
        }
		},
		methods: {
			checked: function (e) {
				if (e.target.tagName=="INPUT") {
					//console.log(e.target.tagName);
					//console.log(e.path[1].innerText);					
					const _this = e.path[1].innerText;
					if(_this=="front"){
						this.isFront = true;
						this.isBack = false;
						this.isSoft = false;
					}else if(_this=="backstage"){
						this.isFront = false;
						this.isBack = true;
						this.isSoft = false;
					}else if(_this=="software"){
						this.isFront = false;
						this.isBack = false;
						this.isSoft = true;
					}
				}
			}
		}  
  });

const Exper = Vue.extend({
    template:
				'<div class="mdui-container-fluid">\
					<div class="mdui-row"><div class="banner" v-html="banner"></div></div>\
					<div class="msn-item msn-item_other">\
						<div class="msn-head"><img src="img/tiger.jpg"></div>\
						<p class="msn-content">学习情况</p>\
					</div>\
					<div class="msn-item msn-item_me">\
						<div class="msn-head"><img src="img/avatar.jpg"></div>\
						<p class="msn-content">\
							<span>毕业时间:{{school.graTime}}<br/></span>\
							<span>毕业学校:{{school.name}}<br/></span>\
							<span>学校经历:{{school.expr}}<br/></span>\
							<span>校内得奖:{{school.record}}<br/></span>\
							<span>校内排名:{{school.ranking}}<br/></span>\
						</p>\
					</div>\
					\
					<div class="msn-item msn-item_other">\
						<div class="msn-head"><img src="img/tiger.jpg"></div>\
						<p class="msn-content">工作经历</p>\
					</div>\
					<div class="msn-item msn-item_me" v-for="(item, idx) in job" key="idx">\
						<div class="msn-head"><img src="img/avatar.jpg"></div>\
							<p class="msn-content">\
								<span>工作时间:{{item.time}}<br/></span>\
								<span>公司名称:{{item.name}}<br/></span>\
								<span>职位名称:{{item.position}}<br/></span>\
							</p>\
						<div class="msn-head"><img src="img/avatar.jpg"></div>\
						<p class="msn-content">\
							<span>工作范围:{{item.duty}}<br/></span>\
						</p>\
					</div>\
				</div>\
				',									
    data:function(){
        return{
						school: experData.school,
						job: experData.job,
            banner:bannerData.south
        }
    }  
});
const Works = Vue.extend({
    template:
        '<div class="mdui-container-fluid">\
						<div class="mdui-row"><div class="banner" v-html="banner"></div></div>\
							<div class="mdui-shadow-15 mdui-col-sm-12 mdui-col-md-4 mdui-m-t-4 mdui-m-b-4"  v-for="(works, idx) in list" key="idx">\
							<div class="mdui-card">\
									<div class="mdui-card-media">\
											<img :src="works.src"/>\
									</div>\
									<div class="mdui-panel" mdui-panel>\
											<div class="mdui-panel-item work mdui-ripple">\
													<div class="mdui-panel-item-header">\
															<div class="mdui-panel-item-title">{{works.name}}</div>\
															<i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>\
													</div>\
													<div class="mdui-panel-item-body mdui-text-color-blue">\
															<p>{{works.describe}}</p>\
															<p><span v-for="(item, idx) in works.tags" key="idx"><i class="mdui-icon material-icons">local_offer</i>{{item}}</span></p>\
															<p>查看地址：<br/>{{works.url}}</p>\
													</div>\
											</div>\
									</div>\
							</div>\
        </div>\
        ',
    data:function(){
        return{
						list : worksData,
						banner : bannerData.west
        }
    }  
});
//<img :src="list.avatar" class="mdui-img-circle mdui-shadow-8"/>
const About = Vue.extend({
    template:
		'<div class="mdui-container-fluid">\
			<div class="mdui-row"><div class="banner" v-html="banner"></div></div>\
			<div class="mdui-text-center mdui-m-t-1 mdui-container mdui-typo">\
					<h5>姓名：{{list.name}}</h5>\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-b-1"></div>\
					<h5>学历：{{list.education}}</h5>\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-b-1"></div>\
					<h5>座右铭：{{list.motto}}</h5>\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-b-1"></div>\
					<h5>邮箱：{{list.email}}</h5>\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-b-1"></div>\
					<h5>电话：{{list.tel}}</h5>\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-b-1"></div>\
					<h5>地址：{{list.address}}</h5>\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-b-1"></div>\
					<h5>博客：{{list.address}}</h5>\
					<div class="mdui-divider-dark mdui-color-blue mdui-m-b-1"></div>\
					<h6>地址、电话和博客请用base64进行decode转义</h6>\
			</div>\
		</div>\
    ',    
    data:function(){
    return{
        list: aboutData,
				banner : bannerData.north
    }
  }  
});

  var routers= new VueRouter({
    linkActiveClass: 'mdui-bottom-nav-active',
    routes: [
      {
        path: '/',
        redirect: '/v-about'
      },        
      {
        path: '/v-stack',
        name: 'v-stack',
        component: Stack
      },
      {
        path: '/v-exper',
        name: 'v-exper',
        component: Exper,                
      },
      {
        path: '/v-works',
        component: Works,
        name: 'v-works'
     },
     {
       path: '/v-about',
       component: About,
       name: 'v-about'
    }
    
  ]
});


    // var App =new Vue({
    //   el: '#app',
    //   router:routers,
    //   created: function() {
    //    console.log(this.$route);
    //    this.$router.push('v-home'); // 页面加载时跳转
    //    }
    // })
    const App = new Vue({
      router:routers
    }).$mount('#app');