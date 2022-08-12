import React from "react"
import "./buttons.css"

import Button from "../button/button"
import ReplyIcon from "../../icons/reply.icon"
import DeleteIcon from "../../icons/delete.icon"
import EditIcon from "../../icons/edit.icon"

interface AppProps {
  isCurrentUser: boolean
  toggleReplyClickHandler: Function
  toggleDeleteClickHandler: Function
  toggleEditClickHandler: Function
}

export default class Buttons extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props)
  }

  toggleReplyClickHandler = (event: any): void => {
    this.props.toggleReplyClickHandler(event)
  }

  toggleDeleteClickHandler = (event: any): void => {
    this.props.toggleDeleteClickHandler(event)
  }

  toggleEditClickHandler = (event: any): void => {
    this.props.toggleEditClickHandler(event)
  }

  render = (): any => {
    const { isCurrentUser } = this.props
    let buttons: any = (
      <Button
        type="btn-link btn-link-primary"
        clickHandler={this.toggleReplyClickHandler}
      >
        <ReplyIcon /> Reply
      </Button>
    )

    if (isCurrentUser) {
      buttons = (
        <>
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
        </>
      )
    }

    return <div className="buttons-flex">{buttons}</div>
  }
}
