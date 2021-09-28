import React from "react";
import classes from "./Topic.module.css"

const Topic = ({topicNumber}) => {
    return (
        <a className={classes.topic}>
            Topic {topicNumber}
        </a>
    )
}

export default Topic