import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Messanger from "./components/Messanger";
import { storiesData } from "./mock/mock";
import { useEffect } from "react";
import { IGTVIcon } from "./assets";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState("home");

  useEffect(() => {
    fetch("https://api.npoint.io/f0143ae2455948aac788")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;

      case "messanger":
        return <p>ciao</p>;

      case "igtv":
        return <p>ciao</p>;

      case "logo":
        return <LogoIcon />;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
    </>
  );
}

export default App;
