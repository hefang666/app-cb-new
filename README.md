# app-cb-new
抄表app项目书写规则

1. 做项目之前 浏览 aui.css  common.css   及  index.html

2. 所有css和js都不能写到页面中 以外部文件的形式引入

3. 图片优先考虑字体图标

4. css命名规则 snt-模块名

5. 在写项目之前浏览器全局页面， 已经有的模块不要重复写两次 ， 做到项目dry

6. 所有样式封装都在 aui  和  common 中，需要添加公共样式添加到common中，aui不允许更改，只能在common中重写，重写时注意不要改aui的全局样式 ，添加自己的类名覆盖之前的样式
