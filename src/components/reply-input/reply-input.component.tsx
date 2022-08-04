import React from "react";
import "./reply-input.css";

import AvatarComponent from "../avatar/avatar.component";
import ButtonComponent from "../button/button.component";
import FormFieldComponent from "../form-field/form-field.component";

type AppProps = {
  currentUser: any;
  commentsHandler: any;
};

class ReplyInputComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      comment: "",
    };
  }

  sendHandler = (e) => {
    console.log(`Submit button clicked`);
  };

  commentHandler = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  render = () => {
    const { currentUser } = this.props;
    const { comment } = this.state;
    return (
      <div className="input-grid">
        <div className="image-column image-grid">
          <AvatarComponent username={currentUser.username} />
        </div>
        <FormFieldComponent
          text={comment}
          changeHandler={this.commentHandler}
        />
        <div className="button-column button-grid">
          <ButtonComponent type="btn-primary" clickHandler={this.sendHandler}>
            Reply
          </ButtonComponent>
        </div>
      </div>
    );
  };
}

export default ReplyInputComponent;
