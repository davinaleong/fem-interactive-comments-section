import React from "react";
import "./comment-input.css";

import CurrentUserAvatar from "./../../assets/images/avatars/image-juliusomo.webp";
import AvatarComponent from "../avatar/avatar.component";
import ButtonComponent from "../button/button.component";
import FormFieldComponent from "../form-field/form-field.component";

type AppProps = {
  commentsHandler: any;
};

class CommentInputComponent extends React.Component {
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
            Send
          </ButtonComponent>
        </div>
      </div>
    );
  };
}

export default CommentInputComponent;
