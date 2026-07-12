// src/data/navLinks.js — 分类定义 + .md 文章聚合
// 使用 import.meta.glob 自动收集所有 posts/*/index.md

export const categories = [
  { id: 'source', name: '源码资源' },
  { id: 'ai-tool', name: 'AI工具' },
  { id: 'template', name: '网站模板' },
  { id: 'plugin', name: '插件扩展' },
  { id: 'tutorial', name: '建站教程' },
];

// 使用 Vite glob import 加载所有 .md 文章
const postModules = import.meta.glob('./posts/*/index.md', { eager: true });

export const navLinks = Object.values(postModules).map(module => ({
  ...module.frontmatter,
  content: module.compiledContent(),
}));
