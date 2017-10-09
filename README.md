# 在线教育管理系统

## 预览项目模板

下载静态页模板到本地：

```bash
$ git clone https://github.com/lipengzhou/admin-template.git
```

安装依赖：

```bash
$ cd admin-template
$ npm install
```

启动预览：

```bash
$ npm start
```

## 搭建 Gulp 任务工作流

### 找痛点

- 编译 less
- 提取 HTML 公共部分
- 图片压缩
- js 合并压缩
- 在开发过程中我希望能代码修改完毕，帮我自动刷新浏览器

### 目录结构

> https://github.com/h5bp/html5-boilerplate

### 将 `gulp` 配置到项目中

安装 `gulp` 到项目中：

```bash
$ npm i -S gulp
```

在项目根目录下创建 `gulpfile.js`


### 解决 less 编译问题

安装插件：

```bash
# gulp-less 编译 less 到 css
# gulp-csso 压缩 css
$ npm i -S gulp-less gulp-csso
```

- 公共的样式文件
- 页面私有的样式文件

### 处理 html 页面公共部分

- https://github.com/sindresorhus/gulp-nunjucks
- https://mozilla.github.io/nunjucks/templating.html#include

安装插件：

```bash
$ npm i -S gulp-nunjucks
```

然后把页面中公共的部分一块一块提取出来独立的放到 _partials 目录中。
完了之后在静态页面中，通过 `{% include "./_partials/header.html" %}` 来载入公共的部分。

- 提取公共部分到 _partials
- 提取模板页
- 然后所有的页面都通过继承自模板页的方式去编写

注意：这种 html 是我们编译前的源码，浏览器肯定是不认识的，浏览器最终执行的是我们编译的 dist 中的结果。
