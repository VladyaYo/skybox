import React, { useEffect } from "react";
import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const ContainerFeed = styled.div`
width: 300px;
margin: 50px 20px;
.timeline-TweetList{
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
width: 90%;
}
`

const TwitterFeed2 = () => {
    return (
        <div className="twitterContainer">
            <div className="twitter-embed">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="TwitterDev"
                    options={{
                        tweetLimit: "10",
                        width: "100%",
                        height: "500"
                    }}
                    theme="white"
                    noHeader="false"
                    noBorders="true"
                    noFooter="false"
                ></TwitterTimelineEmbed>
            </div>
        </div>
    );
};

export default TwitterFeed2;