// src/data/navLinks.js

// 1. 365ym 风格资源分类
export const categories = [
  { id: 'source', name: '源码资源' },
  { id: 'ai-tool', name: 'AI工具' },
  { id: 'template', name: '网站模板' },
  { id: 'plugin', name: '插件扩展' },
  { id: 'tutorial', name: '建站教程' },
];

// 2. 示例导航数据
export const navLinks = [
  // 源码资源
  {
    id: 's-1',
    title: 'RuoYi-Vue 若依前后端分离版',
    url: 'https://gitee.com/y_project/RuoYi-Vue',
    icon: '/images/default.svg',
    cover: '',
    category: 'source',
    description: '基于SpringBoot+Vue的前后端分离极速开发框架',
  },
  {
    id: 's-2',
    title: 'CRMEB 开源商城系统',
    url: 'https://gitee.com/ZhongBangKeJi/CRMEB',
    icon: '/images/default.svg',
    cover: '',
    category: 'source',
    description: '基于ThinkPHP6+vue的高性能开源商城系统',
  },
  {
    id: 's-3',
    title: 'JeeSite 快速开发平台',
    url: 'https://gitee.com/thinkgem/jeesite4',
    icon: '/images/default.svg',
    cover: '',
    category: 'source',
    description: 'Java EE 企业级快速开发平台，基于经典技术组合',
  },

  // AI工具
  {
    id: 'ai-1',
    title: 'ChatGPT 中文版',
    url: 'https://chat.openai.com',
    icon: '/images/default.svg',
    cover: '',
    category: 'ai-tool',
    description: 'OpenAI 推出的对话式AI助手，支持多种语言',
  },
  {
    id: 'ai-2',
    title: 'Midjourney AI绘画',
    url: 'https://www.midjourney.com',
    icon: '/images/default.svg',
    cover: '',
    category: 'ai-tool',
    description: 'AI驱动的图像生成工具，输入文字即可生成精美图片',
  },
  {
    id: 'ai-3',
    title: '通义千问',
    url: 'https://tongyi.aliyun.com',
    icon: '/images/default.svg',
    cover: '',
    category: 'ai-tool',
    description: '阿里云推出的超大规模语言模型，免费使用',
  },

  // 网站模板
  {
    id: 't-1',
    title: 'Astro 官方模板库',
    url: 'https://astro.build/themes',
    icon: '/images/default.svg',
    cover: '',
    category: 'template',
    description: 'Astro 官方主题市场，数百个免费网站模板',
  },
  {
    id: 't-2',
    title: 'HTML5 UP 响应式模板',
    url: 'https://html5up.net',
    icon: '/images/default.svg',
    cover: '',
    category: 'template',
    description: '免费HTML5响应式网站模板，CC协议授权',
  },
  {
    id: 't-3',
    title: 'Tailwind Toolbox 模板',
    url: 'https://www.tailwindtoolbox.com',
    icon: '/images/default.svg',
    cover: '',
    category: 'template',
    description: 'Tailwind CSS 免费模板和组件合集',
  },

  // 插件扩展
  {
    id: 'p-1',
    title: 'VS Code 插件市场',
    url: 'https://marketplace.visualstudio.com',
    icon: '/images/default.svg',
    cover: '',
    category: 'plugin',
    description: 'Visual Studio Code 官方插件和扩展市场',
  },
  {
    id: 'p-2',
    title: 'Chrome 扩展商店',
    url: 'https://chromewebstore.google.com',
    icon: '/images/default.svg',
    cover: '',
    category: 'plugin',
    description: 'Chrome 浏览器官方扩展和主题商店',
  },

  // 建站教程
  {
    id: 'tu-1',
    title: 'MDN Web 文档',
    url: 'https://developer.mozilla.org/zh-CN',
    icon: '/images/default.svg',
    cover: '',
    category: 'tutorial',
    description: 'Mozilla 开发者网络，权威的前端开发文档和教程',
  },
  {
    id: 'tu-2',
    title: '菜鸟教程',
    url: 'https://www.runoob.com',
    icon: '/images/default.svg',
    cover: '',
    category: 'tutorial',
    description: '全面的编程入门教程网站，涵盖多种编程语言',
  },
  {
    id: 'tu-3',
    title: 'Vue.js 官方中文文档',
    url: 'https://cn.vuejs.org',
    icon: '/images/default.svg',
    cover: '',
    category: 'tutorial',
    description: '渐进式JavaScript框架Vue.js的官方中文教程',
  },
];
