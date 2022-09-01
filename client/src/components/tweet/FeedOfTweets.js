import Tweet from "./SmallTweet";
import useFetch from "../../hooks/useFetch";
import { CircularProgress } from "@mui/material";
import Error from "../Error";
import { useEffect } from "react";

const FeedOfTweets = ({url, triggerReload})=>{
    const [data, status, reload] = useFetch(url);
    useEffect(()=>{
        reload();
    }, [triggerReload])
    return (
        status==="loading" ? <CircularProgress/>
        :status==="error" ? <Error/>
        :<>{data.tweetIds.map((id)=>{
                const tweet = data.tweetsById[id];
                return <Tweet key={id} tweet={tweet}/>
            })}</>
    )
}
export default FeedOfTweets;