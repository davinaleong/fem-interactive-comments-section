import React from "react"
import "./username.css"

type AppProps = {
  children: any
}

const Username = (props: AppProps): any => {
  const { children } = props
  return <div className="info-username">{children}</div>
}

export default Username
