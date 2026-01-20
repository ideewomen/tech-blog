# Tech Blog - 技术个人博客

一个基于 React 构建的现代化技术个人博客，采用清新简洁的科技风格设计。

## ✨ 特性

- 📱 完全响应式设计，适配各种设备
- 🎨 清新简洁的科技风格 UI
- ✨ 流畅的动画特效（使用 Framer Motion）
- 📝 文章模块（列表页、详情页）
- 👤 关于我页面
- 🚀 作品展示模块
- 🔗 友链模块
- 🌓 深色模式支持
- ⚡ 快速构建和热更新（Vite）

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
tech-blog/
├── src/
│   ├── components/          # 可复用组件
│   │   └── Layout.jsx      # 布局组件
│   ├── pages/               # 页面组件
│   │   ├── Home.jsx        # 首页
│   │   ├── Articles.jsx    # 文章列表
│   │   ├── ArticleDetail.jsx  # 文章详情
│   │   ├── About.jsx       # 关于我
│   │   ├── Projects.jsx    # 作品展示
│   │   └── Links.jsx       # 友链
│   ├── data/               # 测试数据
│   │   ├── articles.json   # 文章数据
│   │   ├── about.json      # 个人信息
│   │   ├── projects.json   # 项目数据
│   │   └── links.json      # 友链数据
│   ├── App.jsx             # 根组件
│   ├── main.jsx            # 入口文件
│   └── index.css           # 全局样式
├── public/                 # 静态资源
├── index.html              # HTML 模板
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置
├── tailwind.config.js      # Tailwind CSS 配置
└── postcss.config.js       # PostCSS 配置
```

## 🎨 技术栈

- **框架**: React 18
- **路由**: React Router DOM 6
- **构建工具**: Vite 5
- **样式**: Tailwind CSS 3
- **动画**: Framer Motion 10
- **图标**: Lucide React

## 📝 数据管理

所有测试数据均以 JSON 格式存储在 `src/data/` 目录下，便于维护和更新：

- `articles.json`: 文章数据，包括标题、内容、标签、分类等
- `about.json`: 个人信息，包括简介、技能、工作经历等
- `projects.json`: 项目数据，包括项目名称、技术栈、链接等
- `links.json`: 友链数据，包括名称、描述、链接等

## 🚀 部署

### Pages 服务平台部署

本项目已经适配 Pages 服务平台部署规范。部署步骤：

1. 将代码推送到 Git 仓库（GitHub、GitLab 等）
2. 在 Pages 服务提供商处创建新项目
3. 设置构建命令为 `npm run build`
4. 设置输出目录为 `dist`
5. 部署即可

### 静态部署

构建后的文件位于 `dist/` 目录，可以部署到任何静态托管服务：

- GitHub Pages
- Netlify
- Vercel
- CloudBase
- 其他静态托管服务

## 🎨 自定义

### 修改颜色主题

编辑 `tailwind.config.js` 文件中的 `colors` 配置：

```javascript
colors: {
  primary: {
    // 自定义主色调
  }
}
```

### 更新数据

直接修改 `src/data/` 目录下的 JSON 文件即可更新展示内容。

### 修改动画效果

在页面组件中调整 Framer Motion 的参数：

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* 内容 */}
</motion.div>
```

## 📄 License

MIT License
