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

interface AppProps {
  isReply: boolean
  currentUser: IUser
  comment: IComment
  reply: IReply
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
  constructor(props: any) {
    super(props)

    const { isReply, comment, reply } = this.props
    const { replyingTo } = reply

    this.state = {
      toggleEditMode: false,
      contentEditable: isReply ? `@${replyingTo} ${reply.content}` : `${comment.content}`,
    }
  }

  toggleEditClickHandler = (event: any) => {
    const { toggleEditMode } = this.state
    this.setState({ toggleEditMode: !toggleEditMode })
  }

  contentInputHandler = (event: any) => {
    const { isReply, reply, contentInputHandler } = this.props
    const { replyingTo } = reply
    const value = removeUsername(event.target.value)
    const contentEditable = isReply ? `@${replyingTo} ${value}` : value

    this.setState({
      contentEditable,
    })
    contentInputHandler(contentEditable)
  }

  updateContentClickHandler = (event: any) => {
    const { comment, reply, updateContentClickHandler } = this.props
    this.setState({ toggleEditMode: false })

    let id: number = comment.id
    let parentId: number = 0
    if (reply) {
      id = reply.id
      parentId = comment.id
    }
    updateContentClickHandler(id, parentId)
  }

  render = () => {
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

    let { score, createdAt, content, user } = comment
    if (isReply) {
      { score, createdAt, content, user } = reply
    }
    const { username } = user

    const isCurrentUser = currentUser.username == username

    const { toggleEditMode, contentEditable } = this.state
    const { replyingTo } = reply

    let contentElement: any = isReply ? (
      <p>
        <mark>@{replyingTo}</mark> {content}
      </p>
    ) : (
      <p>{content}</p>
    )

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
            score={score}
            object={object}
            parent={parent}
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
