import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://cdn.pixabay.com/photo/2023/01/22/16/45/nature-7736939_960_720.jpg" />
      <Post img="https://cdn.pixabay.com/photo/2023/03/02/14/41/sand-dunes-7825545__340.jpg" />
      <Post img="https://cdn.pixabay.com/photo/2022/03/18/13/13/sunset-7076676__340.jpg"/>
      <Post img="https://cdn.pixabay.com/photo/2022/09/27/13/59/sunflower-7482869__340.jpg"/>
      <Post img="https://cdn.pixabay.com/photo/2023/01/31/19/52/dog-7758887__340.jpg"/>
    </div>
  );
}
