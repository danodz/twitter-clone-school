import { useEffect, useState } from "react";
import Tweet from "./SmallTweet";

const FeedOfTweets = ({tweets, feed})=>{
    return (
        <>
            {feed===null && "LOADING"}
            {feed!==null && 
                feed.map((id)=>{
                    const tweet = tweets[id];
                    return <Tweet key={id} tweet={tweet}/>
                })
            }
        </>
    )
}
export default FeedOfTweets;