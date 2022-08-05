import React from "react";
import "./form-field.css";

type AppProps = {
  value: string;
  inputHandler: Function;
};

const FormField = (props: any) => {
  const { value, inputHandler } = props;
  return (
    <textarea
      className="form-field"
      name="text"
      rows="4"
      value={value}
      onInput={inputHandler}
    ></textarea>
  );
};

export default FormField;
