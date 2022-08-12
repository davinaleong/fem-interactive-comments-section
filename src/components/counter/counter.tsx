import React from "react"
import "./counter.css"

import Button from "../button/button"
import PlusIcon from "../../icons/plus.icon"
import MinusIcon from "../../icons/minus.icon"
import IComment from "../../interfaces/comment"
import IReply from "../../interfaces/reply"
import IIds from "../../interfaces/ids"

interface AppProps {
  score: number
  comment: Partial<IComment>
  reply: Partial<IReply>
  increaseScoreClickHandler: Function
  decreaseScoreClickHandler: Function
}

export default class Counter extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props)
  }

  increaseScoreClickHandler = (event: any): void => {
    const { comment, reply, increaseScoreClickHandler } = this.props

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

    increaseScoreClickHandler(ids)
  }

  decreaseScoreClickHandler = (event: any): void => {
    const { comment, reply, decreaseScoreClickHandler } = this.props

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

    decreaseScoreClickHandler(ids)
  }

  render = (): any => {
    const { score } = this.props

    return (
      <div className="counter-flex">
        <Button type="btn-icon" clickHandler={this.increaseScoreClickHandler}>
          <PlusIcon />
        </Button>
        <div className="counter-label">{score}</div>
        <Button type="btn-icon" clickHandler={this.decreaseScoreClickHandler}>
          <MinusIcon />
        </Button>
      </div>
    )
  }
}
