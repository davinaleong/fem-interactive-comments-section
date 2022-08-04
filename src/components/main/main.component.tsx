import React from "react";
import "./main.css";

import DeleteIcon from "../../icons/delete.icon";
import EditIcon from "../../icons/edit.icon";
import ReplyIcon from "../../icons/reply.icon";
import Avatar from "../avatar/avatar";
import Button from "../button/button";
import Counter from "../counter/counter";

type AppProps = {
  data: any;
};

export default class MainComponent extends React.Component {
  constructor(props: any) {
    super(props);

    const { data } = this.props;
    const { comments } = data;
    this.state = {
      showDeleteModal: false,
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

  renderModal = (showDeleteModal: boolean) => {
    if (!showDeleteModal) {
      return;
    }

    return (
      <div className="modal">
        <div className="modal-grid">
          <div className="modal-header">Delete comment</div>
          <div className="modal-content">
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
          </div>
          <button
            className="btn btn-neutral"
            type="button"
            onClick={this.modalCancelClickHandler}
          >
            No, Cancel
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={this.modalYesClickHandler}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    );
  };

  render = () => {
    const { data } = this.props;
    const { currentUser } = data;
    const { showDeleteModal, comments, commentId, comment } = this.state;

    return (
      <main className="main-grid | container">
        {this.renderModal(showDeleteModal)}
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
                  <div className="info-username">amyrobson</div>
                  <div className="badge badge-primary">You</div>
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
                      <div className="info-username">juliusomo</div>
                      <div className="badge badge-primary">You</div>
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
                <div className="input-grid">
                  <Avatar username={currentUser.username} />
                  <textarea
                    className="form-field"
                    name="text"
                    rows="4"
                    value="@juliusomo"
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
                      <div className="info-username">juliusomo</div>
                      <div className="badge badge-primary">You</div>
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
                      <div className="info-username">juliusomo</div>
                      <div className="badge badge-primary">You</div>
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
        <div className="input-grid">
          <Avatar username={currentUser.username} />
          <textarea className="form-field" name="text" rows="4"></textarea>
          <div className="input-cell">
            <Button
              type="btn-primary"
              clickHandler={this.createContentClickHandler}
            >
              Send
            </Button>
          </div>
        </div>
      </main>
    );
  };
}
