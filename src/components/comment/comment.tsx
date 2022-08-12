import React from "react"
import "./comment.css"

import IUser from "../../interfaces/user"

import Card from "./../card/card"
import IComment from "../../interfaces/comment"
import IReply from "../../interfaces/reply"

interface AppProps {
  currentUser: Partial<IUser>
  comment: Partial<IComment>
  reply: Partial<IReply>
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

const Comment = (props: AppProps): any => {
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
  if (replies) {
    replies.forEach((reply: Partial<IReply>, index: number) => {
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
  }

  return (
    <div className="comment-flex">
      <Card
        isReply={false}
        currentUser={currentUser}
        comment={comment}
        reply={{}}
        replyingTo={replyingTo}
        content=""
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
