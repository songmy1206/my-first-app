// import joke from "../images/jokeBear_computer.jpg";

// function ImgComponent() {
//   return <img src={joke} alt="img" />;
// }
// export default ImgComponent;

import { Component } from "react";
import joke from "../images/jokeBear_computer.jpg";

class ImgComponent extends Component {
  render() {
    return <img src={joke} alt="img" />;
  }
}
export default ImgComponent;
