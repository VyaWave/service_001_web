# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# 项目结构
├── src/
│   ├── components/          # 可重用的 UI 组件
│   │   ├── ui/             # shadcn/ui 组件
│   │   └── common/         # 自定义通用组件
│   ├── features/           # 功能模块
│   │   └── auth/          # 示例：认证相关功能
│   ├── layouts/           # 布局组件
│   ├── pages/            # 页面组件
│   ├── services/         # API 服务
│   ├── store/           # Redux store 配置
│   │   ├── index.ts
│   │   └── slices/      # Redux slices
│   ├── hooks/           # 自定义 hooks
│   ├── utils/           # 工具函数
│   ├── assets/          # 静态资源
│   └── styles/          # 全局样式
├── public/              # 公共资源
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
