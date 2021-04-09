import react from 'react';
import './style.css'
import TodoItem from "./TodoItem";

class Todolist extends react.Component {

  constructor(props) {
    super(props);
    //创建了两个数据，只能放state
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)

    this.state = {
      inputValue: '',
      list: []
    }
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      //this.state.value
      const list = [...this.state.list, this.state.inputValue];
      this.setState({
        list,
        inputValue: ''
      })
    }
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  getListItem() {
    //父组件通过属性content的形式向子组件传值
    return this.state.list.map((value, index) => {
      return (
          //创建子组件
          <TodoItem
              content={value}
              index={index}
              key={index}
              deleteFunction={this.handleItemClick} /*传递方法*/
          />
      )
      /*return (
          <li
              key={index}
              onClick={this.handleItemClick.bind(this, index)}
             // 设置危险输出，直接输出，无需转移。一个花括号是js变量或一个表达式，里面那块对象就是变量，即等于js对象
              dangerouslySetInnerHTML={{__html:value}}
          >
            {value}
          </li>
      )*/
    })
  }

  render() {
    //abc这个注释不在jsx标签里
    return (
        <react.Fragment>
          {/*注释jsx*/}
          <label htmlFor='my_input'>请输入内容：</label>
          <input
              id='my_input'
              className='input'
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              onKeyUp={this.handleKeyUp}
          />
          <ul>
            {/*首先渲染列表*/}
            {this.getListItem()}
          </ul>
        </react.Fragment>
    )
  }
}

export default Todolist;
