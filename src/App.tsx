import React from "react"
import data from "./db/data.json"

import Attributon from "./components/attribution/attribution"
import Main from "./components/main/main"

interface AppProps {
  data: any
}

function App(props: AppProps) {
  return (
    <div className="body | text-neutral-900 bg-grey-200">
      <Main data={data} />
      <Attributon />
    </div>
  )
}

export default App
