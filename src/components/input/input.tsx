import React from "react"
import "./input.css"

import IUser from "../../interfaces/user"
import IComment from "../../interfaces/comment"
import IReply from "../../interfaces/reply"

import Avatar from "../avatar/avatar"
import Button from "../button/button"
import removeUsername from "../../helpers/removeUsename"
import FormField from "../form-field/form-field"

interface AppProps {
  isSend: boolean
  currentUser: Partial<IUser>
  comment: Partial<IComment>
  reply: Partial<IReply>
  replyingTo: string
  content: string
  contentInputHandler: Function
  createContentClickHandler: Function
  hideReplyClickHandler: Function
}

export default class Input extends React.Component<AppProps, {}> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount = (): void => {
    const { isSend, replyingTo, content, contentInputHandler } = this.props
    const value: string = removeUsername(content)
    const contentEditable: string = isSend ? `` : `@${replyingTo} ${value}`

    contentInputHandler(contentEditable)
  }

  contentInputHandler = (event: any): void => {
    const { isSend, replyingTo, contentInputHandler } = this.props
    const value: string = removeUsername(event.target.value)
    const contentEditable: string = isSend
      ? event.target.value
      : `@${replyingTo} ${value}`

    contentInputHandler(contentEditable)
  }

  createContentClickHandler = (event: any): void => {
    const { comment, hideReplyClickHandler, createContentClickHandler } =
      this.props
    hideReplyClickHandler()

    if (comment) {
      createContentClickHandler(comment.id)
    } else {
      createContentClickHandler()
    }
  }

  render = (): any => {
    const { isSend, currentUser, content } = this.props
    const username: string =
      currentUser && currentUser.username ? currentUser.username : ""

    return (
      <div className="input-grid">
        <Avatar username={username} />
        <FormField value={content} inputHandler={this.contentInputHandler} />
        <div className="input-cell">
          <Button
            type="btn-primary"
            clickHandler={this.createContentClickHandler}
          >
            {isSend ? `Send` : `Reply`}
          </Button>
        </div>
      </div>
    )
  }
}
