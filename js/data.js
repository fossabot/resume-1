
//获取技术栈数据
function getStackData(){
    var dataS ={
        "front":
        {
            "skilled":["html(5)","css(3)","js(es5)","jquery","bootstrap","gulp","MDUI","html2canvas","hexo","json","echart","ligerUI","font icon"],
            "familiar":["vue","angular","node","ejs","electron","jade","webpack","bower","kindeditor","sass","less","ajax","git","markdown","gitment","github page"],
            "understand":["react","amazeUI","ionic","js(es6)","dojo","arcgis","d3","yarn","Element UI","ant design","MUI","layerUI","canvas","knockoutjs","easyUI","Gitbbok","jquery mobile"]
        }, 
        "backstage":
        {
            "familiar":[".NET","T-SQL"],
            "understand":["JAVA","Python"]
        },  
        "software":
        {
            "skilled":["PS","AI","FLASH","ATOM","VSCODE","VS2010","Hbuilder","Chrome","X-MIND","Ngrok","Axure","eclipse","Tortoise"],
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
            "name": "武汉华夏理工学院",
            "expr":"混过社团，举办过比赛，当过代班。",
            "record":"一次二等助学金、两次国家励志奖学金、三次系级优秀奖励、两次院级优秀奖励。",
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
                "duty":"前期主要是使用js和t-sql在公司研发平台进行二次表单开发，涉及到数据库字段设计和多表操作。<br/>后期进入互联网项目，主要是利用c#,html(5),css(3),js，bootstrap,ligerui,等等对项目节目进行规划和设计，需要保证项目在多浏览器和不同设备的兼容性。<br/>目前已经有三个上线项目经验，在项目实战中主要写过三个小轮子，支持中英文输入的虚拟键盘，弹窗插件和流程插件。<br/>现在主要独立负责公司webgis项目组"
            }            
          ],
        "evaluate":"兴趣是最好的老师，喜欢前端所思所想即可写成所得，个人自学能力较强，责任感和韧性比较强，毕竟是在项目上线前现场临时改过代码的人。<br/>喜欢折腾和技术分享，转化设计图效率比较高，工作之余喜欢按照规划补充自己的技术栈，也比较喜欢学习的状态。<br/>目前用过前端三大框架写过webapp，也写过微信小程序，nodejs也玩过一段时间。<br/>软件上方面版本管理的svn和git使用比较熟练，后台主要是对.net比较熟悉，换了多个编辑器，目前比较喜欢用的是vscode。<br/>对自己的要求是今天事今日毕，工作上喜欢接受挑战，目前有几个自己写的几个小轮子，最近刚改了一个hexo主题包，hexo-theme-melon,自己扩展了一些功能，主要样式也改了一些，后期如果有更好样式或者功能的建议，我会继续修改这个主题，欢迎clone提意见。"
        };
    return  dataE;   
}

//获取作品集数据
function getWorksData(){
    var dataW =[
            {
                "name":"hexo-theme-melon",
                "describe":"在现有主题基础上，个人定制一定样式，支持gitment的hexo主题，修改之后的主题适合girl",
                "src":"img/web/melon.jpg",
                "tags":["hexo","sass","gulp","gitment","npm","ejs","git","webpack"],
                "url":"https://github.com/mowatermelon/hexo-theme-melon.git"
            },
            {
                "name":"vueNew",
                "describe":"基于vue全家桶写的一个新闻类的单页面，主要有新闻，美图，美文和设置等页面",
                "src":"img/apk/vueNew.jpg",
                "tags":["vue","vue-router","vue-resource","node","npm","webpack","mdui"],
                "url":"https://github.com/mowatermelon/vueNew.git"
            },            
            {
                "name":"modal.js",
                "describe":"在现有框架基础上高度集成一个模态窗插件，支持多个参数的定制，放上使用文档。",
                "src":"img/plug/showmodal.jpg",
                "tags":["bootstrap","jQuery","css","gitbook"],
                "url":"https://github.com/mowatermelon/demoArray/blob/master/showmodal.md"
            },
            {
                "name":"visualKeyboard",
                "describe":"自己写的支持中文和英文输入的虚拟键盘，主要业务场景是PC查询机，参考搜狗默认皮肤。",
                "src":"img/plug/keyboard.jpg",
                "tags":["css","jquery","simpleInputMethod","designByMe"],
                "url":"https://github.com/mowatermelon/visualKeyboard.git"
            },                       
            {
                "name":"flow.js",
                "describe":"自动化流程插件，样式基于bootstrap和内容基于配置文档的流程页面跳转插件",
                "src":"img/plug/flow.jpg",
                "tags":["bootstrap","js","自动化"],
                "url":"https://github.com/mowatermelon/flowdemo.git"
            },
            {
                "name":"bingoGame",
                "describe":"这个是仿造美国bingo游戏写的一个小的demo，通过判断一个随机的匹配结果之和来计算输赢",
                "src":"img/web/bingoGame.png",
                "tags":["bingo","js","css","designByMe"],
                "url":"https://github.com/mowatermelon/bingoCard.git"
            },           
            {
                "name":"Q & A web",
                "describe":"自己写的一个商务类型的问答网站模版",
                "src":"img/web/QAweb.png",
                "tags":["css","响应式","designByMe"],
                "url":"https://github.com/mowatermelon/mo.git"
            },            
            {
                "name":".NETSHOP",
                "describe":"自己写的一个购物商城网站模版",
                "src":"img/web/Adminlogin.png",
                "tags":["c#","SqlServer","css","designByMe"],
                "url":"https://github.com/mowatermelon/.netSHOP.git"
            },
            {
                "name":"leafblog",
                "describe":"自己写的一个小清新的个人blog模版",
                "src":"img/web/leafblog.jpg",
                "tags":["css","jquery","jquery.poptrox","designByMe"],
                "url":"https://github.com/mowatermelon/blog_leaf.git"
            },  
            {
                "name":"qqGame",
                "describe":"学生时期写的一个腾讯游戏活动的页面",
                "src":"img/web/qqGame.png",
                "tags":["css","qqGame","designByMe"],
                "url":"https://github.com/mowatermelon/qqcargame2.0.git"
            },
            {
                "name":"design",
                "describe":"学生时期设计的一些小物料",
                "src":"img/plug/showmodal.jpg",
                "tags":["ps","ai","flash","designByMe"],
                "url":"https://github.com/mowatermelon/picCreations.git"
            },                                     
            {
                "name":"更多作品",
                "describe":"更多作品可以去我的github仓库中查看",
                "src":"img/web/qqGame.png",
                "tags":["bootstrap","vue","angular","es6","node","html2canvas","echart","json","io","localstorage","session","mvvm","OOCSS","bem"],
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
            "salary":"9k+",
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
