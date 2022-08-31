import { useEffect, useState } from "react";
import Tweet from "./SmallTweet";
import { CircularProgress } from '@mui/material';

const FeedOfTweets = ({tweets, feed})=>{
    return (
        <>
            {feed===null && <CircularProgress/>}
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