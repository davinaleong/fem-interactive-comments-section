import React from "react";
import AmyrobsonAvatar from "../../avatars/amyrobson.avatar";
import JuliusomoAvatar from "../../avatars/juliusomo.avatar";
import MaxblagunAvatar from "../../avatars/maxblagun.avatar";
import RamsesmironAvatar from "../../avatars/ramsesmiron.avatar";
import DeleteIcon from "../../icons/delete.icon";
import EditIcon from "../../icons/edit.icon";
import MinusIcon from "../../icons/minus.icon";
import PlusIcon from "../../icons/plus.icon";
import ReplyIcon from "../../icons/reply.icon";
import Button from "../button/button";
import "./main.css";

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

  renderAvatar = (username: string) => {
    let avatar = null;

    switch (username) {
      case `juliusomo`:
        avatar = <JuliusomoAvatar />;
        break;

      case `amyrobson`:
        avatar = <AmyrobsonAvatar />;
        break;

      case `maxblagun`:
        avatar = <MaxblagunAvatar />;
        break;

      case `ramsesmiron`:
        avatar = <RamsesmironAvatar />;
        break;
    }

    return avatar;
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
                <div className="counter-flex">
                  <button
                    className="btn btn-icon"
                    type="button"
                    onClick={this.increaseScoreClickHandler}
                  >
                    <PlusIcon />
                  </button>
                  <div className="counter-label">12</div>
                  <button
                    className="btn btn-icon"
                    type="button"
                    onClick={this.decreaseScoreClickHandler}
                  >
                    <MinusIcon />
                  </button>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-flex">
                  {this.renderAvatar(`amyrobson`)}
                  <div className="info-username">amyrobson</div>
                  <div className="badge badge-primary">You</div>
                  <div className="info-created-at">1 month ago</div>
                </div>
              </div>
              <div className="buttons-cell buttons-flex">
                <button
                  className="btn btn-link btn-link-primary"
                  type="button"
                  onClick={this.toggleReplyClickHandler}
                >
                  <ReplyIcon /> Reply
                </button>
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
              {this.renderAvatar(currentUser.username)}
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
                    <div className="counter-flex">
                      <button
                        className="btn btn-icon"
                        type="button"
                        onClick={this.increaseScoreClickHandler}
                      >
                        <PlusIcon />
                      </button>
                      <div className="counter-label">12</div>
                      <button
                        className="btn btn-icon"
                        type="button"
                        onClick={this.decreaseScoreClickHandler}
                      >
                        <MinusIcon />
                      </button>
                    </div>
                  </div>
                  <div className="info-cell">
                    <div className="info-flex">
                      {this.renderAvatar(`juliusomo`)}
                      <div className="info-username">juliusomo</div>
                      <div className="badge badge-primary">You</div>
                      <div className="info-created-at">1 month ago</div>
                    </div>
                  </div>
                  <div className="buttons-cell buttons-flex">
                    <button
                      className="btn btn-link btn-link-primary"
                      type="button"
                      onClick={this.toggleReplyClickHandler}
                    >
                      <ReplyIcon /> Reply
                    </button>
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
                  {this.renderAvatar(currentUser.username)}
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
                    <div className="counter-flex">
                      <button
                        className="btn btn-icon"
                        type="button"
                        onClick={this.increaseScoreClickHandler}
                      >
                        <PlusIcon />
                      </button>
                      <div className="counter-label">12</div>
                      <button
                        className="btn btn-icon"
                        type="button"
                        onClick={this.decreaseScoreClickHandler}
                      >
                        <MinusIcon />
                      </button>
                    </div>
                  </div>
                  <div className="info-cell">
                    <div className="info-flex">
                      {this.renderAvatar(`juliusomo`)}
                      <div className="info-username">juliusomo</div>
                      <div className="badge badge-primary">You</div>
                      <div className="info-created-at">1 month ago</div>
                    </div>
                  </div>
                  <div className="buttons-cell buttons-flex">
                    <button
                      className="btn btn-link btn-link-danger"
                      type="button"
                      onClick={this.toggleDeleteClickHandler}
                    >
                      <DeleteIcon /> Delete
                    </button>
                    <button
                      className="btn btn-link btn-link-primary"
                      type="button"
                      onClick={this.toggleEditClickHandler}
                    >
                      <EditIcon /> Edit
                    </button>
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
                  <div className="counter-flex">
                    <button
                      className="btn btn-icon"
                      type="button"
                      onClick={this.increaseScoreClickHandler}
                    >
                      <PlusIcon />
                    </button>
                    <div className="counter-label">12</div>
                    <button
                      className="btn btn-icon"
                      type="button"
                      onClick={this.decreaseScoreClickHandler}
                    >
                      <MinusIcon />
                    </button>
                  </div>
                  <div className="info-cell">
                    <div className="info-flex">
                      {this.renderAvatar(`juliusomo`)}
                      <div className="info-username">juliusomo</div>
                      <div className="badge badge-primary">You</div>
                      <div className="info-created-at">1 month ago</div>
                    </div>
                  </div>
                  <div className="buttons-cell buttons-flex">
                    <button
                      className="btn btn-link btn-link-danger"
                      type="button"
                      onClick={this.toggleDeleteClickHandler}
                    >
                      <DeleteIcon /> Delete
                    </button>
                    <button
                      className="btn btn-link btn-link-primary"
                      type="button"
                      onClick={this.toggleEditClickHandler}
                    >
                      <EditIcon /> Edit
                    </button>
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
          {this.renderAvatar(currentUser.username)}
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
