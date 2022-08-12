import React from "react"
import "./comment.css"

import IUser from "../../interfaces/user"

import Card from "./../card/card"
import IComment from "../../interfaces/comment"
import IReply from "../../interfaces/reply"

interface AppProps {
  currentUser: IUser
  comment: IComment | null
  reply: IReply | null
  content: string
  replyingTo: string
  increaseScoreClickHandler: Function
  decreaseScoreClickHandler: Function
  toggleDeleteClickHandler: Function
  updateContentClickHandler: Function
  createContentClickHandler: Function
  contentInputHandler: Function
  updateReplyingTo: Function
}

const Comment = (props: AppProps) => {
  const {
    currentUser,
    comment,
    content,
    replyingTo,
    increaseScoreClickHandler,
    decreaseScoreClickHandler,
    toggleDeleteClickHandler,
    updateContentClickHandler,
    createContentClickHandler,
    contentInputHandler,
    updateReplyingTo,
  } = props

  const { replies } = comment
  const replyElements: any[] = []
  replies.forEach((reply: IReply, index: number) => {
    replyElements.push(
      <Card
        key={`r${index}`}
        isReply={true}
        currentUser={currentUser}
        comment={comment}
        reply={reply}
        replyingTo={replyingTo}
        content={content}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
        contentInputHandler={contentInputHandler}
        updateReplyingTo={updateReplyingTo}
      />
    )
  })

  return (
    <div className="comment-flex">
      <Card
        currentUser={currentUser}
        comment={comment}
        reply={null}
        replyingTo={replyingTo}
        increaseScoreClickHandler={increaseScoreClickHandler}
        decreaseScoreClickHandler={decreaseScoreClickHandler}
        toggleDeleteClickHandler={toggleDeleteClickHandler}
        updateContentClickHandler={updateContentClickHandler}
        createContentClickHandler={createContentClickHandler}
        contentInputHandler={contentInputHandler}
        updateReplyingTo={updateReplyingTo}
      />
      <div className="replies-flex">{replyElements}</div>
    </div>
  )
}

export default Comment
