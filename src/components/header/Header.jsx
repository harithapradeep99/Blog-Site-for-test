import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Haritha Pradeep's</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2022/03/18/13/13/sunset-7076676__340.jpg"
        alt=""
      />
    </div>
  );
}
