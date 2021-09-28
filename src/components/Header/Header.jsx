import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import classes from "./Header.module.css";
import RightSide from "./RightSide/RightSide";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <LeftSide/>
            <RightSide/>
        </header>
    )
}

export default Header