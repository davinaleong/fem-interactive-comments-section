import React from "react";
import "./content.css";

import Counter from "../counter/counter";
import Info from "../info/info";
import Buttons from "../buttons/buttons";
import Button from "../button/button";

import removeUsername from "../../helpers/removeUsename";
import FormField from "../form-field/form-field";

type AppProps = {
  isEditMode: boolean;
  isCurrentUser: boolean;
  isReply: boolean;
  score: Number;
  username: string;
  createdAt: string;
  text: string;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleReplyClickHandler: Function;
  toggleDeleteClickHandler: Function;
  toggleEditClickHandler: Function;
  updateContentClickHandler: Function;
};

export default class Content extends React.Component {
  constructor(props: any) {
    super(props);

    const { isReply, username, text } = this.props;

    this.state = {
      content: isReply ? `@${username} ${text}` : `${text}`,
    };
  }

  contentInputHandler = (event: any) => {
    const { isReply, username } = this.props;
    const value = removeUsername(event.target.value);
    this.setState({
      content: isReply ? `@${username} ${value}` : value,
    });
  };

  render = () => {
    const {
      isEditMode,
      isCurrentUser,
      isReply,
      score,
      username,
      createdAt,
      text,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleReplyClickHandler,
      toggleDeleteClickHandler,
      toggleEditClickHandler,
      updateContentClickHandler,
    } = this.props;

    const { content } = this.state;

    let contentElement: any = isReply ? (
      <p>
        <mark>@{username}</mark> {text}
      </p>
    ) : (
      <p>{text}</p>
    );

    if (isEditMode) {
      contentElement = (
        <FormField value={content} inputHandler={this.contentInputHandler} />
      );
    }

    return (
      <div className="content-grid" data-edit={isEditMode}>
        <div className="counter-cell">
          <Counter
            score={score}
            increaseScoreClickHandler={increaseScoreClickHandler}
            decreaseScoreClickHandler={decreaseScoreClickHandler}
          />
        </div>
        <div className="info-cell">
          <Info
            isCurrentUser={isCurrentUser}
            username={username}
            createdAt={createdAt}
          />
        </div>
        <div className="buttons-cell">
          <Buttons
            isCurrentUser={isCurrentUser}
            toggleReplyClickHandler={toggleReplyClickHandler}
            toggleDeleteClickHandler={toggleDeleteClickHandler}
            toggleEditClickHandler={toggleEditClickHandler}
          />
        </div>
        <div className="content-cell">{contentElement}</div>
        <div className="update-cell">
          <Button type="btn-primary" clickHandler={updateContentClickHandler}>
            Update
          </Button>
        </div>
      </div>
    );
  };
}

// const Content = (props: any) => {
//   const {
//     isEditMode,
//     comment,
//     increaseScoreClickHandler,
//     decreaseScoreClickHandler,
//     toggleReplyClickHandler,
//     toggleDeleteClickHandler,
//     toggleEditClickHandler,
//     updateContentClickHandler,
//   } = props;
//   return (
//     <div className="content-grid" {isEditMode ? `data-edit` : ``}>
//       <div className="counter-cell">
//         <Counter
//           score="3"
//           increaseScoreClickHandler={increaseScoreClickHandler}
//           decreaseScoreClickHandler={decreaseScoreClickHandler}
//         />
//       </div>
//       <div className="info-cell">
//         <Info
//           isCurrentUser={true}
//           username="juliusomo"
//           createdAt="1 month ago"
//         />
//       </div>
//       <div className="buttons-cell">
//         <Buttons
//           toggleReplyClickHandler={toggleReplyClickHandler}
//           toggleDeleteClickHandler={toggleDeleteClickHandler}
//           toggleEditClickHandler={toggleEditClickHandler}
//         />
//       </div>
//       <div className="content-cell">
//         <p>
//           Impressive! Though it seems the drag feature could be improved. But
//           overall it looks incredible. You've nailed the design and the
//           responsiveness at various breakpoints works really well.
//         </p>
//       </div>
//       <div className="update-cell">
//         <Button type="btn-primary" clickHandler={updateContentClickHandler}>
//           Update
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Content;
