import React from "react";
import "./input.css";

import Avatar from "../avatar/avatar";
import Button from "../button/button";
import removeUsername from "../../helpers/removeUsename";

type AppProps = {
  isSend: boolean;
  avatar: string;
  username: string;
  createContentClickHandler: Function;
};

export default class Input extends React.Component {
  constructor(props: any) {
    super(props);

    const { username } = this.props;

    this.state = {
      content: `@${username} `,
    };
  }

  contentInputHandler = (event: any) => {
    const { isSend, username } = this.props;
    const value = removeUsername(event.target.value);
    this.setState({
      content: isSend ? event.target.value : `@${username} ${value}`,
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
