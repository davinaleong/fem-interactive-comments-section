import React from "react";
import "./button.css";

type AppProps = {
  children;
  type: string;
  clickHandler: Function;
};

export default class Button extends React.Component {
  constructor(props: any) {
    super(props);
  }

  clickHandler = (event: any) => {
    this.props.clickHandler(event);
  };

  render = () => {
    const { children, type } = this.props;

    return (
      <button
        className={`btn ${type}`}
        type="button"
        onClick={this.clickHandler}
      >
        {children}
      </button>
    );
  };
}
