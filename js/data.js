
//获取技术栈数据
function getStackData(){
    var dataS ={
        "front":
        {
            "skilled":["html(5)","css(3)","js(es5)","jquery","bootstrap","gulp","MDUI","html2canvas","hexo","json","echart","ligerUI","font icon","localstroge"],
            "familiar":["vue","node","ejs","electron","jade","webpack","bower","kindeditor","sass","less","ajax","git","markdown","gitment","github page"],
            "understand":["vuex","vue-router","angular","mockjs","Element UI","react","amazeUI","ionic","js(es6)","dojo","arcgis","d3","yarn","Element UI","ant design","MUI","layerUI","canvas","knockoutjs","easyUI","Gitbbok","jquery mobile"]
        }, 
        "backstage":
        {
            "familiar":[".NET","T-SQL","mysql","access","oracle"],
            "understand":["JAVA","Python","mongoDB","Redis"]
        },  
        "software":
        {
            "skilled":["PS","AI","FLASH","ATOM","VSCODE","iceworks","VS2010","Hbuilder","Chrome","X-MIND","Ngrok","Axure","eclipse","Tortoise"],
            "familiar":["PR","AE","axure","Git Bash","sublime","shadowsocks"]
        }                          
    };
    return  dataS;   
}
//获取经历数据
function getExperData(){
    var dataE ={
        "school":
          {
            "graTime": "2017年",
            "name": "华夏理工学院(原武汉理工大学华夏学院)",
            "expr":"混过社团，举办过比赛，当过代班，参加过小跳。",
            "record":"一次二等助学金、两次国家励志奖学金、三次系级优秀奖励、两次院级优秀奖励，省级三等奖。",
            "ranking":"一般专业排名top1"
          }
        ,
        "job": [
            {
              "time": "2016/06-2016/09",
              "name":"前锦网络信息技术(上海)有限公司武汉分公司(前程无忧)",
              "position": "网站开发工程师",
              "duty":"在任务平台完成安排的企业招聘页面的绘制，通过对公司所属行业的理解，以及使用公司类别代表色，进行的页面整体构图设计。<br/>利用平台指定开发代码做到页面的功能和效果能够多浏览器的兼容，最低支持ie6。<br/>使用企业提供图片时会严格审核图片内容，剔除属于公司规定夸张宣传的内容。<br/>网页完成之后严格遵循网站邮件审核沟通步骤，保证上线网站内容的正确性。"
            },
            {
                "time": "2016/11-至今",
                "name":"北京中天吉奥信息技术股份有限公司武汉分公司",
                "position": "研发工程师",
                "duty":"前期主要是使用js和t-sql在公司研发平台进行二次表单开发，涉及到数据库字段设计和多表操作。<br/>后期进入互联网项目，主要是利用c#,html(5),css(3),js，bootstrap,ligerui,等等对项目节目进行规划和设计，需要保证项目在多浏览器和不同设备的兼容性。<br/>目前已经有三个上线项目经验，在项目实战中主要写过三个小轮子，支持中英文输入的虚拟键盘，弹窗插件和流程插件。<br/>现在主要独立负责公司webgis项目，主要涉及到的技术是Arcgis for js ，vue，vuex，Element UI和axios等等"
            }            
          ],
        "evaluate":"兴趣是最好的老师，喜欢前端所思所想即可写成所得，个人自学能力较强，责任感和韧性比较强，毕竟是在项目上线前现场临时改过代码的人。<br/>喜欢折腾和技术分享，转化设计图效率比较高，工作之余喜欢按照规划补充自己的技术栈，也比较喜欢学习的状态。<br/>目前用过前端三大框架写过webapp，也写过微信小程序，nodejs也玩过一段时间。<br/>软件上方面版本管理的svn和git使用比较熟练，后台主要是对.net比较熟悉，换了多个编辑器，目前比较喜欢用的是vscode。项目了，除去一些网页模板和技术学习记录，有几个是自己写的几个小小轮子，虚拟键盘支持中英文书写的轮子，支持各种参数设计的自动化流程轮子，一个支持各种细节参数设置的模态窗轮子，还有就是三个vue的开箱即用的模板项目。<br/>在 node 方面，改过一个基于 ejs 的 hexo 博客主题，自己扩展了一些功能，主要样式也改了一些，后期如果有更好样式或者功能的建议，我会继续修改这个主题，欢迎clone提意见。"
        };
    return  dataE;   
}

//获取作品集数据
function getWorksData(){
        var dataW =[ 
           {
                "name":"watermelon-todolist",
                "describe":"基于electron，localstorage和vue的todolist桌面应用，默认有三个背景色可切换。",
                "tags":["electron","todolist","vue","localstorage"],
                "url":"https://github.com/mowatermelon/learn-electron.git"
            }, 
            {
                "name":"vue-admin",
                "describe":"基于axios，bootstrap，vue-router，webpack和express等等的基础vue后台控制模板，默认有三个颜色主题可切换。",
                "tags":["axios","vue","vue-router","webpack","vue-admin","express","mo-theme","vuex","localstorage"],
                "url":"https://github.com/mowatermelon/vue-admin.git"
            },   
            {
                "name":"vue-ersi",
                "describe":"基于axios，Element UI，vue-router，esri，webpack和express等等地图后台操作模板。",
                "tags":["axios","vue","vue-router","webpack","express","vuex","localstorage","esri","dojo","arcgis-js-api-4","arcgis-js-api-3d","ionicons"],
                "url":"https://github.com/mowatermelon/vue-esri.git"
            },  
            {
                "name":"vue-webapp",
                "describe":"基于vue做的webapp模版，基于mdui的webapp，在mdui分支",
                "tags":["axios","vue","vue-router","webpack","express","mdui","vuex","localstorage"],
                "url":"https://github.com/mowatermelon/vue-webapp.git"
            },  
            {
                "name":"visualKeyboard",
                "describe":"自己写的支持中文和英文输入的虚拟键盘，主要业务场景是PC查询机，中文输入法有搜狗默认皮肤、西瓜皮肤和三个coding洋葱猴皮肤。",
                "tags":["css","jquery","simpleInputMethod","designByMe"],
                "url":"https://github.com/mowatermelon/visualKeyboard.git"
            }, 
            {
                "name":"modal.js",
                "describe":"这是一个基于bootstrap二次开发的dialog插件，支持多个参数的定制，放上使用文档，使用本插件之前需要引用jquery.js、bootstrap.css和bootstrap.js。",
                "tags":["bootstrap","jQuery","css","gitbook"],
                "url":"https://github.com/mowatermelon/demoArray/blob/master/showmodal.md"
            }, 
            {
                "name":"hexo-theme-melon",
                "describe":"在hexo-theme-yilia主题基础上，个人定制一定样式，支持gitment的hexo主题，添加文章内容检索功能，修改之后的主题适合girl",
                "tags":["hexo","sass","gulp","gitment","npm","ejs","git","webpack"],
                "url":"https://github.com/mowatermelon/hexo-theme-melon.git"
            },         
            {
                "name":"all-year-calendar",
                "describe":"基于jq，amazeui与bootstrap的一个全年考勤日历插件，支持工作日和非工作日状态的修改设置，支持全年日历的切换，并基于项目实际情况优化了界面效果",
                "tags":["amazeui","jquery","calender","all-year"],
                "url":"https://github.com/mowatermelon/all-year-calendar.git"
            }, 
            {
                "name":"moTool",
                "describe":"集合了一些平时写的小工具函数",
                "tags":["vue","plugins","layui-demo","motool"],
                "url":"https://github.com/mowatermelon/moTool.git"
            },                                
            {
                "name":"更多作品",
                "describe":"更多作品可以去我的github仓库中查看",
                "tags":["bootstrap","vue","angular","electron","ionic","es6","node","python","iceworks","html2canvas","echart","json","io","localstorage","session","mvvm","OOCSS","bem"],
                "url":"https://github.com/mowatermelon"
            }          
        ];
        
    return  dataW;   
}
//获取关于我数据
function getAboutData(){
    var dataA =
        {
            "avatar": "img/avatar.jpg",
            "name": "吴莫",
            "motto":"行至水穷处，坐看云起时。",
            "email":"moanmelon@yeah.net",
            "tel":"MTU2MjM1MjUzODA=",
            "address":"5rmW5YyX5q2m5rGJ",
            "education":"本科",
            "expr":"两年",
            "job":"前端工程师",
            "workAdd":"服从安排",
            "salary":"8k+",
            "blog":"https://mowatermelon.github.io/"
        };
    return  dataA;   
}

//获取banner中的相关文字
function getBannerData(){
    /**
     * 玄武掌水，为北方守护。代表：长生
     * 白虎掌金，为西方守护。代表：杀伐
     * 朱雀掌火，为南方守护。代表：重生
     * 青龙掌木。为东方守护。代表：威势
     */
      var dataB =
      {
          "north": "予我长袖，<br/>我必善舞。",
          "west": "请让未来的你<br/>成就现在的你",
          "south":"好风凭借力<br/>送我上九天",
          "east":"吃苦的年纪<br/>就别选择安逸"
      };
  return  dataB;       
}
