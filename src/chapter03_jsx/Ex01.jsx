import React, {Component} from "react";
import '../chapter02_jsx/Ex02.css'

class Ex01 extends Component {
  render() {
    const name = "react"
    return (
        <div className={"react"}>이건 클래스로 만든 {name} Component</div>
    )
  }
}
export default Ex01