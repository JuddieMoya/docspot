import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Api from '../utils/api';
import { GetUsernameContainer } from "../components/";

function Message() {
  const id = window.location.pathname.split('/')[2];
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchMessage = async () => {

    const response = await Api.getOneMessage(id);

    // if status is ok (200) set messages
    if (response.statusCode === 200) {
      setIsLoaded(true);
      
      // setMessages with what we already have concatenated with the new ones
      setMessage(response.message);
      console.log(response.message)
    } else {
      // status code was bad
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    // call the fetch messages function
    fetchMessage();
  }, []);

  async function addLike(event) {
    event.persist()
    const response = await Api.addLike(event.target.id)
    if (response.ok) {
      console.log("Added");
    } else {
      console.log("Added");
    }
    console.log(event)
  }

  return (
  <>
  <GetUsernameContainer />
  {isLoaded && message.text}
  <br />
        <span>
          Likes: {message.likes?.length || "None"}
          <br />
          {isLoaded && message.likes?.map((like) => {
            return (
              <Link to={"../profiles/" + like.username}>{like.username}</Link>
            );
          })}
        </span>
        <button className="btn btn-primary" id={message.id} onClick={addLike}>
          Like
        </button>
  <Link to="../messagefeed">
    Go back
  </Link>
  </>
  );
}

export default Message;
