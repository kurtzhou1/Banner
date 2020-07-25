import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Banner from "./components/banner";
import Banner2 from './banner';
import { createRef } from "react";

class APP extends React.Component {

  constructor(props) {
    super(props);
    this.bannerRef = createRef();
  }

  render() {
    const props = {
      // 設定一開始是否為開或合
      openAtStart: true, // [boolean] true | false
      // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
      autoToggle: 5000,
      transition: true,
      // 當有transition時，要執行的callback 
      classs: {
        closed: "closed", // [string]
        closing: "closing", // [string]
        opened: "opened", // [string]
        opening: "opening" // [string]
      },
      button: {
        closeText: "收合", // [string]
        openText: "展開", // [string]
        class: "btn" // [string]
      },
    };
    return (
      <>
        {/* <Banner {...props} ref={this.bannerRef} /> */}
        <Banner2 {...props} ref={this.bannerRef} />
      </>
    );
  }
}

window.banner = ReactDOM.render(<APP />, document.getElementById("root"));