import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.pixabay.com/photo/2023/01/22/16/45/nature-7736939_960_720.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Read about the this post
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Witer:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Haritha
              </Link>
            </b>
          </span>
          <span>5 day ago</span>
        </div>
        <p className="singlePostDesc">
        A car is a vehicle that has wheels, carries a small number of passengers, 
        and is moved by an engine or a motor. Cars are also called automobiles or 
        motor vehicles. Trucks and buses are motor vehicles as well.
          <br />
          <br />
          An automobile is a self-propelled motor vehicle intended for passenger 
          transportation on land. It usually has four wheels and an internal 
          combustion engine fueled most often by gasoline, a liquid petroleum product.

          <br />
          <br />
          A gasoline car typically uses a spark-ignited internal combustion engine, 
          rather than the compression-ignited systems used in diesel vehicles. In a 
          spark-ignited system, the fuel is injected into the combustion chamber and 
          combined with air. The air/fuel mixture is ignited by a spark from the spark 
          plug.
        </p>
      </div>
    </div>
  );
}
