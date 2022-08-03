import React from "react";
import "./form-field.css";

type AppProps = {
  text: string;
  changeHandler: any;
};

class FormFieldComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      text: "",
    };
  }

  changeHandler = (e) => {
    this.setState({text: e.target.value});
    this.props.changeHandler(e);
  };

  render = () => {
    const { text } = this.state;
    return (
      <textarea
        name="input"
        id="input"
        className="form-field"
        rows="5"
        placeholder="Add a comment..."
        value={text}
        onChange={this.changeHandler}
      ></textarea>
    );
  };
}

export default FormFieldComponent;
