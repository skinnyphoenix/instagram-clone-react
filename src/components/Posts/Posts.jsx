import "./Posts.css";
import SinglePost from "../SinglePost/SinglePost";

const Posts = ({ posts }) => {
  return (
    <>
      <div>
        <ul className="postsWrapper">
          {posts.map((post) => (
            <li className="singlePost__">
              <SinglePost post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
