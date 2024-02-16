import "./Blogs.css";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";
function Blogs() {
  return (
    <div className="blogs-container">
      <article>
        {blogs.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card" key={item.id} >
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}

export default Blogs;
