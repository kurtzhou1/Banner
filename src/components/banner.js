import React, { Component } from "react";
import "./banner.scss";
import banner from "./imgs/1200x380.png";

class Banner extends Component {
  state = {
    text: true,
    bannerClass: null
  };

  toggle = () => {
    const { bannerClass } = this.state;
    if (bannerClass === "opened") {
      this.close();
    } else {
      this.open();
    }
  };

  open = () => {
    let T1 = null;
    const { transition } = this.props;
    if (transition) {
      T1 = 2000;
    } else {
      T1 = 0;
    }
    this.setState(
      {
        bannerClass: "opening",
        text: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            bannerClass: "opened"
          });
        }, T1);
        console.log(T1);
      }
    );
  };

  close = () => {
    let T2 = null;
    const { transition } = this.props;
    if (transition) {
      T2 = 2000;
    } else {
      T2 = 0;
    }
    this.setState(
      {
        bannerClass: "closing",
        text: false
      },
      () => {
        setTimeout(() => {
          this.setState({
            bannerClass: "closed"
          });
        }, T2);
        console.log(T2);
      }
    );
  };

  componentDidMount() {
    this.autoToggle();
    if (this.props.openAtStart) {
      this.setState({
        bannerClass: "opened",
        text: true
      });
    } else {
      this.setState({
        bannerClass: "closed",
        text: false
      });
    }
  }

  autoToggle = () => {
    const tmpToggle = typeof this.props.autoToggle;
    console.log("tmpToggle", tmpToggle);
    console.log('openAtStart:::',this.props.openAtStart)
    if (tmpToggle === "boolean") {
      if (this.props.autoToggle) {
        if (this.props.openAtStart) {
          setTimeout(() => {
            this.close();
          }, 1000);
        } else {
          setTimeout(() => {
            this.open();
          }, 1000);
        }
      }
    } else {
      let second = this.props.autoToggle;
      if (this.props.openAtStart) {
        setTimeout(() => {
          this.close();
        }, second);
      } else {
        setTimeout(() => {
          this.open();
        }, second);
      }
    }
  };

  whenClickCallback = () => {
    console.log("whenClickCallback");
  };

  whenTransition = () => {
    if (this.props.transition) {
      let timesRun = 0;
      let interval = setInterval(() => {
        timesRun += 1;
        this.whenClickCallback();
        if (timesRun === 30) {
          clearInterval(interval);
        }
      }, 50);
    }
  };

  render() {
    const { bannerClass } = this.state;

    const transition = {
      transition: this.props.transition ? "all 2s" : "all 0s"
    };

    return (
      <div
        style={transition}
        className={`banner 
        ${bannerClass}
        `}
      >
        <button
          className="btn"
          onClick={() => {
            this.toggle();
            this.whenTransition();
          }}
        >
          {`${
            this.state.text
              ? this.props.button.closeText
              : this.props.button.openText
          }`}
        </button>
        <img className="img" src={banner} alt="輸入廣告促銷說明文字" />
      </div>
    );
  }
}
export default Banner;
