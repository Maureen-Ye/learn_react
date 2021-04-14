import React,{Component} from 'react';
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
