import { useEffect, useState } from "react";
import FeedOfTweets from "./tweet/FeedOfTweets";

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
            <FeedOfTweets tweets={tweets} feed={feed}/>
        </>
    )
}
export default HomeFeed;