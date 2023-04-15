import { useState } from "react";
import { useNavigate } from 'react-router-dom';


import "../index.css";
const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Noah');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,author};

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(
            () => {
                console.log("added");
                navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h1>Add a new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title : </label>
                <input
                    type = "text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog author : </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Noah">Noah</option>
                    <option value="ImagineDragons">ImagineDragons</option>
                </select>
                <button>Add Blog</button>
                <p style={{
                    marginTop : "10px"
                }}>{title}</p>
                <p style={{
                    marginTop : "10px"
                }}>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;