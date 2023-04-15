import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="Home">
            <h1>Oops! Page NotFound</h1>
            <Link to="/" >Home</Link>
        </div>
     );
}
 
export default NotFound;