# Deployment Guide

## 部署到不同平台

### 1. GitHub Pages

#### 自动部署

项目已配置 GitHub Actions 工作流，推送代码到 `main` 或 `master` 分支会自动部署。

#### 手动部署

```bash
# 构建项目
npm run build

# 将 dist 目录内容推送到 gh-pages 分支
npm install -g gh-pages
gh-pages -d dist
```

### 2. Vercel

1. 安装 Vercel CLI:
```bash
npm i -g vercel
```

2. 部署:
```bash
vercel
```

3. 生产环境部署:
```bash
vercel --prod
```

### 3. Netlify

#### 通过网站部署
1. 登录 Netlify
2. 点击 "Add new site" > "Import an existing project"
3. 连接你的 Git 仓库
4. 构建设置:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### 通过 CLI 部署
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### 4. Cloudflare Pages

1. 登录 Cloudflare Dashboard
2. 进入 Pages 页面
3. 创建新项目
4. 构建设置:
   - Build command: `npm run build`
   - Build output directory: `dist`

### 5. 腾讯云云开发 CloudBase

```bash
# 安装 CloudBase CLI
npm install -g @cloudbase/cli

# 登录
cloudbase login

# 初始化
cloudbase init

# 部署
cloudbase hosting deploy dist
```

### 6. 自定义服务器部署

```bash
# 构建
npm run build

# 使用 Nginx 托管 dist 目录
# 配置示例:
# server {
#   listen 80;
#   server_name your-domain.com;
#   root /path/to/dist;
#   index index.html;
#
#   location / {
#     try_files $uri $uri/ /index.html;
#   }
# }
```

## 环境变量

如果需要配置环境变量，在各平台的项目设置中添加：

- `NODE_ENV`: `production`

## 性能优化

已配置的优化:
- 代码分割
- 懒加载
- 图片优化（使用占位图）
- Gzip 压缩（由服务器配置）
- 浏览器缓存策略

## SEO 优化

index.html 中已配置:
- meta 标签
- 描述和关键词
- Open Graph 标签（可扩展）

部署后建议:
1. 添加 Google Analytics
2. 生成 sitemap.xml
3. 配置 robots.txt
4. 添加结构化数据

## 故障排查

### 构建失败
- 检查 Node.js 版本是否匹配
- 清除 node_modules 重新安装
- 检查依赖版本兼容性

### 路由问题
- 确保服务器配置了 SPA 路由回退
- 所有路由应返回 index.html

### 样式问题
- 检查 Tailwind CSS 是否正确构建
- 确认 PostCSS 配置正确
