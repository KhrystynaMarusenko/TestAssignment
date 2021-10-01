import React from "react";
import Topic from "./Topic/Topic";

const createArray = (length) => [...Array(length)]

const TopicsList = ({topicsCount = 4}) => {
    return (
        <nav>
            {createArray(topicsCount).map((t, i) => <Topic key={i} topicNumber={i + 1}/>)}
        </nav>
    )
}

export default TopicsList