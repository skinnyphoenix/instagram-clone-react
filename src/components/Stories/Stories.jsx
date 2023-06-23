import "./Stories.css";
import Story from "../Story/Story";
import ModalStories from "../ModalStories";
import { useState } from "react";

const Stories = ({ stories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalStories = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="stories">
        <ul className="Stories__List">
          {stories &&
            stories.map((story) => (
              <li className="Stories__Item" key={story.id} onClick={() => openModalStories()}>
                <Story story={story} />
              </li>
            ))}
        </ul>
      </div>
      <ModalStories stories={stories} isOpen={isModalOpen} toggle={setIsModalOpen} />
    </>
  );
};

export default Stories;
