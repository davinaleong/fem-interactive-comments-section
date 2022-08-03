import React from "react";
import "./button.css";

type AppProps = {
  type: string;
  ariaLabel: string;
  children: any;
  clickHandler: any;
};

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler = (e) => {
    this.props.clickHandler(e);
  };

  render() {
    const { children, type, ariaLabel } = this.props;

    return (
      <button
        className={`btn ${type}`}
        type="button"
        aria-label={ariaLabel}
        onClick={this.clickHandler}
      >
        {children}
      </button>
    );
  }
}

export default ButtonComponent;
