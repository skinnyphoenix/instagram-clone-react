import "./Message.css";

const Message = ({ message }) => {
  return (
    <div className="Message" onClick={() => console.log(message)}>
      <img src={message.userImage} alt="User Image" className="Message_Image" />

      <div className="Msg__Inf">
        <p>{message.userName}</p>
      </div>

      <div className="MessageInfoBtm">
        <p>{message.message}</p>
        <p>{message.date}</p>
      </div>
    </div>
  );
};

export default Message;
