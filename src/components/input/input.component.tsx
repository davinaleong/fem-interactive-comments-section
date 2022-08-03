import React from "react";
import "./input.css";
import CurrentUserAvatar from "./../../assets/images/avatars/image-juliusomo.webp";
import AvatarComponent from "../avatar/avatar.component";
import ButtonComponent from "../button/button.component";

type AppProps = {
  commentsHandler: any;
};

class InputComponent extends React.Component {
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
    const { comment } = this.state;
    return (
      <div className="input-grid">
        <div className="image-column image-grid">
          <AvatarComponent src={CurrentUserAvatar} alt="Current User Avatar" />
        </div>
        <textarea
          name="input"
          id="input"
          rows="5"
          placeholder="Add a comment..."
          value={comment}
          onChange={this.commentHandler}
        ></textarea>
        <div className="button-column button-grid">
          <ButtonComponent label="Send" type="btn-primary" clickHandler={this.sendHandler} />
        </div>
      </div>
    );
  };
}

export default InputComponent;
