import "./Message.css";

const Message = ({ message }) => {
  return (
    <div className="Message" onClick={() => console.log(message)}>
      <div className="wrapperInfoMsg">
        <img src={message.userImage} alt="User Image" className="Message_Image" />
        <div className="infoMsg">
          <h5>{message.userName}</h5>
          <h6>{message.message}</h6>
        </div>
        <p>{message.date}</p>
      </div>
    </div>
  );
};

export default Message;
