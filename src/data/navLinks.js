// src/data/navLinks.js

export const categories = [
  { id: 'source', name: '源码资源' },
  { id: 'ai-tool', name: 'AI工具' },
  { id: 'template', name: '网站模板' },
  { id: 'plugin', name: '插件扩展' },
  { id: 'tutorial', name: '建站教程' },
];

export const navLinks = [
  // ==================== 源码资源 ====================
  {
    id: 's-1',
    slug: 'ruoyi-vue',
    title: 'RuoYi-Vue 若依前后端分离版',
    url: 'https://gitee.com/y_project/RuoYi-Vue',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'source',
    description: '基于SpringBoot+Vue的前后端分离极速开发框架',
    tags: ['Java', 'SpringBoot', 'Vue', '开源'],
    publishDate: '2025-09-15',
    language: 'Java',
    size: '45MB',
    platform: 'Windows / macOS / Linux',
    downloadUrl: 'https://gitee.com/y_project/RuoYi-Vue',
    screenshots: [],
    content: `<h2>项目介绍</h2>
<p>若依是一套全部开源的快速开发平台，采用前后端分离架构，前端使用 Vue 和 Element UI，后端使用 Spring Boot、Spring Security、Redis 和 Jwt。</p>
<p>平台内置了部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、日志管理、代码生成等模块，可有效提升开发效率，降低项目成本。</p>
<h2>核心特性</h2>
<p>1. 前后端分离，通过 token 进行数据交互，可独立部署</p>
<p>2. 使用 Jwt 鉴权，支持多终端认证</p>
<p>3. 完善的代码生成器，一键生成前后端代码</p>
<p>4. 支持多数据源，简单配置即可切换</p>
<h2>适用场景</h2>
<p>适用于企业级后台管理系统开发，可作为各类业务系统的脚手架快速搭建。无论是 ERP、CRM 还是 OA 系统，都能在此基础上快速开发。</p>`,
  },
  {
    id: 's-2',
    slug: 'crmeb-mall',
    title: 'CRMEB 开源商城系统',
    url: 'https://gitee.com/ZhongBangKeJi/CRMEB',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'source',
    description: '基于ThinkPHP6+vue的高性能开源商城系统',
    tags: ['PHP', 'ThinkPHP', 'Vue', '电商'],
    publishDate: '2025-08-20',
    language: 'PHP',
    size: '120MB',
    platform: 'Windows / macOS / Linux',
    downloadUrl: 'https://gitee.com/ZhongBangKeJi/CRMEB',
    screenshots: [],
    content: `<h2>项目介绍</h2>
<p>CRMEB 是一款基于 ThinkPHP6 + Vue + Element UI 开发的开源多商户商城系统，支持小程序、公众号、H5、APP、PC 端等多端合一。</p>
<p>系统包括商品管理、订单管理、会员管理、营销管理、分销管理、数据统计等核心功能模块，满足各类电商运营需求。</p>
<h2>技术架构</h2>
<p>后端采用 ThinkPHP6 框架，遵循 PSR 规范；前端使用 uni-app 实现一套代码多端运行。系统支持 Redis 缓存、队列、定时任务等高级特性。</p>
<h2>功能亮点</h2>
<p>支持拼团、秒杀、优惠券、积分商城等丰富的营销工具。内置完整的财务结算和分销返佣系统，帮助运营方快速实现流量变现。</p>`,
  },
  {
    id: 's-3',
    slug: 'jeesite',
    title: 'JeeSite 快速开发平台',
    url: 'https://gitee.com/thinkgem/jeesite4',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'source',
    description: 'Java EE 企业级快速开发平台，基于经典技术组合',
    tags: ['Java', 'Spring', 'MyBatis', '企业级'],
    publishDate: '2025-07-10',
    language: 'Java',
    size: '68MB',
    platform: 'Windows / macOS / Linux',
    downloadUrl: 'https://gitee.com/thinkgem/jeesite4',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>JeeSite 是一个以 Spring Boot 2 为核心、整合了 MyBatis、Shiro、Beetl 等主流框架的企业级快速开发平台。内置了高效灵活的代码生成器，帮助开发者快速构建高质量的后台管理系统。</p>
<h2>技术选型</h2>
<p>前端可选传统 Bootstrap+jQuery 方案或现代化的 Vue+ElementUI 方案，数据库支持 MySQL、Oracle、SQL Server 等多种主流数据库。</p>
<h2>核心模块</h2>
<p>包含用户管理、机构管理、区域管理、菜单管理、角色权限、字典管理、操作日志、登录日志等通用后台模块，以及强大灵活的代码生成工具。</p>`,
  },

  // ==================== AI工具 ====================
  {
    id: 'ai-1',
    slug: 'chatgpt',
    title: 'ChatGPT 中文版',
    url: 'https://chat.openai.com',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'ai-tool',
    description: 'OpenAI 推出的对话式AI助手，支持多种语言',
    tags: ['AI', 'OpenAI', '聊天', 'GPT'],
    publishDate: '2025-06-01',
    language: '多语言',
    size: '无需下载',
    platform: 'Web / iOS / Android',
    downloadUrl: 'https://chat.openai.com',
    screenshots: [],
    content: `<h2>工具介绍</h2>
<p>ChatGPT 是由 OpenAI 开发的大型语言模型对话工具，基于 GPT 架构。它能够理解和生成自然语言文本，应用于写作、编程、翻译、学习辅导等多种场景。</p>
<p>截至 2025 年，ChatGPT 已发展到支持多模态输入，可以处理文字、图像和语音，极大地扩展了人机交互的边界。</p>
<h2>核心能力</h2>
<p>1. 代码编写与调试：支持数十种编程语言，可生成、解释和修复代码</p>
<p>2. 内容创作：撰写文章、邮件、社交媒体文案等</p>
<p>3. 数据分析：处理表格数据、生成可视化图表</p>
<p>4. 知识问答：覆盖广泛领域的专业知识</p>
<h2>版本对比</h2>
<p>免费版提供 GPT-4o mini 模型，Plus 订阅用户可使用完整 GPT-4o 模型并获得更高的消息额度、优先访问新功能等权益。</p>`,
  },
  {
    id: 'ai-2',
    slug: 'midjourney',
    title: 'Midjourney AI绘画',
    url: 'https://www.midjourney.com',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'ai-tool',
    description: 'AI驱动的图像生成工具，输入文字即可生成精美图片',
    tags: ['AI', '绘画', '设计', 'Midjourney'],
    publishDate: '2025-05-15',
    language: '英文',
    size: '无需下载',
    platform: 'Web (Discord)',
    downloadUrl: 'https://www.midjourney.com',
    screenshots: [],
    content: `<h2>工具介绍</h2>
<p>Midjourney 是一款基于 AI 的图像生成工具，通过自然语言描述即可生成高质量的艺术作品、插画、概念设计等。它采用深度学习中的扩散模型技术，能够根据文字提示词（Prompt）生成风格各异的图像。</p>
<h2>使用方法</h2>
<p>Midjourney 运行在 Discord 平台上。用户加入官方 Discord 服务器后，在指定频道中使用 /imagine 命令并输入描述词，AI 会在约一分钟内返回四张候选图片。用户可以选择放大、变体或重新生成。</p>
<h2>参数与技巧</h2>
<p>高级用户可以通过参数调节画面比例（--ar）、模型版本（--v）、风格化程度（--s）等。常用的 Prompt 技巧包括指定艺术家风格、添加画质关键词（如 8K, photorealistic）、使用负面提示等。</p>`,
  },
  {
    id: 'ai-3',
    slug: 'tongyi-qianwen',
    title: '通义千问',
    url: 'https://tongyi.aliyun.com',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'ai-tool',
    description: '阿里云推出的超大规模语言模型，免费使用',
    tags: ['AI', '阿里', '大模型', '免费'],
    publishDate: '2025-04-20',
    language: '中文',
    size: '无需下载',
    platform: 'Web / iOS / Android',
    downloadUrl: 'https://tongyi.aliyun.com',
    screenshots: [],
    content: `<h2>产品介绍</h2>
<p>通义千问是阿里云自主研发的超大规模语言模型，完全免费向公众开放。它具备多轮对话、文案创作、逻辑推理、多模态理解等强大能力。</p>
<p>通义千问深度融入阿里云生态，与钉钉、夸克等产品无缝集成，为企业和个人用户提供全方位的 AI 服务。</p>
<h2>主要功能</h2>
<p>1. 智能问答：支持网页链接和文档上传后的内容问答</p>
<p>2. 代码助手：代码生成、解释、优化和 Debug</p>
<p>3. 百宝袋：内置数百个场景化 AI 应用</p>
<p>4. 通义万象：AI 图像生成与编辑</p>
<h2>开发者资源</h2>
<p>通义千问提供开放的 API 接口和 SDK，支持 Python、Java、Go 等多种语言接入，开发者可以将大模型能力快速集成到自己的应用中。</p>`,
  },

  // ==================== 网站模板 ====================
  {
    id: 't-1',
    slug: 'astro-themes',
    title: 'Astro 官方模板库',
    url: 'https://astro.build/themes',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'template',
    description: 'Astro 官方主题市场，数百个免费网站模板',
    tags: ['Astro', '模板', '免费', '静态站点'],
    publishDate: '2025-03-10',
    language: '多语言',
    size: '按模板不同',
    platform: 'Web',
    downloadUrl: 'https://astro.build/themes',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>Astro 官方主题市场汇集了社区贡献的数百个免费和付费网站模板，涵盖博客、文档站、电商、企业官网、个人作品集等多种场景。</p>
<p>所有模板均基于 Astro 框架构建，默认支持零 JavaScript 输出、多框架组件混合（React、Vue、Svelte 等），以及 Markdown 和 MDX 内容管理。</p>
<h2>模板分类</h2>
<p>主题按类型分为博客、文档、作品集、电商、落地页、SaaS 等多种类别，用户可根据需求筛选和预览。每个主题都提供在线 Demo 和 GitHub 源码。</p>
<h2>使用方式</h2>
<p>选择一个主题后，通过脚手架命令即可快速创建项目。主题自带完整的页面结构、样式系统和内容占位，开发者只需替换内容即可上线。</p>`,
  },
  {
    id: 't-2',
    slug: 'html5up',
    title: 'HTML5 UP 响应式模板',
    url: 'https://html5up.net',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'template',
    description: '免费HTML5响应式网站模板，CC协议授权',
    tags: ['HTML5', 'CSS3', '响应式', '免费'],
    publishDate: '2025-02-28',
    language: 'HTML/CSS/JS',
    size: '每模板约 5-15MB',
    platform: 'Web',
    downloadUrl: 'https://html5up.net',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>HTML5 UP 是一个提供完全免费 HTML5 响应式模板的知名网站，所有模板采用 Creative Commons 协议授权，可自由用于个人和商业项目。</p>
<p>模板设计精美、代码规范，基于 HTML5 语义化标签和 CSS3 构建，兼容所有现代浏览器，同时具备完善的响应式适配。</p>
<h2>模板特色</h2>
<p>模板内置了丰富的组件：Hero 英雄区、Grid 网格布局、轮播图、灯箱画廊、联系表单等。每个模板配有完整的演示页面和源代码包。</p>
<h2>适用场景</h2>
<p>适合个人博客、创业公司官网、产品展示页、活动宣传页等快速搭建需求。开发者可以直接修改 HTML 和 CSS，无需学习任何框架。</p>`,
  },
  {
    id: 't-3',
    slug: 'tailwind-toolbox',
    title: 'Tailwind Toolbox 模板',
    url: 'https://www.tailwindtoolbox.com',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'template',
    description: 'Tailwind CSS 免费模板和组件合集',
    tags: ['Tailwind', 'CSS', '组件', '免费'],
    publishDate: '2025-01-18',
    language: 'HTML/CSS',
    size: '每模板约 2-8MB',
    platform: 'Web',
    downloadUrl: 'https://www.tailwindtoolbox.com',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>Tailwind Toolbox 是一个专注于 Tailwind CSS 的免费模板和组件资源站，提供了从登录页到完整后台面板的各种模板。</p>
<p>所有模板均使用 Tailwind CSS 实用类构建，无需编写自定义 CSS，开发者可以自由定制和组合。</p>
<h2>模板类型</h2>
<p>包含落地页模板、管理后台面板、定价页面、登录注册页、博客布局、作品集展示等多种常见场景模板。所有模板均开源且免费商用。</p>
<h2>技术亮点</h2>
<p>模板考虑了无障碍访问（a11y）、暗色模式支持和响应式设计。配合 Tailwind CSS 的 JIT 模式，构建出的 CSS 文件体积极小，加载速度极快。</p>`,
  },

  // ==================== 插件扩展 ====================
  {
    id: 'p-1',
    slug: 'vscode-marketplace',
    title: 'VS Code 插件市场',
    url: 'https://marketplace.visualstudio.com',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'plugin',
    description: 'Visual Studio Code 官方插件和扩展市场',
    tags: ['VS Code', '插件', '开发工具'],
    publishDate: '2025-06-20',
    language: '多语言',
    size: '按插件不同',
    platform: 'VS Code (Windows/macOS/Linux)',
    downloadUrl: 'https://marketplace.visualstudio.com',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>VS Code 插件市场是 Visual Studio Code 编辑器的官方扩展生态平台，拥有数万个免费插件，覆盖几乎所有编程语言和开发场景。</p>
<p>用户可以直接在编辑器内搜索、安装和管理插件，也可以访问网页版市场浏览和发现新的扩展。</p>
<h2>热门插件推荐</h2>
<p>1. Prettier：代码自动格式化工具，支持多种语言</p>
<p>2. ESLint：JavaScript/TypeScript 代码质量检查</p>
<p>3. GitHub Copilot：AI 辅助编程助手</p>
<p>4. Live Server：本地开发热更新服务器</p>
<p>5. Remote - SSH：远程开发插件</p>
<h2>开发与发布</h2>
<p>开发者可以通过 VS Code Extension API 开发插件，使用 yeoman 生成器创建项目骨架，打包后发布到市场供全球用户使用。</p>`,
  },
  {
    id: 'p-2',
    slug: 'chrome-extensions',
    title: 'Chrome 扩展商店',
    url: 'https://chromewebstore.google.com',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'plugin',
    description: 'Chrome 浏览器官方扩展和主题商店',
    tags: ['Chrome', '浏览器', '扩展', '插件'],
    publishDate: '2025-05-30',
    language: '多语言',
    size: '按扩展不同',
    platform: 'Chrome (Windows/macOS/Linux)',
    downloadUrl: 'https://chromewebstore.google.com',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>Chrome 网上应用店是 Google Chrome 浏览器的官方扩展平台，提供数万款扩展程序和主题，帮助用户增强浏览器的功能和个性化外观。</p>
<p>扩展涵盖生产力工具、开发辅助、隐私安全、购物助手、娱乐社交等多个类别，大部分可免费安装使用。</p>
<h2>开发者生态</h2>
<p>Chrome 扩展基于 Web 技术（HTML、CSS、JavaScript）开发，遵循 Manifest V3 规范。开发者通过 Chrome Developer Dashboard 发布和管理扩展，可设置免费或付费模式。</p>
<h2>安全机制</h2>
<p>所有扩展需通过 Google 的安全审核才能上架。Manifest V3 引入了更严格的权限模型和 Service Worker 架构，显著提升了扩展的安全性和隐私保护水平。</p>`,
  },

  // ==================== 建站教程 ====================
  {
    id: 'tu-1',
    slug: 'mdn-docs',
    title: 'MDN Web 文档',
    url: 'https://developer.mozilla.org/zh-CN',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'tutorial',
    description: 'Mozilla 开发者网络，权威的前端开发文档和教程',
    tags: ['MDN', '前端', '教程', '文档'],
    publishDate: '2025-01-01',
    language: '中文/多语言',
    size: '在线',
    platform: 'Web',
    downloadUrl: 'https://developer.mozilla.org/zh-CN',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>MDN Web 文档（Mozilla Developer Network）是全球最权威的 Web 技术文档平台之一，由 Mozilla 基金会维护，涵盖 HTML、CSS、JavaScript 以及各类 Web API 的完整参考文档。</p>
<p>中文版 MDN 由志愿者社区翻译维护，提供了大量高质量的中文技术文档和教程，是前端开发者的必备参考工具。</p>
<h2>内容结构</h2>
<p>1. Web 入门：面向零基础学习者的入门教程</p>
<p>2. HTML / CSS / JavaScript：完整的语言参考和指南</p>
<p>3. Web API：浏览器提供的所有编程接口文档</p>
<p>4. 最佳实践：无障碍、性能优化、安全等专题指南</p>
<h2>学习路径</h2>
<p>MDN 为不同水平的开发者提供了清晰的学习路径，从「Web 入门」开始，到「前端开发者」完整课程，再到高级专题深入研究，帮助开发者系统性地掌握 Web 技术栈。</p>`,
  },
  {
    id: 'tu-2',
    slug: 'runoob',
    title: '菜鸟教程',
    url: 'https://www.runoob.com',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'tutorial',
    description: '全面的编程入门教程网站，涵盖多种编程语言',
    tags: ['教程', '编程', '入门', '多语言'],
    publishDate: '2025-01-01',
    language: '中文',
    size: '在线',
    platform: 'Web',
    downloadUrl: 'https://www.runoob.com',
    screenshots: [],
    content: `<h2>平台介绍</h2>
<p>菜鸟教程是国内最受欢迎的免费编程学习网站之一，提供了从前端到后端、从基础到进阶的完整教程体系，涵盖 HTML、CSS、JavaScript、Python、Java、C、C++、PHP、MySQL 等数十种技术。</p>
<p>教程采用「知识点 + 在线实例 + 在线工具」的模式，每个知识点都配有可直接运行的代码示例，学习门槛低，上手快。</p>
<h2>特色工具</h2>
<p>网站内置了在线编辑器、SQL 在线测试、正则表达式测试、颜色选择器等多种实用开发工具，让学习者在阅读教程的同时能够即时实践和验证。</p>
<h2>学习建议</h2>
<p>建议按照网站左侧导航的顺序系统学习，每掌握一个章节就在线运行实例加深理解。遇到问题时可以使用站内搜索快速定位相关内容。</p>`,
  },
  {
    id: 'tu-3',
    slug: 'vuejs-docs',
    title: 'Vue.js 官方中文文档',
    url: 'https://cn.vuejs.org',
    icon: '/images/default.svg',
    cover: '/images/default.svg',
    category: 'tutorial',
    description: '渐进式JavaScript框架Vue.js的官方中文教程',
    tags: ['Vue', 'JavaScript', '框架', '前端'],
    publishDate: '2025-01-01',
    language: '中文',
    size: '在线',
    platform: 'Web',
    downloadUrl: 'https://cn.vuejs.org',
    screenshots: [],
    content: `<h2>文档介绍</h2>
<p>Vue.js 官方中文文档是由 Vue.js 团队和中文社区共同维护的权威学习资源，完整覆盖了 Vue 3 的全部核心概念和 API 参考。</p>
<p>文档从「简介」开始，逐步深入到响应式基础、模板语法、计算属性、组件、路由等核心概念，配有大量可交互的实例和演练场。</p>
<h2>文档特色</h2>
<p>1. 渐进式学习：从基础到高级逐步深入</p>
<p>2. 互动演练：在线 SFC 演练场即时编码预览</p>
<p>3. 风格指南：官方推荐的编码规范和最佳实践</p>
<p>4. 迁移指南：Vue 2 到 Vue 3 的完整迁移路径</p>
<h2>配套资源</h2>
<p>除核心文档外，Vue 生态还提供了 Vue Router（路由）、Pinia（状态管理）、Vite（构建工具）等配套库的完整中文文档，帮助开发者快速构建现代化的 Web 应用。</p>`,
  },
];
