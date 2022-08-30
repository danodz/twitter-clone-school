import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SoloTweet from "./tweet/SoloTweet"

const TweetDetails = ()=>{
    const [tweet, setTweet] = useState(null);
    const id = useParams().tweetId;

    useEffect(()=>{
        fetch("/api/tweet/" + id)
        .then((res)=>res.json())
        .then((data)=>{
            setTweet(data.tweet)
        })
    }, [])


    return (
        <>
            {tweet ? <SoloTweet tweet={tweet} />: "LOADING"}
        </>
    )
}
export default TweetDetails;