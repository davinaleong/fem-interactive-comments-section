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
import "./main.css";

type AppProps = {
  data: any;
};

class MainComponent extends React.Component {
  constructor(props: any) {
    super(props);

    const { data } = this.props;
    const { comments } = data;
    this.state = {
      comments: comments,
    };
  }

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

  render = () => {
    const { data } = this.props;
    const { currentUser } = data;
    const { comments, commentId, comment } = this.state;

    return (
      <main className="main-grid | container">
        <div className="comments-flex">
          <div className="comment-flex">
            <div className="content-grid">
              <div className="counter-cell">
                <div className="counter-flex">
                  <button className="btn btn-icon" type="button">
                    <PlusIcon />
                  </button>
                  <div className="counter-label">12</div>
                  <button className="btn btn-icon" type="button">
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
                <button className="btn btn-link btn-link-primary" type="button">
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
                <button className="btn btn-primary" type="button">
                  Update
                </button>
              </div>
            </div>
            <div className="input-grid">
              {this.renderAvatar(currentUser.username)}
              <textarea className="form-field" name="text" rows="4"></textarea>
              <div className="input-cell">
                <button className="btn btn-primary" type="button">
                  Reply
                </button>
              </div>
            </div>
            <div className="replies-flex">
              <div className="comment-flex">
                <div className="content-grid">
                  <div className="counter-cell">
                    <div className="counter-flex">
                      <button className="btn btn-icon" type="button">
                        <PlusIcon />
                      </button>
                      <div className="counter-label">12</div>
                      <button className="btn btn-icon" type="button">
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
                    <button className="btn btn-primary" type="button">
                      Update
                    </button>
                  </div>
                </div>
                <div className="input-grid">
                  {this.renderAvatar(currentUser.username)}
                  <textarea className="form-field" name="text" rows="4">
                    @juliusomo
                  </textarea>
                  <div className="input-cell">
                    <button className="btn btn-primary" type="button">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              <div className="comment-flex">
                <div className="content-grid">
                  <div className="counter-cell">
                    <div className="counter-flex">
                      <button className="btn btn-icon" type="button">
                        <PlusIcon />
                      </button>
                      <div className="counter-label">12</div>
                      <button className="btn btn-icon" type="button">
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
                    >
                      <DeleteIcon /> Delete
                    </button>
                    <button
                      className="btn btn-link btn-link-primary"
                      type="button"
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
                    <button className="btn btn-primary" type="button">
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div className="comment-flex">
                <div className="content-grid" data-edit>
                  <div className="counter-cell">
                    <div className="counter-flex">
                      <button className="btn btn-icon" type="button">
                        <PlusIcon />
                      </button>
                      <div className="counter-label">12</div>
                      <button className="btn btn-icon" type="button">
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
                    >
                      <DeleteIcon /> Delete
                    </button>
                    <button
                      className="btn btn-link btn-link-primary"
                      type="button"
                    >
                      <EditIcon /> Edit
                    </button>
                  </div>
                  <div className="content-cell">
                    <textarea rows="4" className="form-field">
                      @amyrobson Impressive! Though it seems the drag feature
                      could be improved. But overall it looks incredible. You've
                      nailed the design and the responsiveness at various
                      breakpoints works really well.
                    </textarea>
                  </div>
                  <div className="update-cell">
                    <button className="btn btn-primary" type="button">
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
            <button className="btn btn-primary" type="button">
              Send
            </button>
          </div>
        </div>
      </main>
    );
  };
}

export default MainComponent;
