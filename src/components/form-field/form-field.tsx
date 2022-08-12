import React from "react"
import "./form-field.css"

interface AppProps {
  value: string
  inputHandler: any
}

const FormField = (props: AppProps): any => {
  const { value, inputHandler } = props
  return (
    <textarea
      className="form-field"
      name="text"
      rows={4}
      value={value}
      onInput={inputHandler}
    ></textarea>
  )
}

export default FormField
