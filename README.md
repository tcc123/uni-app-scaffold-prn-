# uni-app-scaffold

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 目录结构
```
uni-app-scaffold
├─.eslintignore // eslint忽略语法检查文件
├─.eslintrc.js // eslint配置文件
├─.gitignore // git忽略提交文件
├─README.md // 说明文档
├─babel.config.js // babel配置文件
├─package-lock.json // 包版本控制文件
├─package.json // 包管理文件
├─postcss.config.js // postcss配置文件
├─tsconfig.json // ts配置文件
├─vue.config.js // vue-cli3配置文件
├─src // 资源目录
|  ├─App.vue // 页面入口文件
|  ├─main.js // uni-app项目入口文件
|  ├─manifest.json // 应用配置文件
|  ├─pages.json // 页面配置文件
|  ├─uni.scss // uni样式
|  ├─utils // 工具库
|  |   ├─promisify.js // api转promise
|  |   ├─token.js // 获取token
|  |   └util.js // 函数工具库
|  ├─static // 静态资源目录
|  |   ├─images // 图片文件夹
|  |   |   └logo.png
|  ├─plugins // 插件目录
|  |    ├─request 第三方请求库
|  |    |    ├─config.js // 请求库配置文件
|  |    |    ├─index.d.ts
|  |    |    ├─index.js
|  |    |    ├─tools.js
|  |    |    ├─core
|  |    |    |  ├─index.js
|  |    |    |  ├─interceptor.js
|  |    |    |  ├─mergeConfig.js
|  |    |    |  └network.js
|  ├─pages // 页面目录
|  |   ├─index // index页文件夹
|  |   |   └index.vue // index页
|  ├─feConfig // 前端配置文件
|  |    ├─development.js // 开发环境配置
|  |    ├─production.js // 正式环境配置
|  |    └test.js // 测试环境配置
|  ├─contants // 常量目录
|  |    └enums.js // 枚举值文件
|  ├─compoents // 组件目录
|  ├─common // 公共文件目录
├─public // 模板目录
|   └index.html // h5模板文件
```