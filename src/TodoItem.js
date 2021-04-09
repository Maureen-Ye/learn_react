import react from 'react';

class TodoItem extends react.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(){
    //改变父组件list的值,对应第几项，调用delete方法
    //子组件下要和父组件通信，它要调用父组件传递过来的方法
    const {deleteFunction , index} = this.props
    deleteFunction(index);
    //this.props.deleteFunction(this.props.index)

  }

  render() {
    //子组件通过this,props的属性，从父组件接受传递过来的值
    const {content} = this.props;
/*    const content = this.props.contents*/
    /*绑定onclick方法*/
    return <li onClick={this.handleItemClick}>{content}</li>
  }
}
export default TodoItem;
