import React from "react";
import "./main.css";

import Modal from "../modal/modal";
import Input from "../input/input";
import Comment from "../comment/comment";
import getNextValue from "../../helpers/getNextValue";
import getArrayItem from "../../helpers/getArrayItem";

type AppProps = {
  data: any;
};

export default class MainComponent extends React.Component {
  constructor(props: any) {
    super(props);

    const { data } = this.props;
    const { comments } = data;
    this.state = {
      showModal: false,
      nextId: 5,
      comments: comments,
    };
  }

  createContentClickHandler = (event: any) => {
    console.log(`Create Content`);
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

  contentInputHandler = (event: any) => {
    console.log(event.target.value);
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
    const { showModal, comments } = this.state;

    const commentElements: any[] = [];
    comments.forEach((comment, index) => {
      commentElements.push(
        <Comment
          key={`c${index}`}
          currentUser={currentUser}
          object={comment}
          increaseScoreClickHandler={this.increaseScoreClickHandler}
          decreaseScoreClickHandler={this.decreaseScoreClickHandler}
          toggleDeleteClickHandler={this.toggleDeleteClickHandler}
          updateContentClickHandler={this.updateContentClickHandler}
          createContentClickHandler={this.createContentClickHandler}
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
          avatar={currentUser.username}
          createContentClickHandler={this.createContentClickHandler}
        />
      </main>
    );
  };
}
