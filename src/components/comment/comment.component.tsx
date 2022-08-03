import React from "react";
import "./comment.css";

import IconMinus from "./../../assets/images/icon-minus.svg";
import IconPlus from "./../../assets/images/icon-plus.svg";

type AppProps = {
  comment: Object;
  commentHandler: any;
};

class CommentComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      comment: this.props.comment,
    };
  }

  render = () => {
    return (
      <div className="comment-grid">
        <div className="comment-counter-cell">
          <div className="counter-field">
            <button
              className="btn btn-counter"
              type="button"
              aria-label="Reduce Score"
            >
              <img src={IconMinus} alt="" />
            </button>
            <div className="counter-score">12</div>
            <button
              className="btn btn-counter"
              type="button"
              aria-label="Increase Score"
            >
              <img src={IconPlus} alt="" />
            </button>
          </div>
        </div>
        <div className="comment-user-cell">User Info</div>
        <div className="comment-button-cell">Buttons</div>
        <div className="comment-content-cell">Content</div>
      </div>
    );
  };
}

export default CommentComponent;
