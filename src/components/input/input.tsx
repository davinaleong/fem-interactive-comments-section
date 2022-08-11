import React from "react"
import "./input.css"

import Avatar from "../avatar/avatar"
import Button from "../button/button"
import removeUsername from "../../helpers/removeUsename"
import FormField from "../form-field/form-field"
import IUser from "../../interfaces/user"

interface AppProps {
  isSend: boolean
  currentUser: IUser
  objectId: number
  parentId: number
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

  componentDidMount = () => {
    const { isSend, replyingTo, content, contentInputHandler } = this.props
    const value: string = removeUsername(content)
    const contentEditable: string = isSend ? `` : `@${replyingTo} ${value}`

    contentInputHandler(contentEditable)
  }

  contentInputHandler = (event: any) => {
    const { isSend, replyingTo, contentInputHandler } = this.props
    const value: string = removeUsername(event.target.value)
    const contentEditable: string = isSend
      ? event.target.value
      : `@${replyingTo} ${value}`

    contentInputHandler(contentEditable)
  }

  createContentClickHandler = (event: any) => {
    const {
      objectId,
      parentId,
      replyingTo,
      hideReplyClickHandler,
      createContentClickHandler,
    } = this.props
    hideReplyClickHandler()

    if (parentId) {
      createContentClickHandler(parentId, replyingTo)
    } else {
      createContentClickHandler(objectId, replyingTo)
    }
  }

  render = () => {
    const { isSend, currentUser, content } = this.props

    return (
      <div className="input-grid">
        <Avatar username={currentUser.username} />
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
