/*
 * @File:  个人简历基础数据相关
 * @Author: Wu Eva 
 * @Date: 2019-03-23 23:34:30 
 * @Last Modified by: melonHero
 * @Last Modified time: 2019-03-24 23:21:58
 */

/** 
 * 获取个人技术栈数据
 */
export const stackData = {
  'front': {
    'skilled': ['html(5)', 'css(3)', 'js(es5)', 'jquery', 'bootstrap', 'gulp', 'MDUI', 'html2canvas', 'hexo', 'json', 'echart', 'ligerUI', 'font icon', 'localstroge'],
    'familiar': ['vue', 'node', 'ejs', 'electron', 'jade', 'webpack', 'bower', 'kindeditor', 'sass', 'less', 'ajax', 'git', 'markdown', 'gitment', 'github page'],
    'understand': ['vuex', 'vue-router', 'angular', 'mockjs', 'Element UI', 'react', 'amazeUI', 'ionic', 'js(es6)', 'dojo', 'arcgis', 'd3', 'yarn', 'Element UI', 'ant design', 'MUI', 'layerUI', 'canvas', 'knockoutjs', 'easyUI', 'Gitbbok', 'graphql','jquery mobile','proxy']
  },
  'backstage': {
    'familiar': ['.NET', 'T-SQL', 'mysql', 'access', 'oracle'],
    'understand': ['JAVA', 'Python', 'mongoDB', 'Redis']
  },
  'software': {
    'skilled': ['PS', 'AI', 'FLASH', 'ATOM', 'VSCODE', 'iceworks', 'VS2010', 'Hbuilder', 'Chrome', 'X-MIND', 'Ngrok', 'Axure', 'eclipse', 'Tortoise'],
    'familiar': ['PR', 'AE', 'axure', 'Git Bash', 'sublime', 'shadowsocks']
  }
};
/** 
 * 获取个人学习工作经历数据
 */
export const experienceData = {
  'school': {
    'graTime': '2017年',
    'name': '华夏理工学院(原武汉理工大学华夏学院)',
    'expr': '混过社团，举办过比赛，当过代班，带队参加过小挑。',
    'record': '一次二等助学金、两次国家励志奖学金、三次系级优秀奖励、两次院级优秀奖励，省级三等奖。',
    'ranking': '一般专业排名top1'
  },
  'job': [{
      'time': '2016/06-2016/09',
      'name': '前锦网络信息技术(上海)有限公司武汉分公司(前程无忧)',
      'position': '网站开发工程师',
      'duty': '在任务平台完成安排的企业招聘页面的绘制，通过对公司所属行业的理解，以及使用公司类别代表色，进行的页面整体构图设计。<br/>利用平台指定开发代码做到页面的功能和效果能够多浏览器的兼容，最低支持ie6。<br/>使用企业提供图片时会严格审核图片内容，剔除属于公司规定夸张宣传的内容。<br/>网页完成之后严格遵循网站邮件审核沟通步骤，保证上线网站内容的正确性。'
    },
    {
      'time': '2016/11-2018/05',
      'name': '北京中天吉奥信息技术股份有限公司武汉分公司',
      'position': '研发工程师',
      'duty': '前期主要是使用js和t-sql在公司研发平台进行二次表单开发，涉及到数据库字段设计和多表操作。<br/>后期进入互联网项目，主要是利用c#,html(5),css(3),js，bootstrap,ligerui,等等对项目节目进行规划和设计，需要保证项目在多浏览器和不同设备的兼容性。<br/>目前已经有五个上线项目经验，在项目实战中主要写过三个小轮子，支持中英文输入的虚拟键盘，弹窗插件和流程插件。<br/>现在主要独立负责公司webgis项目，主要涉及到的技术是Arcgis for js ，vue，vuex，Element UI和axios等等'
    },
    {
      'time': '2018/05-至今',
      'name': '武大吉奥',
      'position': '研发工程师',
      'duty': '最初主要负责项目基础插件的开发，和相关文件规范制定。<br/>后期负责项目表单基建相关能力实现，主要是通过消息广播，任务队列和操作日志，进而保证表单全生命周期的有序执行，还有相关小组中任务分配，进度跟进，项目代码规范制定，以及做一些项目技术推进。'
    }
  ],
  'evaluate': '兴趣是最好的老师，喜欢前端所思所想即可写成所得，个人自学能力较强，责任感和韧性比较强，毕竟是在项目上线前现场临时改过代码的人。<br/>喜欢折腾和技术分享，工作之余喜欢按照规划补充自己的技术栈，也比较喜欢学习的状态，喜欢拥抱开源社区，代码洁癖晚期，对于脏代码容忍度比较低，eslint严重依赖者。<br/>目前用过前端三大框架，几个平台小程序，或者一些跨端框架，都有轻度使用或者有相关学习成品。<br/>软件上方面版本管理的svn和git使用比较熟练，后台主要是对.net比较熟悉，换了多个编辑器，目前比较喜欢用的是vscode。'
};

/** 
 * 获取个人作品集数据
 */
export const interestData = [{
    'name': '开源项目',
    'list': [{
        'name': 'watermelon-todolist',
        'describe': '基于electron，localstorage和vue的todolist桌面应用，默认有三个背景色可切换。支持基础任务添加，关闭和删除。<br/><br/>',
        'tags': ['electron', 'todolist', 'vue', 'localstorage'],
        'url': 'https://github.com/mowatermelon/learn-electron.git'
      },
      {
        'name': 'vue-admin',
        'describe': '基于axios，bootstrap，vue-router，webpack和express等等的基础vue后台控制模板，默认有三个颜色主题可切换。<br/>',
        'tags': ['axios', 'vue', 'vue-router', 'webpack', 'vue-admin', 'express', 'mo-theme', 'vuex', 'localstorage'],
        'url': 'https://github.com/mowatermelon/vue-admin.git'
      },
      {
        'name': 'vue-ersi',
        'describe': '基于axios，Element UI，vue-router，esri，webpack和express等等地图后台操作模板。',
        'tags': ['axios', 'vue', 'vue-router', 'webpack', 'express', 'vuex', 'localstorage', 'dojo', 'arcgis-js-api-4', 'arcgis-js-api-3d'],
        'url': 'https://github.com/mowatermelon/vue-esri.git'
      },
      {
        'name': 'vue-webapp',
        'describe': '基于vue做的webapp模版，基于mdui的webapp，在mdui分支',
        'tags': ['axios', 'vue', 'vue-router', 'webpack', 'express', 'mdui', 'vuex', 'localstorage'],
        'url': 'https://github.com/mowatermelon/vue-webapp.git'
      },
      {
        'name': 'visualKeyboard',
        'describe': '自己写的支持中文和英文输入的虚拟键盘，主要业务场景是PC查询机，中文输入法有搜狗默认皮肤、西瓜皮肤和三个coding洋葱猴皮肤。',
        'tags': ['css', 'jquery', 'simpleInputMethod'],
        'url': 'https://github.com/mowatermelon/visualKeyboard.git'
      },
      {
        'name': 'modal.js',
        'describe': '这是一个基于bootstrap二次开发的dialog插件，支持多个参数的定制，配有基础使用文档，使用本插件之前需要引用bootstrap的前置环境。',
        'tags': ['bootstrap', 'jQuery', 'modal', 'gitbook'],
        'url': 'https://github.com/mowatermelon/modal-js.git'
      },
      {
        'name': 'all-year-calendar',
        'describe': '基于jq，amazeui与bootstrap的一个全年考勤日历插件，支持工作日和非工作日状态的修改设置，支持全年日历的切换',
        'tags': ['amazeui', 'jquery', 'calender', 'all-year'],
        'url': 'https://github.com/mowatermelon/all-year-calendar.git'
      },
      {
        'name': 'ACE-WEBIDE',
        'describe': 'An online javascript Editor based on ace Editor and layui <br/> <br/>',
        'tags': ['ace', 'layui', 'online-editor', 'webide'],
        'url': 'https://github.com/mowatermelon/ACE-WEBIDE.git'
      },
      {
        'name': 'wu_nyu_dictionary',
        'describe': '基于apollo，graphQL，mdui，vue全家桶等等的吳語小詞典。',
        'tags': ['apollo', 'apollo-client', 'apollographql', 'mdui', 'vue-router3', 'webpack4', 'express', 'wu-nyu', 'vue-apollo'],
        'url': 'https://github.com/mowatermelon/wu_nyu_dictionary.git'
      },
      {
        'name': 'moTool',
        'describe': '集合了一些平时写的小工具函数，方便自己做相关api能力测试。 <br/> <br/>',
        'tags': ['vue', 'plugins', 'layui-demo', 'motool'],
        'url': 'https://github.com/mowatermelon/moTool.git'
      },
      {
        'name': '更多作品',
        'describe': '更多作品可以去我的github仓库中查看',
        'tags': ['bootstrap', 'vue', 'ionic5', 'angular7', 'typescript3', 'ionic', 'electron', 'es6', 'node', 'python', 'luppo', 'travis-cli', 'iceworks', 'html2canvas', 'echart', 'json', 'io', 'localStorage', 'session', 'mvvm', 'OOCSS', 'bem', 'graphql', 'express', 'nodejs', 'apollo-graphql', 'apollo-server-express', 'graphql-tools', 'apollo-server', 'esri', 'layui', 'mui'],
        'url': 'https://github.com/mowatermelon'
      }
    ]
  },
  {
    'name': '开源贡献',
    'list': [{
      'name': 'ice 飞冰 - 让前端开发简单而友好',
      'describe': 'https://alibaba.github.io/ice/block?type=vue，主要是做vue社区物料贡献，vue社区一共20个物料，我这边贡献了四个异常错误页面，和大部分图表示例代码(大概十个左右)',
      'tags': ['vue', 'alibaba', 'ice', 'echart', 'exception'],
      'url': 'https://github.com/mowatermelon/ice/tree/melon-template/vue-materials/blocks'
    }, {
      'name': 'scaffold-market',
      'describe': 'scaffold market for single page application，http://scaffold.ant.design/，主要是向社区提供了一个vue-admin模板，当时结合bootstrap和vue写的一个后台模板，主要写了五个通用组件。',
      'tags': ['vue', 'ant-design', 'scaffold-market', 'bootstrap', 'vue-router', 'vuex', 'localStorage'],
      'url': 'https://github.com/ant-design/scaffold-market/pull/171'
    },
    {
      'name': 'hexo-theme-melon',
      'describe': '在hexo-theme-yilia主题基础上，个人定制一定样式，支持gitment的hexo主题，添加文章内容检索功能，修改了左侧目录区和右侧文章区相关宽度占比，修改之后的主题比较适合girl。<br/>',
      'tags': ['hexo', 'sass', 'gulp', 'gitment', 'npm', 'ejs', 'git', 'webpack','yilia','vue'],
      'url': 'https://github.com/mowatermelon/hexo-theme-melon.git'
    }]
  },
  {
    'name': '开源书籍',
    'list': [{
      'name': 'rust-tutorial',
      'describe': '学习rust过程中，相关基础文章综合，希望帮助他人更好入门rust<br/><br/><br/>',
      'tags': ['rust', 'roket', 'llvm', 'lldb', 'rust-book', 'gfx-rs'],
      'url': 'https://github.com/mowatermelon/learn-rust/wiki'
    }, {
      'name': 'learn-es6',
      'describe': '学习阮一峰老师的es6tutorial文章输出，之前阅读时由于每个章节内容比较综合，对于学习持续性要求比较高，这边学习过程中按照个人习惯分了十二章，进行辅助分类学习',
      'tags': ['es6', 'ruanyf'],
      'url': 'https://mowatermelon.github.io/learn-es6/'
    }, {
      'name': 'GraphQL-chatSheet',
      'describe': '学习GraphQL过程中相关知识的速查表 <br/><br/>',
      'tags': ['graphql', 'express', 'nodejs', 'apollo-graphql', 'apollo-server-express', 'graphql-tools', 'apollo-server', 'child-process'],
      'url': 'https://github.com/mowatermelon/learn-GraphQL/wiki'
    }]
  }
];

/** 
 * 获取个人基础信息数据
 */
export const aboutData = {
  'avatar': 'img/avatar.jpg',
  'name': '吴莫',
  'motto': '行至水穷处，坐看云起时。',
  'email': 'neefoxmo@gmail.com',
  'tel': 'MTU2MjM1MjUzODA=',
  'address': '5rmW5YyX5q2m5rGJ',
  'education': '本科',
  'expr': '三年',
  'job': '前端工程师',
  'workAdd': '服从安排',
  'salary': '10k+'
  // 'blog': 'https://mowatermelon.github.io/'
};


//获取banner中的相关文字

/**
 * 玄武掌水，为北方守护。代表：长生
 * 白虎掌金，为西方守护。代表：杀伐
 * 朱雀掌火，为南方守护。代表：重生
 * 青龙掌木。为东方守护。代表：威势
 */
export const bannerData = {
  'north': '予我长袖，<br/>我必善舞。',
  'west': '请让未来的你<br/>成就现在的你',
  'south': '好风凭借力<br/>送我上九天',
  'east': '吃苦的年纪<br/>就别选择安逸'
};