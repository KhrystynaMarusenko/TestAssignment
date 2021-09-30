import React, {useEffect, useState} from "react";
import {Collapse} from 'react-collapse';
import classes from "./Content.module.css";
import TextContent from "./TextContent/TextContent";
import Arrows from "./Arrows/Arrows";
import CollapsedView from "../../common/CollapsedView/CollapsedView";
import Table from "./Table/Table";

let TABLE_WIDTH = 0;
let TEXT_CONTENT_WIDTH = 0;

const TEXT_ORIENTATION_COLLAPSED_LEFT = {
    writingMode: 'vertical-rl',
    textOrientation: 'mixed'
};
const TEXT_ORIENTATION_COLLAPSED_RIGHT = {
    writingMode: 'vertical-rl',
    textOrientation: 'upright'
};

const Content = () => {

    const [rightArrow, setRightArrow] = useState(false);
    const [leftArrow, setLeftArrow] = useState(true);

    const onRightArrowClick = () => {
        leftArrow ? setLeftArrow(!leftArrow) : setRightArrow(!rightArrow);
    }

    const onLeftArrowClick = () => {
        rightArrow ? setRightArrow(!rightArrow) : setLeftArrow(!leftArrow)
    }


    if (!rightArrow && leftArrow) {
        TABLE_WIDTH = '10%';
        TEXT_CONTENT_WIDTH = '90%'
    } else if (rightArrow && !leftArrow) {
        TABLE_WIDTH = '90%'
        TEXT_CONTENT_WIDTH = '10%'
    } else {
        TABLE_WIDTH = '33%'
        TEXT_CONTENT_WIDTH = '63%'
    }


    return (
        <div className={classes.contentHolder}>

            {!leftArrow &&
            <div style={{width: TABLE_WIDTH}}>
                <Collapse isOpened={!leftArrow}>
                    <Table/>
                </Collapse>
            </div>
            }
            {(TABLE_WIDTH === '10%') && <CollapsedView textOrientation={TEXT_ORIENTATION_COLLAPSED_LEFT}/>}

            <Arrows isRightArrow={rightArrow}
                    isLeftArrow={leftArrow}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}/>

            {!rightArrow &&
            <div style={{width: TEXT_CONTENT_WIDTH}}>
                <Collapse isOpened={!rightArrow}>
                    <TextContent/>
                </Collapse>
            </div>
            }


            {(TEXT_CONTENT_WIDTH === '10%') && <CollapsedView textOrientation={TEXT_ORIENTATION_COLLAPSED_RIGHT}/>}


        </div>
    )
}

export default Content