import React from "react";
import classes from "./LeftSide.module.css";
import Logo from "./Logo/Logo";

const LeftSide = () => {
    return (
        <div className={classes.leftSideHolder}>
            <Logo/>
        </div>
    )
}
export default LeftSide