import { useEffect, useState } from "react";
import Tweet from "./tweet/FeedTweet";

const HomeFeed = ()=>{
    const [tweets, setTweets] = useState(null);
    const [feed, setFeed] = useState(null);

    useEffect(()=>{
        fetch("/api/me/home-feed")
        .then((res)=>res.json())
        .then((data)=>{
            setTweets(data.tweetsById)
            setFeed(data.tweetIds)
        })
    }, [])
    

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
export default HomeFeed;