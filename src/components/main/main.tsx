import React from "react";
import "./main.css";

import Modal from "../modal/modal";
import Input from "../input/input";
import Comment from "../comment/comment";
import createComment from "../../helpers/createComment";
import createReply from "../../helpers/createReply";
import getArrayItem from "../../helpers/getArrayItem";
import removeUsername from "../../helpers/removeUsename";

type AppProps = {
  data: any;
};

export default class Main extends React.Component {
  constructor(props: any) {
    super(props);

    const { data } = this.props;
    const { comments } = data;
    this.state = {
      showModal: false,
      nextId: 5,
      comments: comments,
      content: ``,
      replyingTo: ``,
    };
  }

  createContentClickHandler = (commentId: Number = 0) => {
    const { data } = this.props;
    const { currentUser } = data;
    const defaultCreatedAt = `just now`;
    const defaultScore = 0;

    let { nextId, comments, content, replyingTo } = this.state;
    let object: object = createComment(
      nextId,
      content,
      defaultCreatedAt,
      defaultScore,
      currentUser,
      []
    );

    if (commentId == 0) {
      comments.push(object);
    } else {
      content = removeUsername(content);
      object = createReply(
        nextId,
        content,
        defaultCreatedAt,
        defaultScore,
        replyingTo,
        currentUser
      );
      const comment: object = getArrayItem(comments, `id`, commentId);
      comment.replies.push(object);
    }

    nextId++;
    content = ``;
    this.setState({
      nextId,
      comments,
      content,
    });
  };

  updateReplyingTo = (replyingTo: string) => {
    this.setState({ replyingTo });
  };

  toggleDeleteClickHandler = (event: any) => {
    this.setState({ showModal: true });
  };

  updateContentClickHandler = (event: any) => {
    console.log(`Update Content`);
  };

  increaseScoreClickHandler = (event: any) => {
    console.log(`Increase Score`);
  };

  decreaseScoreClickHandler = (event: any) => {
    console.log(`Decrease Score`);
  };

  contentInputHandler = (content: string) => {
    this.setState({ content });
  };

  modalCancelClickHandler = (event: any) => {
    this.setState({ showModal: false });
  };

  modalYesClickHandler = (event: any) => {
    console.log(`Confirm Delete Comment`);
  };

  render = () => {
    const { data } = this.props;
    const { currentUser } = data;
    const { showModal, comments, content, replyingTo } = this.state;

    const commentElements: any[] = [];
    comments.forEach((comment, index) => {
      commentElements.push(
        <Comment
          key={`c${index}`}
          currentUser={currentUser}
          object={comment}
          content={content}
          replyingTo={replyingTo}
          increaseScoreClickHandler={this.increaseScoreClickHandler}
          decreaseScoreClickHandler={this.decreaseScoreClickHandler}
          toggleDeleteClickHandler={this.toggleDeleteClickHandler}
          updateContentClickHandler={this.updateContentClickHandler}
          createContentClickHandler={this.createContentClickHandler}
          contentInputHandler={this.contentInputHandler}
          updateReplyingTo={this.updateReplyingTo}
        />
      );
    });

    return (
      <main className="main-grid | container">
        <Modal
          showModal={showModal}
          modalCancelClickHandler={this.modalCancelClickHandler}
          modalYesClickHandler={this.modalYesClickHandler}
        />
        <div className="comments-flex">{commentElements}</div>
        <Input
          isSend={true}
          currentUser={currentUser}
          objectId={0}
          content={content}
          contentInputHandler={this.contentInputHandler}
          createContentClickHandler={this.createContentClickHandler}
        />
      </main>
    );
  };
}
