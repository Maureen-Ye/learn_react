import react from 'react';
import axios from "axios";

class FixCounter extends react.Component{
 /*
 handleClick(){
    console.log('window click')
  }

  componentWillMount() {
    window.addEventListener('click',this.handleClick)
  }
  */

  render() {
    return(
        <div>hello simple</div>
    )
  }

  componentDidMount() {
    const promise =  axios.get('http://www.dell-lee.com/react/api/demo.json')
    promise.then((res) =>{
      console.log(res.data)
    })
  }

  /*
  componentWillUnmount() {
    window.removeEventListener('click' , this.handleClick)
  }
*/

}

export default FixCounter;
