import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages } from "../redux/actions/messages";

class GetMessages extends Component {
  //   state = {
  //     messages: [],
  //   };
  componentDidMount() {
    console.log("hello");
    this.props.getMessages();
  }

  render() {
    const { messages } = this.props.messages;
    console.log(messages);
    return (
      <>
        <h1>Kwitter Messages</h1>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
  };
};
export default connect(mapStateToProps, { getMessages })(GetMessages);
