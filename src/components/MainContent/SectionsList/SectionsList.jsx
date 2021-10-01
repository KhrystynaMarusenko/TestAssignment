import React from "react";
import Section from "./Section/Section";
import classes from "./SectionList.module.css";

const createArray = (length) => [...Array(length)]

const SectionsList = ({listCount = 4}) => {
    return (
        <nav className={classes.sectionsListHolder}>
            {createArray(listCount).map((s, i) => <Section key={i} sectionNumber={i + 1}/>)}
        </nav>
    )
}

export default SectionsList