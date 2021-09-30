import React from "react";
import Section from "./Section/Section";
import classes from "./SectionList.module.css";

const createArray = (length) => [...Array(length)]

const SectionsList = ({listCount = 4}) => {
    return (
        <div className={classes.sectionsListHolder}>
            {createArray(listCount).map((s, i) => <Section key={i} sectionNumber={i + 1}/>)}
        </div>
    )
}

export default SectionsList