import React, {Component} from "react";
import PropTypes from 'prop-types';

// const MyComponent = props => {
//   const {name = '기본이름이로세', favoriteNumber, children} = props;
//
//   console.log('DEV ?', import.meta.env.DEV, 'MODE ?', import.meta.env.MODE)
//
//   console.log(MyComponent.propTypes)
//
//   return (
//       <div>안녕하세요, 제 이름은 {name}
//       <br/>
//         children 값은 '{children}' 이로세
//         제가 좋아하는 숫자는 {favoriteNumber} 입니다 낄낄
//       </div>
//   )
// }

class MyComponent extends Component {
  render() {
    const {name, favoriteNumber, children }= this.props;



    return(
        <div>
          안녕하세요, 제 이름은 {name} 입니다.
          <br/>
          children 값은 {children} 입니다.
          <br/>
          제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    )
  }
}


  MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber :  PropTypes.number.isRequired
  };
  // checkPropTypes(
  //     {name: PropTypes.string},
  //     {name : 3},
  //     'prop',
  //     'MyComponent'
  // )

export default MyComponent