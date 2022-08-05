import React from "react";
import "./main.css";

import DeleteIcon from "../../icons/delete.icon";
import EditIcon from "../../icons/edit.icon";
import ReplyIcon from "../../icons/reply.icon";
import Avatar from "../avatar/avatar";
import Button from "../button/button";
import Counter from "../counter/counter";
import Modal from "../modal/modal";
import Input from "../input/input";
import Badge from "../badge/badge";
import Username from "../username/username";

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

  toggleEditClickHandler = (event: any) => {
    console.log(`Toggle Edit Content`);
  };

  toggleDeleteClickHandler = (event: any) => {
    console.log(`Toggle Delete Modal`);
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
            <div className="content-grid">
              <div className="counter-cell">
                <Counter
                  score="3"
                  increaseScoreClickHandler={this.increaseScoreClickHandler}
                  decreaseScoreClickHandler={this.decreaseScoreClickHandler}
                />
              </div>
              <div className="info-cell">
                <div className="info-flex">
                  <Avatar username="amyrobson" />
                  <Username>amyrobson</Username>
                  <div className="info-created-at">1 month ago</div>
                </div>
              </div>
              <div className="buttons-cell buttons-flex">
                <Button
                  type="btn-link btn-link-primary"
                  clickHandler={this.toggleReplyClickHandler}
                >
                  <ReplyIcon /> Reply
                </Button>
              </div>
              <div className="content-cell">
                <p>
                  Impressive! Though it seems the drag feature could be
                  improved. But overall it looks incredible. You've nailed the
                  design and the responsiveness at various breakpoints works
                  really well.
                </p>
              </div>
              <div className="update-cell">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={this.updateContentClickHandler}
                >
                  Update
                </button>
              </div>
            </div>
            <div className="input-grid">
              <Avatar username={currentUser.username} />
              <textarea
                className="form-field"
                name="text"
                rows="4"
                onInput={this.contentInputHandler}
              ></textarea>
              <div className="input-cell">
                <Button
                  type="btn-primary"
                  clickHandler={this.createContentClickHandler}
                >
                  Reply
                </Button>
              </div>
            </div>
            <div className="replies-flex">
              <div className="comment-flex">
                <div className="content-grid">
                  <div className="counter-cell">
                    <Counter
                      score="3"
                      increaseScoreClickHandler={this.increaseScoreClickHandler}
                      decreaseScoreClickHandler={this.decreaseScoreClickHandler}
                    />
                  </div>
                  <div className="info-cell">
                    <div className="info-flex">
                      <Avatar username="juliusomo" />
                      <Username>juliusomo</Username>
                      <Badge type="badge-primary">You</Badge>
                      <div className="info-created-at">1 month ago</div>
                    </div>
                  </div>
                  <div className="buttons-cell buttons-flex">
                    <Button
                      type="btn-link btn-link-primary"
                      clickHandler={this.toggleReplyClickHandler}
                    >
                      <ReplyIcon /> Reply
                    </Button>
                  </div>
                  <div className="content-cell">
                    <p>
                      <mark>@amyrobson</mark> Impressive! Though it seems the
                      drag feature could be improved. But overall it looks
                      incredible. You've nailed the design and the
                      responsiveness at various breakpoints works really well.
                    </p>
                  </div>
                  <div className="update-cell">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={this.updateContentClickHandler}
                    >
                      Update
                    </button>
                  </div>
                </div>
                <Input
                  isSend={false}
                  avatar={currentUser.username}
                  username="juliusomo"
                  createContentClickHandler={this.createContentClickHandler}
                />
              </div>
              <div className="comment-flex">
                <div className="content-grid">
                  <div className="counter-cell">
                    <Counter
                      score="3"
                      increaseScoreClickHandler={this.increaseScoreClickHandler}
                      decreaseScoreClickHandler={this.decreaseScoreClickHandler}
                    />
                  </div>
                  <div className="info-cell">
                    <div className="info-flex">
                      <Avatar username="juliusomo" />
                      <Username>juliusomo</Username>
                      <Badge type="badge-primary">You</Badge>
                      <div className="info-created-at">1 month ago</div>
                    </div>
                  </div>
                  <div className="buttons-cell buttons-flex">
                    <Button
                      type="btn-link btn-link-danger"
                      clickHandler={this.toggleDeleteClickHandler}
                    >
                      <DeleteIcon /> Delete
                    </Button>
                    <Button
                      type="btn-link btn-link-primary"
                      clickHandler={this.toggleEditClickHandler}
                    >
                      <EditIcon /> Edit
                    </Button>
                  </div>
                  <div className="content-cell">
                    <p>
                      <mark>@amyrobson</mark> Impressive! Though it seems the
                      drag feature could be improved. But overall it looks
                      incredible. You've nailed the design and the
                      responsiveness at various breakpoints works really well.
                    </p>
                  </div>
                  <div className="update-cell">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={this.updateContentClickHandler}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div className="comment-flex">
                <div className="content-grid" data-edit>
                  <div className="counter-cell">
                    <Counter
                      score="3"
                      increaseScoreClickHandler={this.increaseScoreClickHandler}
                      decreaseScoreClickHandler={this.decreaseScoreClickHandler}
                    />
                  </div>
                  <div className="info-cell">
                    <div className="info-flex">
                      <Avatar username="juliusomo" />
                      <Username>juliusomo</Username>
                      <Badge type="badge-primary">You</Badge>
                      <div className="info-created-at">1 month ago</div>
                    </div>
                  </div>
                  <div className="buttons-cell buttons-flex">
                    <Button
                      type="btn-link btn-link-danger"
                      clickHandler={this.toggleDeleteClickHandler}
                    >
                      <DeleteIcon /> Delete
                    </Button>
                    <Button
                      type="btn-link btn-link-primary"
                      clickHandler={this.toggleEditClickHandler}
                    >
                      <EditIcon /> Edit
                    </Button>
                  </div>
                  <div className="content-cell">
                    <textarea
                      rows="4"
                      className="form-field"
                      value="@amyrobson Impressive! Though it seems the drag feature
                      could be improved. But overall it looks incredible. You've
                      nailed the design and the responsiveness at various
                      breakpoints works really well."
                      onInput={this.contentInputHandler}
                    ></textarea>
                  </div>
                  <div className="update-cell">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={this.updateContentClickHandler}
                    >
                      Update
                    </button>
                  </div>
                </div>
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
