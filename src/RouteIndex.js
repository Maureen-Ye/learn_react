import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import NewList from "./newList";
import NewButton from "./button";
import 'antd/dist/antd.css';

class Entry extends Component{
  render() {
    return(
        <div>
          <BrowserRouter>
            <Route path='/newList' component={NewList}/>
            <Route path='/button' component={NewButton}/>
          </BrowserRouter>
        </div>
        )
  }
}
ReactDOM.render(<Entry />,document.getElementById('aboutRoute'))
