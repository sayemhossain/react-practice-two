import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { date, locale } = this.state;

    let button;
    if (locale === "bn-BD") {
      button = (
        <Button change={this.handleClick} locale="en-US">
          Click here
        </Button>
      );
    } else {
      button = (
        <Button change={this.handleClick} locale="bn-BD">
          Click here
        </Button>
      );
    }
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Time:
            {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        {button}
      </div>
    );
  }
}
export default Clock;
