# 一个用基于 webpack 项目后自动上传 ftp 服务器的 plugin

## 使用方法

1. 安装

```js
npm install ftpautoupload-webpack-plugin -D
```

2 . 配置文件中引入

如果是 webpack 环境，
在 webpack.config.js 中

```js
const AutoUploadPlugin = require("ftpautoupload-webpack-plugin");
module.exports = {
  plugins: [
    new AutoUploadPlugin({
      user: "panghu", //你的ftp账号用户名
      password: "", //你的ftp账号密码
      host: "", //必填，ftp地址
      port: 21,
      remoteRoot: "/panghu", //必填，你要传递的路径，演示为传递到根目录文件夹panghu下
      include: ["*", "**/*"], //必填，要传递的文件，该写法为所有文件传递
      deleteRemote: true, //必填，每次传递是否清空remoteRoot所在目录下的所有文件
      // exclude: [
      //   "dist/**/*.map",
      //   "node_modules/**",
      //   "node_modules/**/.*",
      //   ".git/**",
      // ], //忽略传递的文件
    }),
  ],
};
```

如果在 vue 中
在 vue.config.js

```js
const AutoUploadPlugin = require("ftpautoupload-webpack-plugin");
module.exports = {
  configureWebpack: {
    plugins: [
      new AutoUploadPlugin({
        user: "panghu", //你的ftp账号用户名
        password: "", //你的ftp账号密码
        host: "", //必填，ftp地址
        port: 21,
        remoteRoot: "/panghu", //必填，你要传递的路径，演示为传递到根目录文件夹panghu下
        include: ["*", "**/*"], //必填，要传递的文件，该写法为所有文件传递
        deleteRemote: true, //必填，每次传递是否清空remoteRoot所在目录下的所有文件
        // exclude: [
        //   "dist/**/*.map",
        //   "node_modules/**",
        //   "node_modules/**/.*",
        //   ".git/**",
        // ], //忽略传递的文件
      }),
    ],
  },
};
```

3 . 执行

```js
npm run build
```

注意 package.json 中 build 命令配置

## 运行效果

点击图片
<http://imgbdb3.bendibao.com/bsybdb/20218/12/2021812171515_98266.png>

## 其他

在 react, uniapp 等中使用，遵循其官网做出相应配置
