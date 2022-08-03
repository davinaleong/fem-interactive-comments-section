import React from "react";
import "./counter-input.css";

import MinusIcon from "../../icons/minus.icon";
import PlusIcon from "../../icons/plus.icon";
import ButtonComponent from "../button/button.component";

type AppProps = {
  score: any;
};

class CounterInputComponent extends React.Component {
  constructor(props: any) {
    super(props);

    const { score } = this.props;

    this.state = {
      score: score,
    };
  }

  scoreDecreaseHandler = (e) => {
    console.log(`Decrease Score`);
  };

  scoreIncreaseHandler = (e) => {
    console.log(`Increase Score`);
  };

  render = () => {
    const { score } = this.state;
    return (
      <div className="counter-field">
        <ButtonComponent
          type="btn-counter"
          ariaLabel="Decrease Score"
          clickHandler={this.scoreDecreaseHandler}
        >
          <MinusIcon />
        </ButtonComponent>
        <div className="counter-score">12</div>
        <ButtonComponent
          type="btn-counter"
          ariaLabel="Decrease Score"
          clickHandler={this.scoreIncreaseHandler}
        >
          <PlusIcon />
        </ButtonComponent>
      </div>
    );
  };
}

export default CounterInputComponent;
