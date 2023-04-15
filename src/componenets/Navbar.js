import '../index.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>MyFirstReact</h1>
            <div className="links">
            <Link to="/" >Home</Link>
            <Link to="/nav" style={{
                color : "white",
                background : "black"
                
            }}>My Blogs</Link>
            <Link to="/create" >AddBlog</Link>
            <Link to="/material" >MaterialUi</Link>
            <Link to="/addblog" >AddedBlogsMui</Link>
        </div>
        </nav>
        
     );
}
 
export default Navbar;