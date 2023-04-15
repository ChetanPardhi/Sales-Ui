import { Link } from "react-router-dom";

const BlogsList = ({ blogs, title, handleDelete }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // const handleDelete=props.handleDelete;

  return (
    <div className="blogs-list">
      <h2
        style={{
          margin: "30px",
        }}
      >
        {title}
      </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            
          </Link>
          <p>Composed by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
