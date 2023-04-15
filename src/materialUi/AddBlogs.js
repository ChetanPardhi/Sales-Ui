import {
  Typography,
  ButtonGroup,
  Container,
  Tooltip,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Avatar,
} from "@mui/material";
import Button from "@mui/material/Button";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    background: "red",
    fontSize: 10,
    // color: "red",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  field: {
    marginBottom: 20,
    marginTop: 20,
  },
});

const AddBlogs = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [category, setCategory] = useState("todo");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setAddressError(false);

    if (name === "") {
      setNameError(true);
    }
    if (address === "") {
      setAddressError(true);
    }

    if (name && address) {
      fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, address, category }),
      }).then(() => navigate("/addblog"));
    }
  };
  
  return (
    <Container>
      <Typography
        noWrap
        variant="h6"
        component="h2"
        gutterBottom
        color="rgb(252, 186, 3)"
        align="center"
        fontFamily="Quicksand"
      >
        Hii my name is chetan
      </Typography>
      <Avatar src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.hindustantimes.com%2Fht-img%2Fimg%2F2023%2F04%2F14%2F550x309%2FANI-20230408340-0_1681474230799_1681474230799_1681474259537_1681474259537.jpg&tbnid=DiA7aslm3cYg6M&vet=12ahUKEwia8cykm6v-AhXT03MBHWuMCBwQMygCegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Fcricket%2Fthats-not-normal-australia-great-s-astounding-ms-dhoni-take-after-csk-captain-says-bowlers-will-make-mistake-in-ipl-2023-101681474001726.html&docid=6SvEqEaD0eW75M&w=550&h=309&itg=1&q=dhoni&ved=2ahUKEwia8cykm6v-AhXT03MBHWuMCBwQMygCegUIARDqAQ" />
      <Button
        variant="contained"
        color="error"
        align="center"
        startIcon={<QueryStatsIcon />}
      >
        Press
      </Button>
      <br />
      <br />

      <ButtonGroup
        variant="contained"
        aria-label="outlined secondary button group"
      >
        <Button>One</Button>
        <Button variant="filled">Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br></br>
      <br></br>
      <span
        style={{
          display: "flex",
          allignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Tooltip title="Name">
          <QueryStatsIcon style={{ color: "red" }} />
        </Tooltip>
        <h3>Chetan</h3>
      </span>
      <br />
      <AcUnitIcon color="primary" fontSize="large" />
      <AcUnitIcon color="error" fontSize="small" />
      <AcUnitIcon sx={{ color: "text.secondary" }} />

      <br></br>
      <br></br>
      <Button
        className={classes.btn}
        variant="contained"
        align="center"
        // sx={{ background: "red" }}
        startIcon={<QueryStatsIcon />}
      >
        Press
      </Button>
      <br />
      <br />
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Add Name"
          color="secondary"
          required
          fullWidth
          error={nameError}
        >
          Add your Name
        </TextField>
        <br></br>
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Address"
          color="secondary"
          multiline
          rows={4}
          required
          fullWidth
          error={addressError}
        >
          Add Address
        </TextField>
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel value="xyz" control={<Radio />} label="Xyz" />
            <FormControlLabel value="zyx" control={<Radio />} label="Zyx" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          type="Submit"
          className={classes.btn}
          variant="contained"
          align="center"
          startIcon={<QueryStatsIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddBlogs;
