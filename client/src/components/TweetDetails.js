import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BigTweet from "./tweet/BigTweet"
import Error from "./Error"
import LoadManager from "./LoadManager";
import Header from "./Header";

const TweetDetails = ()=>{
    const id = useParams().tweetId;
    const [data, loadingStatus] = useFetch("/api/tweet/" + id);
    return (
        loadingStatus==="loading" ? <CircularProgress/>
        :loadingStatus==="error" ? <Error/>
        :<><Header pageName="Meow"/><BigTweet tweet={data.tweet} /></>
    )
}
export default TweetDetails;