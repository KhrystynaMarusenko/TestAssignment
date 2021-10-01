import React from "react";
import classes from "./CollapsedView.module.css";

const CollapsedView = ({textOrientation, text}) => {
    return (
        <div className={classes.collapsedViewHolder} style={textOrientation}>
            <p>{text}</p>
        </div>
    )
}

export default CollapsedView