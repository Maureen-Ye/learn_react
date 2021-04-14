
import { Button } from 'antd';
import react from 'react';

class Home extends react.Component{
  render() {
    console.log(this.props.match.params.id)
    return(
        <react.Fragment>
          <Button type="primary">页面第一层</Button>
          <h4>地址/newList</h4>
          <h4>地址/button</h4>
        </react.Fragment>
    )
  }
}
export default Home;
