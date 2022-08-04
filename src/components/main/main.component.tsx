import React from "react";
import AmyrobsonAvatar from "../../avatars/amyrobson.avatar";
import JuliusomoAvatar from "../../avatars/juliusomo.avatar";
import MaxblagunAvatar from "../../avatars/maxblagun.avatar";
import RamsesmironAvatar from "../../avatars/ramsesmiron.avatar";
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
        <div className="comment-flex">Comments</div>
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
