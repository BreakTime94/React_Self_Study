import React, {Component} from "react";

class Counter2 extends Component {

    state = {
      number: 0,
      fixedNumber : 0
    }
  render() {
    const {number, fixedNumber} = this.state; // state를 조회하거나 할당 할 때는 this.state로 (class 단에서)

    return(
        <div>
          <h1>{number}</h1>
          <h2>바뀌지 않는 값 : {fixedNumber}</h2>
          <button onClick={() => {
           this.setState(prev => {
             return {
               number: prev.number + 1
             }
           })
          }}>
            + 1
          </button>
        </div>
    )
  }
}
export default Counter2