import React from "react";
import classes from "./CollapsedView.module.css";

const CollapsedView = ({textOrientation}) => {
    return (
        <div className={classes.collapsedViewHolder} style={textOrientation}>
            <p>COLLAPSED VIEW</p>
        </div>
    )
}

export default CollapsedView