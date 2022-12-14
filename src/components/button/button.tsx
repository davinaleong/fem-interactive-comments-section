import React from "react"
import "./button.css"

interface AppProps {
  children: any
  type: string
  clickHandler: Function
}

export default class Button extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props)
  }

  clickHandler = (event: any): void => {
    this.props.clickHandler(event)
  }

  render = (): any => {
    const { children, type } = this.props

    return (
      <button
        className={`btn ${type}`}
        type="button"
        onClick={this.clickHandler}
      >
        {children}
      </button>
    )
  }
}
