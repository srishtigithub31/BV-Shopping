import React, { Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import "./Search.css";
const Search = () => {
 
   const [keyword, setKeyword] = useState("");
   
  let navigate = useNavigate();
    
    function searchSubmitHandler(e) {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
           navigate('/products');

        }
    }
     
  return (
    <Fragment>
        <MetaData title="Search A Product -- BV Shopping Site" />
        <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
            type="text"
            placeholder="Search a Product ..."
            onChange={(e) => setKeyword(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    </Fragment>
   );

  

 };

 export default Search;