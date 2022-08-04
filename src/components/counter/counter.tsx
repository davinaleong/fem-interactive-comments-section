import React from "react";
import "./counter.css";

import Button from "../button/button";
import PlusIcon from "../../icons/plus.icon";
import MinusIcon from "../../icons/minus.icon";

type AppProps = {
  score: Number;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
};

export default class Counter extends React.Component {
  constructor(props: any) {
    super(props);
  }

  increaseScoreClickHandler = (event: any) => {
    this.props.increaseScoreClickHandler(event);
  };

  decreaseScoreClickHandler = (event: any) => {
    this.props.decreaseScoreClickHandler(event);
  };

  render = () => {
    const { score } = this.props;

    return (
      <div className="counter-flex">
        <Button type="btn-icon" clickHandler={this.increaseScoreClickHandler}>
          <PlusIcon />
        </Button>
        <div className="counter-label">{score}</div>
        <Button type="btn-icon" clickHandler={this.decreaseScoreClickHandler}>
          <MinusIcon />
        </Button>
      </div>
    );
  };
}
