import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import "../App.css"

export default function Search(){
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={inputHandler}
          fullWidth
          label="Search"
          
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

