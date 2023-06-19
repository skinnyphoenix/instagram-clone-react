import "./Stories.css";
import Story from "../Story/Story";

const Stories = ({ stories }) => {
  return (
    <>
      <div className="stories">
        <ul className="Stories__List">
          {stories &&
            stories.map((story) => (
              <li className="Stories__Item" key={story.id}>
                <Story story={story} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Stories;
