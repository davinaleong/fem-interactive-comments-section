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
      toDelete: {
        id: 0,
        parentId: 0,
      },
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

  toggleDeleteClickHandler = (toDelete: Object) => {
    this.setState({ showModal: true, toDelete });
  };

  updateContentClickHandler = (objectId: Number, parentId: Number = 0) => {
    let { comments, content } = this.state;
    content = removeUsername(content);
    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == objectId) {
          comments[i].content = content;
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == objectId) {
              comments[i].replies[j].content = content;
            }
          }
        }
      }
    }

    this.setState({ comments });
  };

  increaseScoreClickHandler = (objectId: Number, parentId: Number = 0) => {
    const { comments } = this.state;

    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == objectId) {
          comments[i].score++;
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == objectId) {
              comments[i].replies[j].score++;
            }
          }
        }
      }
    }

    this.setState({ comments });
  };

  decreaseScoreClickHandler = (objectId: Number, parentId: Number = 0) => {
    const { comments } = this.state;

    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == objectId) {
          comments[i].score--;
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == objectId) {
              comments[i].replies[j].score--;
            }
          }
        }
      }
    }

    this.setState({ comments });
  };

  contentInputHandler = (content: string) => {
    this.setState({ content });
  };

  modalCancelClickHandler = (event: any) => {
    this.setState({ showModal: false });
  };

  modalYesClickHandler = () => {
    let { comments, toDelete } = this.state;
    const { id, parentId } = toDelete;
    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == id) {
          comments.splice(i, 1);
          break;
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == id) {
              comments[i].replies.splice(j, 1);
              break;
            }
          }
          break;
        }
      }
    }

    toDelete = {
      id: 0,
      parentId: 0,
    };
    this.setState({ showModal: false, comments, toDelete });
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
