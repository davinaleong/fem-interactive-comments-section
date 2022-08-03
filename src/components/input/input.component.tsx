import React from "react";
import "./input.css";
import CurrentUserAvatar from "./../../assets/images/avatars/image-juliusomo.png";

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

  commentsHandler = (e) => {
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
          <img
            src={CurrentUserAvatar}
            alt="Current User Avatar"
            className="image-avatar"
          />
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
          <button
            className="button"
            type="button"
            onClick={this.commentsHandler}
          >
            Button
          </button>
        </div>
      </div>
    );
  };
}

export default InputComponent;
