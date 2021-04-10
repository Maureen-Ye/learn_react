import react from 'react';
import Child from './child';

class Counter extends react.Component {

  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.state = {
      counter: 1
    }
  }

  handleBtnClick() {
    const newCounter = this.state.counter + 1;
    this.setState({
      counter: newCounter
    })
  }

  render() {
    console.log('render')
    //当组件初次创建的时候，render函数会被执行一次
    //当state数据发生变更的时候，render函数会被重新执行
    //当props数据发生变更的时候，render数据会被重新执行
    return (
        <react.Fragment>
          <button onClick={this.handleBtnClick}>增加</button>
        <Child number={this.state.counter}/>
        </react.Fragment>
    );
  }
}

export default Counter;
