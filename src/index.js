//0.引入
import React from 'react';
import ReactDOM from 'react-dom';
//webpack

//生成文本
import Todolist from "./Todolist";

//1.挂载id=root的div上,jsx语法需要引入react模块，render渲染只能单标签,组件要大写，不然就是html标签,
//将它放进组件
ReactDOM.render(
    <Todolist />,
      document.getElementById('root')
);


