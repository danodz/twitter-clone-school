import Tweet from "./SmallTweet";
import useFetch from "../../hooks/useFetch";
import { CircularProgress } from "@mui/material";
import Error from "../Error";

const FeedOfTweets = ({url})=>{
    const [data, status] = useFetch(url);
    
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