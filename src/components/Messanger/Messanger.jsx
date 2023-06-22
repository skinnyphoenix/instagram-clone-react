import "./Messanger.css";
import { useState } from "react";
import { useEffect } from "react";
import Message from "../Message/Message";

const Messanger = () => {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.npoint.io/acddaa1116ddd222e8b3")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://api.npoint.io/acddaa1116ddd222e8b3");
  //     const newMsg = await response.json();
  //     setMessages(newMsg);
  //     console.log(newMsg);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="messangerWrapper">
      ciaoblabla
      {/* <li className="msg__item" key={messages.id}>
        {messages.map((message) => {
          return <Message message={message} />;
        })}
      </li> */}
    </div>
  );
};

export default Messanger;
