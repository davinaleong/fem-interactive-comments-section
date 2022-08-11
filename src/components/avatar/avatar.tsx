import React from "react"
import "./avatar.css"

import AmyrobsonAvatar from "../../avatars/amyrobson.avatar"
import JuliusomoAvatar from "../../avatars/juliusomo.avatar"
import MaxblagunAvatar from "../../avatars/maxblagun.avatar"
import RamsesmironAvatar from "../../avatars/ramsesmiron.avatar"

interface AppProps {
  username: string
}

const Avatar = (props: AppProps): any => {
  const { username } = props

  switch (username) {
    case `juliusomo`:
      return <JuliusomoAvatar />
      break

    case `amyrobson`:
      return <AmyrobsonAvatar />
      break

    case `maxblagun`:
      return <MaxblagunAvatar />
      break

    case `ramsesmiron`:
      return <RamsesmironAvatar />
      break

    default:
      return
  }
}

export default Avatar
