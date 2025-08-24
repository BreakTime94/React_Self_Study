import React, {Component, useState} from "react";

// 1. class를 활용한 useState 정의

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     //state 값 초기 설정
//     this.state = {
//       number : 0
//     }
//   }
//
//   render() {
//     const {number} = this.state;
//
//     return(
//         <div>
//           <h1>{number}</h1>
//           <button onClick={() => {
//             this.setState({number: number + 1})
//           }}>
//             +1
//           </button>
//         </div>
//     );
//   }
// }

// 2. Function을 통한 useState 정의
function Counter() {

  const [number, setNumber] = useState(0);

  return (
      <div>
       <h1>{number}</h1>
       <button onClick={() => {
         setNumber(number + 1)
         }}>
           +1
         </button>
       </div>
  );
}

export default Counter