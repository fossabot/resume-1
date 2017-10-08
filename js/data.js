
//获取技术栈数据
function getStackData(){
    var dataS ={
        "front":
        {
            "skilled":["html(5)","css(3)","js(es5)","jquery","bootstrap","gulp","MDUI","html2canvas","hexo","json","echart","ligerUI","font icon"],
            "familiar":["vue","angular","node","ejs","jade","webpack","bower","kindeditor","sass","less","ajax","git","markdown","gitment","github page"],
            "understand":["react","amazeUI","arcgis","MUI","layerUI","canvas","knockoutjs","easyUI","Gitbbok","jquery mobile"]
        }, 
        "backstage":
        {
            "familiar":[".NET","T-SQL"],
            "understand":["JAVA"]
        },  
        "software":
        {
            "skilled":["PS","AI","FLA","ATOM","VSCODE","VS2010","Hbuilder","Chrome","X-MIND","Ngrok","Axure","eclipse","Tortoise"],
            "familiar":["PR","AE","Git Bash","sublime","shadowsocks"]
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
            "expr":"混过社团，举办过比赛，当过代班",
            "record":"一次二等助学金、两次国家励志奖学金、三次系级优秀奖励、两次院级优秀奖励",
            "ranking":"一般专业排名top1"
          }
        ,
        "job": [
            {
              "time": "2016/06-2016/09",
              "name":"前锦网络信息技术(上海)有限公司武汉分公司(前程无忧)",
              "position": "网站开发工程师",
              "duty":"在任务平台完成安排的企业招聘页面的绘制，通过对公司所属行业的理解，以及使用公司类别代表色，进行的页面整体构图设计，利用平台指定开发代码做到页面的功能和效果能够多浏览器的兼容，最低支持ie6，使用企业提供图片时会严格审核图片内容，剔除属于公司规定夸张宣传的内容，网页完成之后严格遵循网站邮件审核沟通步骤，保证上线网站内容的正确性。"
            },
            {
                "time": "2016/11-至今",
                "name":"北京中天吉奥信息技术股份有限公司武汉分公司",
                "position": "研发工程师",
                "duty":"前期主要是使用js和t-sql在公司研发平台进行二次表单开发，涉及到数据库字段设计和多表操作，后期进入互联网项目，主要是利用c#,html(5),css(3),js，bootstrap,ligerui,等等对项目节目进行规划和设计，需要保证项目在多浏览器和不同设备的兼容性。目前已经有三个上线项目经验，在项目实战中主要写过三个小轮子，支持中英文输入的虚拟键盘，弹窗插件和流程插件。"
            }            
          ]
        };
    return  dataE;   
}
//获取作品集数据
function getWorksData(){
    var dataW =[
            {
                "name":"hexo-theme-melon",
                "describe":"在现有主题基础上，个人定制一定样式，支持gitment的hexo主题",
                "src":"img/web/melon.jpg",
                "tags":["hexo","sass","gulp"],
                "url":"https://github.com/mowatermelon/hexo-theme-melon.git"
            },
            {
                "name":"modal.js",
                "describe":"在bootstrap和jQuery的基础上高度集成一个模态窗插件，支持多个参数的定制",
                "src":"img/plug/showmodal.jpg",
                "tags":["bootstrap","jQuery","css"],
                "url":"https://github.com/mowatermelon/demoArray/blob/master/showmodal.md"
            },
            {
                "name":"visualKeyboard",
                "describe":"支持中文和英文输入的虚拟键盘，样式都是自己写的，目前主要业务场景是PC查询机",
                "src":"img/plug/keyboard.jpg",
                "tags":["css","jquery","SimpleInputMethod"],
                "url":"https://mowatermelon.github.io/visualKeyboard/demo.html"
            },                       
            {
                "name":"flow.js",
                "describe":"自动化流程插件，基于bootstrap的完全基于配置文档的流程页面跳转插件",
                "src":"img/plug/flow.jpg",
                "tags":["bootstrap","js","自动化"],
                "url":"https://github.com/mowatermelon/flowdemo.git"
            },
            {
                "name":"Q & A web",
                "describe":"一个比较商务类型的问答网站模版",
                "src":"img/web/QAweb.png",
                "tags":["css","响应式"],
                "url":"https://github.com/mowatermelon/hexo-theme-melon.git"
            },            
            {
                "name":".NETSHOP",
                "describe":"这个是当初参照一个wordpress模版画的一个购物商城网站，样式都是自己写，页面跳转之类都是原生js控制的。",
                "src":"img/web/Adminlogin.png",
                "tags":[".NET","SqlServer","css"],
                "url":"https://github.com/mowatermelon/.netSHOP.git"
            },
            {
                "name":"leafblog",
                "describe":"一个比较小清新的个人blog模版",
                "src":"img/web/leafblog.jpg",
                "tags":["css","jquery","jquery.poptrox"],
                "url":"https://github.com/mowatermelon/blog_leaf.git"
            },              
            {
                "name":"更多作品",
                "describe":"更多作品可以去我的github仓库中查看",
                "src":"img/web/qqGame.png",
                "tags":["bootstrap","vue","angular"],
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
            "blog":"aHR0cHM6Ly9tb3dhdGVybWVsb24uZ2l0aHViLmlv"
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
