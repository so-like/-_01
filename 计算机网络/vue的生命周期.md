1.beforeCreate vue实例初始化之后 各种监听与绑定事件之前触发 一般这个时候不能访问data 和methods等属性
2.create vue初始化完成之后 此时可以访问data methods 等属性 此时的vue实例还没有被挂载到页面中 此时可以进行一些如发送ajax等请求
3.beforeMount vue实例挂载到页面之前触发
4.mount  vue实例挂载到页面之后触发
5.beforeUpdate  在页面的事件以及监听发生更改之前触发
6.update   在页面的事件和监听发生更改之后触发虚拟DOM发生修改之后触发
7.beforeDestroyed  在vue实例销毁之前调用 用于销毁定时器 及一些事件
8.Destroyed   vue实例被销毁 所有绑定的监听和事件也都被销毁