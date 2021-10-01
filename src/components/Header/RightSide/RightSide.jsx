import React from "react";
import classes from "./RightSide.module.css"
import TopicsList from "./TopicsList/TopicsList";
import Searching from "./Searching/Searching";

const RightSide = () => {
    return (
        <div className={classes.rightSideHolder}>
            <TopicsList/>
            <Searching/>
        </div>
    )
}

export default RightSide