import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import { storiesData } from "./mock/mock";
import { useEffect } from "react";

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
