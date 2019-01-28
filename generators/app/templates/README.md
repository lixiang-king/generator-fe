### 契约平台
#### react16 + react-router4 + mobx + webpack4

#### Install
~~~
yarn install
~~~

#### Dll
第一次运行需要打包vendor，仅运行一次。当依赖(vendor)改变时需重新打包，更改index.html内引入的路径。
~~~
npm run dll
~~~

#### Run
~~~
npm start
~~~

#### Build
~~~
npm run build
~~~

## Ps
关于 dll 的说明：本项目使用 yarn 下载依赖包，有些同学习惯用 npm、cnpm，这样因为没有 lock 文件会导致依赖包的版本不同，致使 dll 的 hash 不同于本项目，所以有些人会遇到 404 或者资源没找到等情况，这种情况下只要改一下 html 引用的路径即可。
