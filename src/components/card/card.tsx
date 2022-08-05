import React from "react";
import "./card.css";

import Content from "../content/content";
import Input from "../input/input";

type AppProps = {
  object: object;
  increaseScoreClickHandler: Function;
  decreaseScoreClickHandler: Function;
  toggleDeleteClickHandler: Function;
  toggleEditClickHandler: Function;
  updateContentClickHandler: Function;
  createContentClickHandler: Function;
};

// const Card = (props: any) => {
//   const {
//     isInputEnabled,
//     object,
//     increaseScoreClickHandler,
//     decreaseScoreClickHandler,
//     toggleReplyClickHandler,
//     toggleDeleteClickHandler,
//     toggleEditClickHandler,
//     updateContentClickHandler,
//     createContentClickHandler,
//   } = props;

//   let inputElement = null;

//   if (isInputEnabled) {
//     inputElement = (
//       <Input
//         avatar="juliusomo"
//         username="amyrobson"
//         createContentClickHandler={createContentClickHandler}
//       />
//     );
//   }

//   return (
//     <div className="card-flex">
//       <Content
//         object={object}
//         increaseScoreClickHandler={increaseScoreClickHandler}
//         decreaseScoreClickHandler={decreaseScoreClickHandler}
//         toggleReplyClickHandler={toggleReplyClickHandler}
//         toggleDeleteClickHandler={toggleDeleteClickHandler}
//         toggleEditClickHandler={toggleEditClickHandler}
//         updateContentClickHandler={updateContentClickHandler}
//       />
//       {inputElement}
//     </div>
//   );
// };

// export default Card;

export default class Card extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      showInput: false,
    };
  }

  toggleReplyClickHandler = (event: any) => {
    this.setState({ showInput: true });
  };

  render = () => {
    const {
      object,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleDeleteClickHandler,
      toggleEditClickHandler,
      updateContentClickHandler,
      createContentClickHandler,
    } = this.props;

    const { showInput } = this.state;
    let inputElement = null;

    if (showInput) {
      inputElement = (
        <Input
          avatar="juliusomo"
          username="amyrobson"
          createContentClickHandler={createContentClickHandler}
        />
      );
    }

    return (
      <div className="card-flex">
        <Content
          object={object}
          increaseScoreClickHandler={increaseScoreClickHandler}
          decreaseScoreClickHandler={decreaseScoreClickHandler}
          toggleReplyClickHandler={this.toggleReplyClickHandler}
          toggleDeleteClickHandler={toggleDeleteClickHandler}
          toggleEditClickHandler={toggleEditClickHandler}
          updateContentClickHandler={updateContentClickHandler}
        />
        {inputElement}
      </div>
    );
  };
}
