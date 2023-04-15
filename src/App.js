import Navbar from "./componenets/Navbar";
import Home from "./componenets/Home";

import { Routes, Route } from "react-router-dom";
import BlogDetails from "./componenets/BlogDetails";
import Create from "./componenets/Create";
import NotFound from "./componenets/NotFound";
import AddBlogs from "./materialUi/AddBlogs";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import AddedField from "./materialUi/AddedField";
import Layout from "./materialUi/Layout";

const theme = createTheme({
  typography: {
    fontFamily: "QuickSand",
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <Navbar />
      <Layout>
      
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/nav" element={<Navbar />} />
          <Route path="/addblog" element={<AddedField />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/material" element={<AddBlogs />}>
            {" "}
          </Route>
          <Route path="*" element={<NotFound />}>
            {" "}
          </Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
