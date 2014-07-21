#SeaJS

##SeaJS解决的问题？

1. 命名空间冲突
2. 文件依赖
3. 模块通信

##核心的API
在全局作用域暴露两个变量：define、seajs

seajs.config();
seajs.use();// 模块外使用模块

##实现的原理

##几个相关疑问

1.模块划分过细，导致HTTP请求增加，如何合并压缩？

使用特定的压缩工具，转换依赖关系后，合并压缩

1.合并压缩后的脚本的依赖关系如何管理？

f.js => e.js => d.js => c.js => b.js => a.js

a.js + b.js + c.js => A.js
d.js + e.js + f.js => B.js

B.js => A.js ?

2.为什么require模块时要严格遵守require的约定？

因为SeaJS通过正则表达式过滤require关键字达到管理依赖关系的目的，如果require别修改，就不能识别依赖关系。

3.可以嵌套定义模板吗？

4.循环依赖如何解决？

