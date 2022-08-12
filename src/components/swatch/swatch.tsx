import React from "react"

interface AppProps {
  classList: string
}

const SwatchComponent = (props: AppProps): any => {
  const { classList } = props

  return <div className={classList}>&nbsp;</div>
}

export default SwatchComponent
