import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMessages } from "../redux/actions/messages";
import { Link } from "react-router-dom";
import Api from "../utils/api";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import api from "../utils/api";

function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState("false");

  // fetch message from api using getmessages function
  const fetchMessages = async () => {
    const response = await Api.getMessages();

    // if status is ok (200) set messages
    if (response.statusCode === 200) {
      setIsLoaded(true);
      setMessages(response.messages);
    } else {
      // status code was bad
      setIsLoaded(true);
      setError(error);
    }
  };

  // need to call api within useEffect to work properly
  // like the old componentDidMount functionality if you dont know what i mean go to mdn and read up on it
  useEffect(() => {
    // call the fetch messages function
    fetchMessages();
  }, []);

  async function deleteMessage(event) {
    const response = await Api.deleteMessage(event.target.id);
    if (response.ok) {
      console.log("Deleted");
    } else {
      console.log("Delete not successful");
    }
    await fetchMessages();
  }

  // add like by event id when clicking the like button
  async function addLike(event) {
    event.persist()
    const response = await Api.addLike(event.target.id)
    if (response.ok) {
      console.log("Added");
    } else {
      console.log("Added");
    }
    console.log(event)
  getOneMessage(event);
  }
  console.log(messages);

  const remove = (messageId) => {
    console.log("this deletes");
  };

  async function getOneMessage(event) {
    const response = await Api.getOneMessage(event.target.id);
    if (response.ok) {
      console.log("Added");
    } else {
      console.log("Added");
    }
    await fetchMessages();
  }
  console.log(messages);


  



  // const m = () =>
  //   messages?.map((message) => {
  //     <ListGroup>
  //       <ListGroup.Item>
  //         {message.text}
  //         <br />
  //         <span>
  //           Likes: {message.likes?.length || "None"}
  //           <br />
  //           {message.likes.map((like) => {
  //             return (
  //               <Link to={"/profiles/" + like.username}>{like.username}</Link>
  //             );
  //           })}
  //         </span>
  //         <button type="button" id={message.id} onClick={addLike}>
  //           Like
  //         </button>
  //         <button
  //           type="button"
  //           id={message.id}
  //           onClick={(evt) => {
  //             remove(message.id);
  //           }}
  //         >
  //           Delete
  //         </button>
  //       </ListGroup.Item>
  //     </ListGroup>;
  //   });
  //make unordered list
  const m = messages?.map((message) => (
    <ListGroup>
      <ListGroup.Item>
        {message.text}
        <br />
        <span>
          Likes: {message.likes?.length || "None"}
          <br />
          {message.likes.map((like) => {
            return (
              <Link to={"../profiles/" + like.username}>{like.username}</Link>
            );
          })}
        </span>
        <button className="btn btn-primary"id={message.id} onClick={addLike}>
          Like
        </button>{" "}
        {/* <button type="button" id={message.id} onClick={addLike}>

          Like
        </button> */}
        <Button id={message.id}
          onClick={(evt) => {
            remove(message.id);
          }}
        >
          Delete
        </Button>
      </ListGroup.Item>
    </ListGroup>
  ));

  return (
    <>
      <h1>Kwitter Messages</h1>
      <Link to="/">Back to Home</Link>
      <ul>
        {/* Conditional render based on isLoaded */}
        {isLoaded && m}
      </ul>
    </>
  );
}

export default Messages;
// const mapStateToProps = (state) => {
//   return {
//     ...state
//   }
// }

// const mapDispatchToProps = { messKages }

// export default connect(
//   mapStateToProps,
//   {getMessages}
// )(Messages);

// const mapStateToProps = (state) => {
//   return {
//     messages: state.messages.messages,
//   };
// };
