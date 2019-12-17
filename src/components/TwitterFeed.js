import React, { useEffect } from "react";
import styled from "styled-components";


const ContainerFeed = styled.div`
width: 300px;
.timeline-TweetList{
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
width: 90%;
}
`

const TwitterFeed = () => {
    useEffect(() => {
        const anchor = document.createElement("a");
        anchor.setAttribute("class", "twitter-timeline");
        anchor.setAttribute("data-theme", "white");
        anchor.setAttribute("align", "left");
        anchor.setAttribute("data-tweet-limit", "10");
        anchor.setAttribute("data-chrome", "noheader nofooter noborders");
        anchor.setAttribute("href", "https://twitter.com/skybox");
        document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <ContainerFeed className="twitterContainer">
            <div className="twitter-embed"></div>
        </ContainerFeed>
    );
};

export default TwitterFeed;