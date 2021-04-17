import { Link } from "react-router-dom";
import { Button } from 'antd';
import react from 'react';

class NewButton extends react.Component{
  render() {
    return(

          <Link to='/123'>
            <Button type="primary">到首页</Button>
          </Link>


    )
  }
}
export default NewButton;
