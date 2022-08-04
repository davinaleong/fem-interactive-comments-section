import React from "react";
import "./modal.css";

import Button from "../button/button";

type AppProps = {
  showModal: boolean;
  modalCancelClickHandler: Function;
  modalYesClickHandler: Function;
};

export default class Modal extends React.Component {
  constructor(props: any) {
    super(props);
  }

  modalCancelClickHandler = (event: any) => {
    this.props.modalCancelClickHandler(event);
  };

  modalYesClickHandler = (event: any) => {
    this.props.modalYesClickHandler(event);
  };

  render = () => {
    const { showModal } = this.props;

    if (!showModal) {
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
          <Button
            type="btn-neutral"
            clickHandler={this.modalCancelClickHandler}
          >
            No, Cancel
          </Button>
          <Button type="btn-danger" clickHandler={this.modalYesClickHandler}>
            Yes, Delete
          </Button>
        </div>
      </div>
    );
  };
}
