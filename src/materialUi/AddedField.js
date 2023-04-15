import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NoteBlog from "./NoteBlog";
import Masonry from 'react-masonry-css';
import "./layout.css";

const AddedField = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/notes")
      .then((res) => res.json())
      .then((note) => setData(note));
  }, []);

  const handleDelete = async (id) =>{
    await fetch("http://localhost:8080/notes/"+id,{
      method : 'DELETE'
    })

    const newBlogs = data.filter((note) => note.id!=id)
    setData(newBlogs)
  }

  const breakpoints= {
    default : 3,
    1100 :2,
    700 : 1
  }

  return (
    // <Container>
    //   <Grid container spacing={2}>
    //     {data.map((d) => (
    //       <Grid item xs={8} lg={4} md ={6}   key={d.id} >
    //         <NoteBlog d={d} handleDelete={handleDelete}/>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Container>

    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column" 
      >
        {data.map( (d) => (
          <div key={d.id}>
            <NoteBlog d={d} handleDelete={handleDelete}/>
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default AddedField;
