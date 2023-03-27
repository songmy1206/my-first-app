import React, { Component } from 'react'

export default class ClassState extends Component {
  // 구버전
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     teacher : "이효석",
  //   }
  // }

  // 신버전
  state = {
    student:"송민영",
  }

  render() {
    const { student } = this.state
    return (
      <div>
        <h1>{student}</h1>
        <button onClick={()=>this.setState({student:'smy'})}>영어로</button>
      </div>
    )
  }
}
