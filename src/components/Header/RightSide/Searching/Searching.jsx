import React from "react";
import {AiOutlineSearch} from "react-icons/all";
import classes from "./Searching.module.css"

const Searching = () => {
    return (
        <div className={classes.searchFieldHolder}>
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><AiOutlineSearch color={'#3EA8FF'}/></button>
        </div>
    )
}

export default Searching