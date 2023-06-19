import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import { storiesData } from "./mock/mock";

function App() {
  const [stories, setStories] = useState(storiesData);

  return (
    <>
      <TopBar />
      <Stories stories={stories} />
      <Posts />
    </>
  );
}

export default App;
