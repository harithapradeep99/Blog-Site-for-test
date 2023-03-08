import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <Link to="/post/abc" className="link">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      </Link>


      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link to="/post/abc" className="link">
              Sample Post
            </Link>
          </span>
         



        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Read about the this post
          </Link>
        </span>
        <hr />
        <span className="postDate">2 days ago</span>
      </div>

      <p className="postDesc">
      Web site. A website is a collection of linked web pages 
      (plus their associated resources) that share a unique domain 
      name. Each web page of a given website provides explicit 
      links—most of the time in the form of clickable portions of 
      text—that allow the user to move from one page of the website 
      to another.
      </p>

    </div>
  );
}
