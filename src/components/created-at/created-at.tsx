import React from "react"
import "./created-at.css"

interface AppProps {
  children: any
}

const CreatedAt = (props: AppProps) => {
  const { children } = props
  return <div className="info-created-at">{children}</div>
}

export default CreatedAt
