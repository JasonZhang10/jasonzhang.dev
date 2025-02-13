# jasonzhang.dev 个人博客网站 🙂

用于记录个人成长、思想感悟、技术积累的小站。

博客网址：https://jasonzhang-dev.vercel.app/ 欢迎来踩💓

## 💻 技术栈

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [MDX](https://mdxjs.com/)

## 🚀 快速开始

### 环境要求

- Node.js 16.8 或更高版本
- pnpm

### 安装步骤

1. 克隆仓库

2. 安装依赖：
```bash
pnpm install
```

3. 启动开发服务器：
```bash
pnpm dev
```

4. 在浏览器中打开 [http://localhost:5555](http://localhost:3000)。

## 🏗️ 项目结构

```
├── app/                  # Next.js 14+ 应用目录
│   ├── layout.jsx        # 根布局
│   ├── page.jsx          # 首页
│   └── ...               # 其他页面
├── components/           # React 组件
│   ├── ui/               # UI 组件
│   └── ...               # 功能组件
├── data/                 # 路由配置，rbac配置
│   ├── content/          # markdown博客
│   └── siteMetaData.js   # 网站基础配置
├── lib/                  # 项目通用，工具函数等
└── public/               # 静态资源
```
## 🚧 TODO

- 代码高亮
- 项目页
- 关于页
- 移动端适配

## Thanks
本项目的灵感来自于 https://cali.so/ 和 https://sidefolio.vercel.app/blog ，感谢[CaliCastle](https://github.com/CaliCastle)和[Manu Arora](https://github.com/manuarora700)。
