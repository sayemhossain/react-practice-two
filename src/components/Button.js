import React from "react";
class Button extends React.Component {
  // shouldComponentUpdate(nextProps) {
  //   const { change: currentChange } = this.props;
  //   const { change: nextChange } = nextProps;
  //   if (currentChange === nextChange) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    const { change, locale } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        {locale === "bn-BD" ? "change clock" : "ghori poriborton korun"}
      </button>
    );
  }
}
export default Button;
