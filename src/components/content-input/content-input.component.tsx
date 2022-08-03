import React from "react";
import FormFieldComponent from "../form-field/form-field.component";
import "./content-input.css";

type AppProps = {
  username: string;
  content: string;
  edit: boolean;
  contentHandler: any;
};

class ContentInputComponent extends React.Component {
  constructor(props: any) {
    super(props);

    const { username, content } = this.props;

    this.state = {
      content: `${content}`,
      text: `@${username} ${content}`,
    };
  }

  contentHandler = (e) => {
    const { username } = this.props;
    const text: string = `${e.target.value}`;
    const content: string = `@${username} ${e.target.value}`;
    this.setState({
      content: content,
      text: text,
    });
  };

  render = () => {
    const { username, edit } = this.props;
    const { content, text } = this.state;

    const mention = username ? (
      <span className="text-mention">@{username}</span>
    ) : null;

    let component = (
      <p className="comment-content">
        {mention} {content}
      </p>
    );

    if (edit) {
      component = (
        <FormFieldComponent text={text} changeHandler={this.contentHandler} />
      );
    }

    return component;
  };
}

export default ContentInputComponent;
