import { useEffect, useState } from "react";
import "../index.css";
import BlogsList from "./BlogsList";
import useFetch from "../loading/useFetch";

const Home = () => {
  // const [name, setName] = useState("chetan");

  // const [age, setAge] = useState(21);

//   const [blogs, setBlog] = useState();

  // const handleClick = () => {
  //   setName("Shikhar");
  //   setAge(22);
  // };

  // const handleClickAgain = (name) => {
  //   console.log("hello " + name);
  // };

  const [active, setActive] = useState();

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

//   const [isPending, setPending] = useState(true);
//   const [error, setError] = useState();

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("http://localhost:8000/blogs")
//         .then((res) => {
//             if(!res.ok){
//                 throw Error('could not fetch data from api');
                
//             }
//           return res.json();
//         })
//         .then((data) => {
//           setBlog(data);
//           setPending(false);
//           setError(null);
//         })
//         .catch( err => {
//             setPending(false);
//             setError(err.message);
//         });
//     },1000);
//   }, []);

const {data : blogs, isPending, error, setBlog} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      <h1>Home Component</h1>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading....</h2>}

      {/* <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('chetan')}>Click me</button>
            <p>{name} is {age} years old</p> */}

      {blogs && (
        <BlogsList
          blogs={blogs}
          title={"All Songs"}
          handleDelete={handleDelete}
        />
      )}

      {/*  On click a compoenet should render */}

      <button onClick={() => setActive("First")}> Click Here</button>
      {active === "First" && (
        <BlogsList
          blogs={blogs.filter((blog) => blog.author === "Noah")}
          title={"Noah's Song"}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
