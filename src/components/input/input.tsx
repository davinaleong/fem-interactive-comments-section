import React from "react";
import "./input.css";

import Avatar from "../avatar/avatar";
import Button from "../button/button";

type AppProps = {
  isSend: boolean;
  avatar: string;
  username: string;
  createContentClickHandler: Function;
};

export default class Input extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      content: "",
    };
  }

  contentInputHandler = (event: any) => {
    const { isSend, username } = this.props;
    this.setState({
      content: isSend
        ? event.target.value
        : `@${username} ${event.target.value}`,
    });
  };

  createContentClickHandler = (event: any) => {
    this.props.createContentClickHandler(event);
  };

  render = () => {
    const { isSend, avatar } = this.props;
    const { content } = this.state;

    return (
      <div className="input-grid">
        <Avatar username={avatar} />
        <textarea
          className="form-field"
          name="text"
          rows="4"
          value={content}
          onInput={this.contentInputHandler}
        ></textarea>
        <div className="input-cell">
          <Button
            type="btn-primary"
            clickHandler={this.createContentClickHandler}
          >
            {isSend ? `Send` : `Reply`}
          </Button>
        </div>
      </div>
    );
  };
}
