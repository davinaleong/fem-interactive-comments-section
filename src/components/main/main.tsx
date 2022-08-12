import React from "react"
import "./main.css"

import IData from "../../interfaces/data"
import IComment from "../../interfaces/comment"
import IIds from "../../interfaces/ids"

import Modal from "../modal/modal"
import Input from "../input/input"
import Comment from "../comment/comment"
import removeUsername from "../../helpers/removeUsename"
import IReply from "../../interfaces/reply"

interface AppProps {
  data: IData
}

interface AppState {
  showModal: boolean
  nextId: number
  comments: any
  content: string
  replyingTo: string
  toDelete: IIds
}

export default class Main extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props)

    const { data } = this.props
    const { comments } = data
    this.state = {
      showModal: false,
      nextId: 5,
      comments: comments,
      content: ``,
      replyingTo: ``,
      toDelete: {
        id: 0,
        parentId: 0,
      },
    }
  }

  createContentClickHandler = (commentId: number = 0): void => {
    const { data } = this.props
    const { currentUser } = data
    const defaultCreatedAt = `just now`
    const defaultScore = 0

    let { nextId, comments, content, replyingTo } = this.state
    let comment: Partial<IComment> = {
      id: nextId,
      content,
      createdAt: defaultCreatedAt,
      score: defaultScore,
      user: currentUser,
      replies: [],
    }

    if (commentId == 0) {
      comments.push(comment)
    } else {
      content = removeUsername(content)
      const reply: Partial<IReply> = {
        id: nextId,
        content,
        createdAt: defaultCreatedAt,
        score: defaultScore,
        replyingTo,
        user: currentUser,
      }
      comment = comments.filter(
        (comment: Partial<IComment>) => comment.id == commentId
      )[0]

      if (comment.replies) {
        comment.replies.push(reply)
      }
    }

    nextId++
    content = ``
    this.setState({
      nextId,
      comments,
      content,
    })
  }

  updateReplyingTo = (replyingTo: string): void => {
    this.setState({ replyingTo })
  }

  toggleDeleteClickHandler = (ids: IIds): void => {
    this.setState({ showModal: true, toDelete: ids })
  }

  updateContentClickHandler = (ids: IIds): void => {
    const { id, parentId } = ids
    let { comments, content } = this.state
    content = removeUsername(content)
    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == id) {
          comments[i].content = content
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == id) {
              comments[i].replies[j].content = content
            }
          }
        }
      }
    }

    content = ``
    this.setState({ comments, content })
  }

  increaseScoreClickHandler = (ids: IIds): void => {
    const { id, parentId } = ids
    const { comments } = this.state

    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == id) {
          comments[i].score++
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == id) {
              comments[i].replies[j].score++
            }
          }
        }
      }
    }

    this.setState({ comments })
  }

  decreaseScoreClickHandler = (ids: IIds): void => {
    const { id, parentId } = ids
    const { comments } = this.state

    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == id) {
          comments[i].score--
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == id) {
              comments[i].replies[j].score--
            }
          }
        }
      }
    }

    this.setState({ comments })
  }

  contentInputHandler = (content: string): void => {
    this.setState({ content })
  }

  modalCancelClickHandler = (event: any): void => {
    this.setState({ showModal: false })
  }

  modalYesClickHandler = (): void => {
    let { comments, toDelete } = this.state
    const { id, parentId } = toDelete
    if (parentId == 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == id) {
          comments.splice(i, 1)
          break
        }
      }
    } else {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parentId) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id == id) {
              comments[i].replies.splice(j, 1)
              break
            }
          }
          break
        }
      }
    }

    toDelete = {
      id: 0,
      parentId: 0,
    }
    this.setState({ showModal: false, comments, toDelete })
  }

  hideReplyClickHandler = (): void => {
    return
  }

  render = (): any => {
    const { data } = this.props
    const { currentUser } = data
    const { showModal, comments, content, replyingTo } = this.state

    const commentElements: Array<any> = []
    comments.forEach((comment: IComment, index: number) => {
      commentElements.push(
        <Comment
          key={`c${index}`}
          currentUser={currentUser}
          comment={comment}
          reply={{}}
          content={content}
          replyingTo={replyingTo}
          increaseScoreClickHandler={this.increaseScoreClickHandler}
          decreaseScoreClickHandler={this.decreaseScoreClickHandler}
          toggleDeleteClickHandler={this.toggleDeleteClickHandler}
          updateContentClickHandler={this.updateContentClickHandler}
          createContentClickHandler={this.createContentClickHandler}
          contentInputHandler={this.contentInputHandler}
          updateReplyingTo={this.updateReplyingTo}
        />
      )
    })

    return (
      <main className="main-grid | container">
        <Modal
          showModal={showModal}
          modalCancelClickHandler={this.modalCancelClickHandler}
          modalYesClickHandler={this.modalYesClickHandler}
        />
        <div className="comments-flex">{commentElements}</div>
        <Input
          isSend={true}
          currentUser={currentUser}
          comment={{}}
          reply={{}}
          content={content}
          replyingTo=""
          contentInputHandler={this.contentInputHandler}
          createContentClickHandler={this.createContentClickHandler}
          hideReplyClickHandler={this.hideReplyClickHandler}
        />
      </main>
    )
  }
}
