import React from "react"
import "./card.css"

import IComment from "../../interfaces/comment"
import IReply from "../../interfaces/reply"
import IUser from "../../interfaces/user"

import Content from "../content/content"
import Input from "../input/input"
import IIds from "../../interfaces/ids"

interface AppProps {
  isReply: boolean
  currentUser: Partial<IUser>
  comment: Partial<IComment>
  reply: Partial<IReply>
  replyingTo: string
  content: string
  increaseScoreClickHandler: Function
  decreaseScoreClickHandler: Function
  toggleDeleteClickHandler: Function
  updateContentClickHandler: Function
  createContentClickHandler: Function
  contentInputHandler: Function
  updateReplyingTo: Function
}

interface AppState {
  showInput: boolean
}

export default class Card extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      showInput: false,
    }
  }

  toggleReplyClickHandler = (event: any): void => {
    const { comment, reply, updateReplyingTo } = this.props
    const { showInput } = this.state

    let user: Partial<IUser> = {}
    if (comment && comment.user) {
      user = comment.user
    }

    if (reply && reply.user) {
      user = reply.user
    }

    this.setState({ showInput: !showInput })
    if (user) {
      updateReplyingTo(user.username)
    }
  }

  hideReplyClickHandler = (event: any): void => {
    this.setState({ showInput: false })
  }

  toggleDeleteClickHandler = (): void => {
    const { comment, reply, toggleDeleteClickHandler } = this.props

    let ids: IIds = {
      id: 0,
      parentId: 0,
    }

    if (comment) {
      ids = {
        id: comment.id ? comment.id : 0,
        parentId: 0,
      }
    }

    if (comment && reply) {
      ids = {
        id: reply.id ? reply.id : 0,
        parentId: comment.id ? comment.id : 0,
      }
    }

    toggleDeleteClickHandler(ids)
  }

  render = (): any => {
    const {
      isReply,
      currentUser,
      comment,
      reply,
      replyingTo,
      content,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleDeleteClickHandler,
      updateContentClickHandler,
      createContentClickHandler,
      contentInputHandler,
    } = this.props

    const { showInput } = this.state
    let inputElement = null

    if (showInput) {
      inputElement = (
        <Input
          isSend={false}
          currentUser={currentUser}
          comment={comment}
          reply={reply}
          replyingTo={replyingTo}
          content={content}
          createContentClickHandler={createContentClickHandler}
          contentInputHandler={contentInputHandler}
          hideReplyClickHandler={this.hideReplyClickHandler}
        />
      )
    }

    return (
      <div className="card-flex">
        <Content
          isReply={isReply}
          currentUser={currentUser}
          comment={comment}
          reply={reply}
          replyingTo={replyingTo}
          content={content}
          increaseScoreClickHandler={increaseScoreClickHandler}
          decreaseScoreClickHandler={decreaseScoreClickHandler}
          toggleReplyClickHandler={this.toggleReplyClickHandler}
          toggleDeleteClickHandler={toggleDeleteClickHandler}
          updateContentClickHandler={updateContentClickHandler}
          contentInputHandler={contentInputHandler}
        />
        {inputElement}
      </div>
    )
  }
}
