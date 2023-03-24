import { Component } from "react";

class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }

  render() {
    return <h1>Hello, {this.cas ? "O" : "X"} world</h1>;
  }
}
export default MainHeader;

// function MainHeader() {
//   // js 영역
//   const pororo = "뽀로로";
//   const friend = "친구들";
//   const arr = [1, 2, 3, 4, 5];
//   const cas = true;

//   return <h1>Hello, {cas ? "O" : "X"} world</h1>;
//   // jsx
// }
