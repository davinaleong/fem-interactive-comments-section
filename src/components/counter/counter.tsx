import React from "react";
import "./counter.css";

import Button from "../button/button";
import PlusIcon from "../../icons/plus.icon";
import MinusIcon from "../../icons/minus.icon";
import IComment from "../../interfaces/comment";
import IReply from "../../interfaces/reply";

interface AppProps {
  score: number;
  comment: IComment;
  reply: IReply;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
};

export default class Counter extends React.Component<AppProps, {}> {
  constructor(props: any) {
    super(props);
  }

  increaseScoreClickHandler = (event: any) => {
    const { comment, reply, increaseScoreClickHandler } = this.props;

    let id: number = comment.id
    let parentId: number = 0
    if (reply) {
      id = reply.id
      parentId = comment.id
    }

    increaseScoreClickHandler(id, parentId);
  };

  decreaseScoreClickHandler = (event: any) => {
    const { comment, reply, decreaseScoreClickHandler } = this.props;

    let id: number = comment.id
    let parentId: number = 0
    if (reply) {
      id = reply.id
      parentId = comment.id
    }

    decreaseScoreClickHandler(id, parentId);
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
