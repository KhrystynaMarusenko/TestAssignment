import React from "react";
import classes from "./Section.module.css";

const Section = ({sectionNumber}) => {
    return (
        <a href='#' className={classes.section}>
            Section {sectionNumber}
        </a>
    )
}

export default Section