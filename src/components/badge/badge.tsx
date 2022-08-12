import React from "react"
import "./badge.css"

interface AppProps {
  children: any
  type: string
}

const Badge = (props: AppProps): any => {
  const { children, type } = props
  return <div className={`badge ${type}`}>{children}</div>
}

export default Badge
