import React from "react"
import "./card.css"

import IComment from "../../interfaces/comment"
import IReply from "../../interfaces/reply"

import Content from "../content/content"
import Input from "../input/input"

interface AppProps {
  isReply: boolean
  currentUser: object
  comment: IComment
  reply: IReply
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
  constructor(props: any) {
    super(props)

    this.state = {
      showInput: false,
    }
  }

  toggleReplyClickHandler = (event: any) => {
    const { comment, reply, updateReplyingTo } = this.props
    const { showInput } = this.state

    this.setState({ showInput: !showInput })
    if (reply) {
      updateReplyingTo(reply.user.username)
    } else {
      updateReplyingTo(comment.user.username)
    }
  }

  hideReplyClickHandler = (event: any) => {
    this.setState({ showInput: false })
  }

  toggleDeleteClickHandler = () => {
    const { comment, reply, toggleDeleteClickHandler } = this.props

    let id: number = comment.id
    let parentId: number = 0
    if (reply) {
      id = reply.id
      parentId = comment.id
    }

    toggleDeleteClickHandler({
      id,
      parentId,
    })
  }

  render = () => {
    const {
      isReply,
      currentUser,
      object,
      parent,
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
          currentUser={currentUser}
          objectId={object ? object.id : 0}
          parentId={parent ? parent.id : 0}
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
          object={object}
          parent={parent}
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
