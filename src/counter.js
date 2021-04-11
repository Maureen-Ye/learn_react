import react from 'react';

/*import Child from './child';*/

class Counter extends react.Component {

  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.state = {
      counter: 1
    }
  }

  handleBtnClick() {
    /*    console.log(this.childElem);*/
    const newCounter = this.state.counter + 1;
    console.log(this.divElem.innerHTML);
    //可以不接收对象，接收一个函数,再return一个对象
    //这样写的好处可以再里面写第二个函数，会等到第一个状态执行完再继续

    /*
     setState是异步的，它不是立即执行，可能等一会才能执行，等的过程中，下面的内容先执行了
       this.setState({
          counter: newCounter
       })
        console.log(this.divElem.innerHTML);
      }
       输出结果是1 1 ， 2 2
       用下面的回调函数后结果是1 2 ，2 3
     */
    this.setState(() => {
      return {
        counter: newCounter
      }
    },()=>{
        console.log(this.divElem.innerHTML);
        })
  }



  render() {
    /*console.log('render')*/

    //当组件初次创建的时候，render函数会被执行一次
    //当state数据发生变更的时候，render函数会被重新执行
    //当props数据发生变更的时候，render数据会被重新执行

    //ref 写在html标签上，获取的是dom节点
    //ref写在组件标签上，获取的是组件的js实例
    return (
        <react.Fragment>
          <button
              onClick={this.handleBtnClick}
          >
            增加
          </button>
          <div ref={(div) => {
            this.divElem = div
          }}>{this.state.counter}</div>

          {/* <Child
            ref={(child) => {this.childElem = child}}
            number={this.state.counter}
        />*/}
        </react.Fragment>
    );
  }
}

export default Counter;
