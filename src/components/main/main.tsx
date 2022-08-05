import React from "react";
import "./main.css";

import DeleteIcon from "../../icons/delete.icon";
import EditIcon from "../../icons/edit.icon";
import ReplyIcon from "../../icons/reply.icon";
import Button from "../button/button";
import Counter from "../counter/counter";
import Modal from "../modal/modal";
import Input from "../input/input";
import Info from "../info/info";
import Buttons from "../buttons/buttons";
import Content from "../content/content";

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
      comments: comments,
    };
  }

  createContentClickHandler = (event: any) => {
    console.log(`Create Content`);
  };

  toggleReplyClickHandler = (event: any) => {
    console.log(`Toggle Reply Input`);
  };

  toggleDeleteClickHandler = (event: any) => {
    console.log(`Toggle Delete Modal`);
  };

  toggleEditClickHandler = (event: any) => {
    console.log(`Toggle Edit Content`);
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

  modalCancelClickHandler = (event: any) => {
    console.log(`Cancel Delete Comment`);
  };

  modalYesClickHandler = (event: any) => {
    console.log(`Confirm Delete Comment`);
  };

  contentInputHandler = (event: any) => {
    console.log(event.target.value);
  };

  render = () => {
    const { data } = this.props;
    const { currentUser } = data;
    const { showModal, comments, commentId, comment } = this.state;

    return (
      <main className="main-grid | container">
        <Modal
          showModal={showModal}
          modalCancelClickHandler={this.modalCancelClickHandler}
          modalYesClickHandler={this.modalYesClickHandler}
        />
        <div className="comments-flex">
          <div className="comment-flex">
            <Content
              score="12"
              username="amyrobson"
              createdAt="1 month ago"
              text="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
              increaseScoreClickHandler={this.increaseScoreClickHandler}
              decreaseScoreClickHandler={this.decreaseScoreClickHandler}
              toggleReplyClickHandler={this.toggleReplyClickHandler}
              toggleDeleteClickHandler={this.toggleDeleteClickHandler}
              toggleEditClickHandler={this.toggleEditClickHandler}
              updateContentClickHandler={this.updateContentClickHandler}
            />
            <Input
              avatar={currentUser.username}
              username="amyrobson"
              createContentClickHandler={this.createContentClickHandler}
            />
            <div className="replies-flex">
              <div className="comment-flex">
                <Content
                  isCurrentUser={true}
                  isReply={true}
                  score="12"
                  username="juliusomo"
                  createdAt="1 month ago"
                  text="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
                  increaseScoreClickHandler={this.increaseScoreClickHandler}
                  decreaseScoreClickHandler={this.decreaseScoreClickHandler}
                  toggleReplyClickHandler={this.toggleReplyClickHandler}
                  toggleDeleteClickHandler={this.toggleDeleteClickHandler}
                  toggleEditClickHandler={this.toggleEditClickHandler}
                  updateContentClickHandler={this.updateContentClickHandler}
                />
                <Input
                  isSend={false}
                  avatar={currentUser.username}
                  username="juliusomo"
                  createContentClickHandler={this.createContentClickHandler}
                />
              </div>
              <div className="comment-flex">
                <Content
                  isCurrentUser={true}
                  isReply={true}
                  score="12"
                  username="juliusomo"
                  createdAt="1 month ago"
                  text="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
                  increaseScoreClickHandler={this.increaseScoreClickHandler}
                  decreaseScoreClickHandler={this.decreaseScoreClickHandler}
                  toggleReplyClickHandler={this.toggleReplyClickHandler}
                  toggleDeleteClickHandler={this.toggleDeleteClickHandler}
                  toggleEditClickHandler={this.toggleEditClickHandler}
                  updateContentClickHandler={this.updateContentClickHandler}
                />
              </div>
              <div className="comment-flex">
                <Content
                  isEditMode={true}
                  isCurrentUser={true}
                  isReply={true}
                  score="12"
                  username="juliusomo"
                  createdAt="1 month ago"
                  text="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
                  increaseScoreClickHandler={this.increaseScoreClickHandler}
                  decreaseScoreClickHandler={this.decreaseScoreClickHandler}
                  toggleReplyClickHandler={this.toggleReplyClickHandler}
                  toggleDeleteClickHandler={this.toggleDeleteClickHandler}
                  toggleEditClickHandler={this.toggleEditClickHandler}
                  updateContentClickHandler={this.updateContentClickHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <Input
          isSend={true}
          avatar={currentUser.username}
          createContentClickHandler={this.createContentClickHandler}
        />
      </main>
    );
  };
}
