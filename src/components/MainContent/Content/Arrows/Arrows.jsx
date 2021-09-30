import React from "react";
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/all";
import classes from "./Arrows.module.css";

const Arrows = ({isRightArrow, isLeftArrow, onRightArrowClick, onLeftArrowClick}) => {
    return (
        <div className={classes.arrowsHolder}>
            {!isRightArrow && <span onClick={onRightArrowClick}><IoMdArrowDropright size={'40px'}/></span>}
            {!isLeftArrow && <span onClick={onLeftArrowClick}><IoMdArrowDropleft size={'40px'}/></span>}
        </div>
    )

}

export default Arrows