import React, { useState, useEffect, useRef } from "react";
import { animateScroll as scroll} from "react-scroll";
import io from "socket.io-client";
import "../Chat.css";
import img1 from './Images/img1.JPEG'
import seeRemImg from './Images/seeRemImg.jpg'

let socket;
const CONNECTION_PORT = "localhost:3002/";

function Chat() {
  // Before Login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");
  

  // After Login
  
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  //const divRef = useRef(null);
    //useEffect(() => {
      //divRef.current.scrollIntoView({ behavior: 'smooth'});
 //})
  //<div ref={divRef}> </div>
  
  
  

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });

  

  const connectToRoom = () => {
    setLoggedIn(true);
    socket.emit("join_room", room);
  };

  


  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        author: userName,
        message: message,
      },
    };
    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage("");
    document.getElementById('myInput').value = '';
    
  };
 
   return (
    <div className="Chat" style={{ backgroundImage: 'url('+seeRemImg+')', backgroundSize: "cover" }}>
    
    <img src={img1} alt='seerem'/>
      {!loggedIn ?   (
        <div className="logIn"   >
          <div className="inputs">
            <input
              type="text"
              placeholder="Name..."
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room..."
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>
          <button onClick={connectToRoom}>Enter Chat</button>
        </div>
      ) : (
        <div className="chatContainer">
          <div className="messages">
            {messageList.map((val, key) => {
              return (
                
                <div
                  className="messageContainer"
                  id={val.author == userName ? "You" : "Other"}
                >
                  <div className="messageIndividual">
                    {val.author}: {val.message}
                  </div>
                </div>
               
              );
            })}
          
          </div>
          
          <div className="messageInputs">
            <input
              type="text"
              id= "myInput"
              placeholder="Message..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            
            <button onClick={sendMessage}>Send</button>
            <a className='button' href='/admin' ><p1>Leave Chat</p1></a>
            
          </div>
        </div>
      )}
    </div>
    
  );
}

export default Chat;