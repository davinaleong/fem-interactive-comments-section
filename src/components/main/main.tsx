import React from "react";
import "./main.css";

import Modal from "../modal/modal";
import Input from "../input/input";
import Comment from "../comment/comment";

const comment = {
  id: 2,
  content:
    "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
  createdAt: "2 weeks ago",
  score: 5,
  user: {
    image: {
      png: "images/avatars/image-maxblagun.png",
      webp: "images/avatars/image-maxblagun.webp",
    },
    username: "maxblagun",
  },
  replies: [
    {
      id: 3,
      content:
        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt: "1 week ago",
      score: 4,
      replyingTo: "maxblagun",
      user: {
        image: {
          png: "images/avatars/image-ramsesmiron.png",
          webp: "images/avatars/image-ramsesmiron.webp",
        },
        username: "ramsesmiron",
      },
    },
    {
      id: 4,
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: "2 days ago",
      score: 2,
      replyingTo: "ramsesmiron",
      user: {
        image: {
          png: "images/avatars/image-juliusomo.png",
          webp: "images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    },
  ],
};

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

  contentInputHandler = (event: any) => {
    console.log(event.target.value);
  };

  modalCancelClickHandler = (event: any) => {
    console.log(`Cancel Delete Comment`);
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
          object={comment}
          increaseScoreClickHandler={this.increaseScoreClickHandler}
          decreaseScoreClickHandler={this.decreaseScoreClickHandler}
          toggleDeleteClickHandler={this.toggleDeleteClickHandler}
          toggleEditClickHandler={this.toggleEditClickHandler}
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
