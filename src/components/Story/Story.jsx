import "./Story.css";

const Story = ({ user, story }) => {
  return (
    <div className="Story">
      <div className="Story__Image">
        <img src={story.userImage} alt="User Image" />
      </div>
      <div className="Story__userName">
        <h5>{story?.isUser ? "Your Story" : story.userName}</h5>
      </div>
    </div>
  );
};

export default Story;
