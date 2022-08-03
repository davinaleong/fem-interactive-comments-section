import React from "react";
import "./comments.css";

type AppProps = {
  comments: any;
};

class CommentsComponet extends React.Component {
  constructor(props: any) {
    super(props);

    // const { comments } = this.props;

    // this.state = {
    //   comments: comments,
    // };
  }

  render = () => {
    return <div>Comments Component</div>;
  };
}

export default CommentsComponet;
