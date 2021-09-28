import React from "react";
import Topic from "./Topic/Topic";

const createArray = (length) => [...Array(length)]

const TopicsList = ({topicsCount = 4}) => {
    return (
        <div>
            {createArray(topicsCount).map((t, i) => <Topic key={i} topicNumber={i + 1}/>)}
        </div>
    )
}

export default TopicsList