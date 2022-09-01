import { useState } from "react";
import CreateTweet from "./CreateTweet";
import Header from "./Header";
import FeedOfTweets from "./tweet/FeedOfTweets";

const HomeFeed = ()=>{
    const [triggerReload, setTriggerReload] = useState(false);

    return (
        <>
            <Header pageName="Home"/>
            <CreateTweet triggerReload={triggerReload} setTriggerReload={setTriggerReload}/>
            <FeedOfTweets triggerReload={triggerReload} url="/api/me/home-feed"/>
        </>
    )
}
export default HomeFeed;