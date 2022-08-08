import React from "react";
import "./counter.css";

import Button from "../button/button";
import PlusIcon from "../../icons/plus.icon";
import MinusIcon from "../../icons/minus.icon";

type AppProps = {
  score: Number;
  object: Object;
  parent: Object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
};

export default class Counter extends React.Component {
  constructor(props: any) {
    super(props);
  }

  increaseScoreClickHandler = (event: any) => {
    const { object, parent, increaseScoreClickHandler } = this.props;
    increaseScoreClickHandler(object.id, parent ? parent.id : 0);
  };

  decreaseScoreClickHandler = (event: any) => {
    const { object, parent, decreaseScoreClickHandler } = this.props;
    decreaseScoreClickHandler(object.id, parent ? parent.id : 0);
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
