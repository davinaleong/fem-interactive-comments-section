import React from "react"
import "./content.css"

import Counter from "../counter/counter"
import Info from "../info/info"
import Buttons from "../buttons/buttons"
import Button from "../button/button"
import FormField from "../form-field/form-field"

import removeUsername from "../../helpers/removeUsename"
import IUser from "../../interfaces/user"
import IComment from "../../interfaces/comment"
import IReply from "../../interfaces/reply"
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
  toggleReplyClickHandler: Function
  toggleDeleteClickHandler: Function
  updateContentClickHandler: Function
  contentInputHandler: Function
}

interface AppState {
  toggleEditMode: boolean
  contentEditable: string
}

export default class Content extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    const { isReply, comment, reply } = this.props
    const { replyingTo } = reply

    this.state = {
      toggleEditMode: false,
      contentEditable: isReply
        ? `@${replyingTo} ${reply.content}`
        : `${comment.content}`,
    }
  }

  toggleEditClickHandler = (event: any): void => {
    const { toggleEditMode } = this.state
    this.setState({ toggleEditMode: !toggleEditMode })
  }

  contentInputHandler = (event: any): void => {
    const { isReply, reply, contentInputHandler } = this.props
    const { replyingTo } = reply
    const value = removeUsername(event.target.value)
    const contentEditable = isReply ? `@${replyingTo} ${value}` : value

    this.setState({
      contentEditable,
    })
    contentInputHandler(contentEditable)
  }

  updateContentClickHandler = (event: any): void => {
    const { comment, reply, updateContentClickHandler } = this.props
    this.setState({ toggleEditMode: false })

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

    updateContentClickHandler(ids)
  }

  render = (): any => {
    const {
      isReply,
      currentUser,
      comment,
      reply,
      increaseScoreClickHandler,
      decreaseScoreClickHandler,
      toggleReplyClickHandler,
      toggleDeleteClickHandler,
    } = this.props

    let thisScore: number = 0
    let thisCreatedAt: string = ""
    let thisContent: string = ""
    let thisUser: Partial<IUser> = {}

    if (comment) {
      thisScore = comment.score ? comment.score : 0
      thisCreatedAt = comment.createdAt ? comment.createdAt : ""
      thisContent = comment.content ? comment.content : ""
      thisUser = comment.user ? comment.user : {}
    }

    if (isReply && reply) {
      thisScore = reply.score ? reply.score : 0
      thisCreatedAt = reply.createdAt ? reply.createdAt : ""
      thisContent = reply.content ? reply.content : ""
      thisUser = reply.user ? reply.user : {}
    }

    const thisUsername = thisUser && thisUser.username ? thisUser.username : ""

    const isCurrentUser = currentUser.username == thisUsername

    const { toggleEditMode, contentEditable } = this.state
    const { replyingTo } = reply

    let contentElement: any = <p>{thisContent}</p>
    if (isReply && reply) {
      contentElement = (
        <p>
          <mark>@{replyingTo}</mark> {thisContent}
        </p>
      )
    }

    if (toggleEditMode) {
      contentElement = (
        <FormField
          value={contentEditable}
          inputHandler={this.contentInputHandler}
        />
      )
    }

    return (
      <div className="content-grid" data-edit={toggleEditMode}>
        <div className="counter-cell">
          <Counter
            score={thisScore}
            comment={comment}
            reply={reply}
            increaseScoreClickHandler={increaseScoreClickHandler}
            decreaseScoreClickHandler={decreaseScoreClickHandler}
          />
        </div>
        <div className="info-cell">
          <Info
            isCurrentUser={isCurrentUser}
            username={thisUsername}
            createdAt={thisCreatedAt}
          />
        </div>
        <div className="buttons-cell">
          <Buttons
            isCurrentUser={isCurrentUser}
            toggleReplyClickHandler={toggleReplyClickHandler}
            toggleDeleteClickHandler={toggleDeleteClickHandler}
            toggleEditClickHandler={this.toggleEditClickHandler}
          />
        </div>
        <div className="content-cell">{contentElement}</div>
        <div className="update-cell">
          <Button
            type="btn-primary"
            clickHandler={this.updateContentClickHandler}
          >
            Update
          </Button>
        </div>
      </div>
    )
  }
}
