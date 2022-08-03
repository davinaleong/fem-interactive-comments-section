import React from "react";
import "./button.css";

type AppProps = {
  label: string;
  type: string;
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
    const { label, type } = this.props;
    return (
      <button
        className={`btn ${type}`}
        type="button"
        onClick={this.clickHandler}
      >
        {label}
      </button>
    );
  }
}

export default ButtonComponent;
