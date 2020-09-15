import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import { connect } from "react-redux";
import { getMessages } from "../redux/actions/messages";
import { Link } from "react-router-dom";
import Api from "../utils/api";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import api from "../utils/api";
import {PostMessages} from "../components/Post-Messages"


function Messages(props) {

 
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const limit = 25;
  // fetch message from api using getmessages function
  const fetchMessages = async () => {

    const response = await Api.getMessages(count, limit);

    // if status is ok (200) set messages
    if (response.statusCode === 200) {
      setIsLoaded(true);
      
      // setMessages with what we already have concatenated with the new ones
      setMessages(messages.concat(response.messages));
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

  async function deleteMessage(id) {
    console.log(id)
    const response = await Api.deleteMessage(id);
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
  
  async function getOneMessage(event) {
    const response = await Api.getOneMessage(event.target.id);
    if (response.ok) {
      console.log("Added");
    } else {
      console.log("Added");
    }
    await fetchMessages();
  }

  async function handleOnScroll() {
    //scrollY is the current location of the top of the screen,
    // innerHeight is not
    // 2475 is the rough height of each message's height * 25
    // 2400 is a rounded number to help the api call start sooner 
    if(window.scrollY + window.innerHeight + (count * 2400) > 2475 * (count + 1)) {
      fetchMessages();
    }
  }
  
  window.addEventListener('scroll', handleOnScroll);
  const m = messages?.map((message) => (
    <ListGroup>
      <ListGroup.Item>
        <Link to={`../msg/${message.id}`}>{message.text}</Link>
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
        <button className="btn btn-primary" id={message.id} onClick={addLike}>
          Like
        </button>{" "}
        <Button id={message.id}
          onClick={() => {
            deleteMessage(message.id);
          }}
        >
          Delete
        </Button>
      </ListGroup.Item>
    </ListGroup>
  ));

  return (
    <div onScroll={handleOnScroll}>
      <h1>Kwitter Messages</h1>
      <Link to="/">Back to Home</Link>
      <PostMessages/>
      <ul>
        {/* Conditional render based on isLoaded */}
        {isLoaded && m}
      </ul>
    </div>
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
//ok