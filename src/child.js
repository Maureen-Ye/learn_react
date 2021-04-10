import react from 'react';

class Child extends react.Component{
  render() {
    console.log('child render')
    return(
        <div>{this.props.number}</div>
    )
  }
}
export default Child;
