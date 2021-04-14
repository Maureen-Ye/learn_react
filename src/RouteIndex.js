import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import NewList from "./newList";
import NewButton from "./button";
import Home from "./home";
import 'antd/dist/antd.css';

class Entry extends React.Component{
  render() {
    return(
          <BrowserRouter>
            <div>
              {/*首页/123*/}
              <Route path='/newList' component={NewList}/>
              <Route path='/button' component={NewButton}/>
              <Route path='/:id' component={Home}/>
            </div>
          </BrowserRouter>
        )
  }
}
ReactDOM.render(<Entry />,document.getElementById('aboutRoute'))
