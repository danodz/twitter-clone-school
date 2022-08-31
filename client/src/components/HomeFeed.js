import Header from "./Header";
import FeedOfTweets from "./tweet/FeedOfTweets";

const HomeFeed = ()=>{
    return (
        <>
            <Header pageName="Home"/>
            <FeedOfTweets url="/api/me/home-feed"/>
        </>
    )
}
export default HomeFeed;