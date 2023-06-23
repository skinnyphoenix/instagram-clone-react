import Posts from "../Posts";
import "./SinglePost.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SinglePost = ({ post }) => {
  return (
    <>
      <div className="wrapperUserInfo">
        <img src={post.userImage} alt="User" />
        <div className="userInfo">
          <p>{post.userName}</p>
        </div>
      </div>
      <div className="postImg" key={post.id}>
        <Swiper modules={[Pagination]} pagination={{ type: "progressbar" }}>
          {post?.media?.map((media) => (
            <SwiperSlide>
              <img src={media.src}></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="interactions">
        <img src="https://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png" alt="" />
        <img src="https://www.pngall.com/wp-content/uploads/8/Comment-PNG.png" alt="" />
        <img src="https://cdn.pixabay.com/photo/2018/11/13/21/44/instagram-3814059_1280.png" alt="" />
      </div>
      <div className="Likes">
        <p>Liked by {post.likes.numberOfLikes} people</p>
      </div>

      <div className=""></div>
    </>
  );
};

export default SinglePost;
