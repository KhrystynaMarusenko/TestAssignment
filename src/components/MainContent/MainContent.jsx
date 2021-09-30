import React from "react";
import SectionsList from "./SectionsList/SectionsList";
import Content from "./Content/Content";
import classes from "./MainContent.module.css";

const MainContent = () => {
    return(
        <main className={classes.mainContentHolder}>
            <SectionsList/>
            <Content/>
        </main>
    )
}
export default MainContent