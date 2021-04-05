####    父与子之间传递
1.props 父组件提供数据 而子组件通过使用props来接收父组件传给他的数据 要指定接收的数据类型
2.provider/inject 父组件通过provider来提供需要传递的参数 而子组件通过inject来接收父组件传过来的数据
3.通过$parent来获取当前父组件 通过$root来获取根组件

####    子组件向父组件传递
1.通过this.$emit('massage',data)来向父组件传递数据 父组件通过设置监听事件来获取这个值
2.父组件还可以通过p=this.$refs.name组件名来获取子组件传递过来的值 p.属性  p.方法来获取子组件的值

####   兄弟组件间的传值 
1.通过总线的方式 引入总线事件 bus.$emit('message',data) 来向兄弟组件传值 而接受组件通过bus.$on(’message‘,function(data){来获取数据})
2.vuex来传值