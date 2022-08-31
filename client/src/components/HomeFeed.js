import FeedOfTweets from "./tweet/FeedOfTweets";

const HomeFeed = ()=>{
    return (
        <>
            <FeedOfTweets url="/api/me/home-feed"/>
        </>
    )
}
export default HomeFeed;