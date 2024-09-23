// import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
// import List from "./List";
// import "../App.css"
// import { createContext } from "react";
// import { useDispatch } from "react-redux";
// import { setSearchQuery } from "../services/searchSlice";
// export const SearchContext = createContext();
// export default function Search(){
//   const [inputText, setInputText] = useState("");
//   const dispatch = useDispatch();
//   let inputHandler = (e) => {
//     //convert input text to lower case

//     var lowerCase = e.target.value.toLowerCase();
    
//     setInputText(lowerCase);
//     dispatch(setSearchQuery(lowerCase));
//   };

//   return (
//     <div className="main">
//       <h1>React Search</h1>
//       <div className="search">
//         <TextField
//           id="outlined-basic"
//           variant="outlined"
//           onChange={inputHandler}
//           fullWidth
//           label="Search"
          
//         />
//       </div>
//       <List input={inputText} />
//     </div>
//   );
// }

import { React,useState} from "react";
import {TextField,InputAdornment} from "@material-ui/core";
import "../App.css"
import './search.css'
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../services/searchSlice";
import SearchIcon from '@mui/icons-material/Search';
export const SearchContext = createContext();
export default function Search(){
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    dispatch(setSearchQuery(lowerCase));
  };

  return (
    <div className="main ">
      <div className="search">
      <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={inputHandler}
          fullWidth
          label="Search"
          placeholder="Type to search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="searchField" // Use this class for additional styling
        />
        </div>
      
    </div>
  );
}
