import "./Story.css";

const Story = ({ user, story }) => {
  return (
    <div className="Story">
      <div className="Story__Image">
        <img src="https://randomuser.me/api/portraits/med/women/21.jpg" alt="User" />
      </div>
      <div className="Story__userName">
        <h5>{story?.isUser ? "Your Story" : story.username}</h5>
      </div>
    </div>
  );
};

export default Story;
