//
// //0.引入
// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
//
// //webpack
//
// //生成文本
//
// import Todolist from './Todolist';
// import TodoItem from "./TodoItem";
// import Counter from './counter';
// import Child from './child';
// import FixCounter from './fixCounter';
// import NewList from "./newList";
// import NewButton from "./button";
//
// //1.挂载id=root的div上,jsx语法需要引入react模块，render渲染只能单标签,组件要大写，不然就是html标签,
// //将它放进组件
// ReactDOM.render(
//     <div>
//       <Todolist />
//       <TodoItem />
//       <Counter />
//       <Child/>
//       <FixCounter />
//       <NewList />
//       <NewButton />
//     </div>,
//     document.getElementById('root')
// );
//
//
//















import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import NewList from "./newList";
import NewButton from "./button";
import Home from "./home";
import 'antd/dist/antd.css';
import Redirect from "react-router-dom/Redirect";

class Entry extends React.Component{
  render() {
    return(
        <BrowserRouter>
          <div>
            <Route path='/newList' component={NewList}/>
            <Route path='/button' component={NewButton}/>
            <Route path='/' component={Home}/>
            <Redirect from={"*"} to={'/'} />
          </div>
        </BrowserRouter>
    )
  }
}
ReactDOM.render(<Entry />,document.getElementById('aboutRoute'))
