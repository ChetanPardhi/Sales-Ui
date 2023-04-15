import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../loading/useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data : blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method : 'DELETE'
        }).then(
            navigate('/')
        )
    }

    return ( 
        <div className="Home">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h1>{ blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;