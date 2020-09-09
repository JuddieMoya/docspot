import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages } from "../redux/actions/messages";

function Messages(props) {
  //   state = 
  //     messages: [],
  //   };
  // componentDidMount() {
  //   console.log("hello");
  //   this.props.getMessages();
  // }

  
  
  console.log(props);
  const m = props?.messages?.messages?.map(message =>
    <li>{message}</li>
  )
  return (
    <>
      <h1>Kwitter Messages</h1>
      <ul>
        {m}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

// const mapDispatchToProps = { messKages }

export default connect(
  mapStateToProps,
  {getMessages}
)(Messages);

// const mapStateToProps = (state) => {
//   return {
//     messages: state.messages.messages,
//   };
// };
