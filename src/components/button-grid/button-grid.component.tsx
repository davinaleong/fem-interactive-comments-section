import React from "react";
import "./button-grid.css";

import ButtonComponent from "../button/button.component";
import ReplyIcon from "../../icons/reply.icon";
import EditIcon from "../../icons/edit.icon";
import DeleteIcon from "../../icons/delete.icon";

type AppProps = {
  isCurrentUser: boolean;
  replyHandler: any;
  deleteHandler: any;
  editHandler: any;
};

class ButtonGridComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  replyHandler = (e) => {
    this.props.replyHandler(e);
  };

  deleteHandler = (e) => {
    this.props.deleteHandler(e);
  };

  editHandler = (e) => {
    this.props.editHandler(e);
  };

  render = () => {
    const { isCurrentUser } = this.props;

    let buttons = (
      <ButtonComponent type="btn-link-primary" clickHandler={this.replyHandler}>
        <ReplyIcon /> Reply
      </ButtonComponent>
    );

    if (isCurrentUser) {
      buttons = (
        <>
          <ButtonComponent
            type="btn-link-red"
            clickHandler={this.deleteHandler}
          >
            <DeleteIcon /> Delete
          </ButtonComponent>
          <ButtonComponent
            type="btn-link-primary"
            clickHandler={this.editHandler}
          >
            <EditIcon /> Edit
          </ButtonComponent>
        </>
      );
    }

    return buttons;
  };
}

export default ButtonGridComponent;
