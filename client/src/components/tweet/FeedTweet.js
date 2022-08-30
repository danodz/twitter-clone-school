import moment from "moment";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";
import RetweetedFrom from "./RetweetedFrom";
import TweetContent from "./TweetContent";

const FeedTweet = ({tweet})=>{
    return ( <>
        {tweet.retweetFrom && <RetweetedFrom author={tweet.retweetFrom}/>}
        <Wrapper>
            <div className="userImg">
                <img src={tweet.author.avatarSrc} alt="user avatar"/>
            </div>
            <div className="tweet">
                <div className="author">
                    <span className="name">{tweet.author.displayName}</span>
                    <span className="handle">@{tweet.author.handle} ·</span>
                    <span className="date">{moment(tweet.timestamp).format("MMM Do")}</span>
                </div>
                <TweetContent status={tweet.status} medias={tweet.media}/>
                <ActionButtons isLiked={tweet.isLiked}/>
            </div>
        </Wrapper>
    </>)
}
export default FeedTweet;

const Wrapper = styled.div`
    display: flex;
    width: 500px;
    border-bottom: 1px solid grey;
    margin-bottom: 25px;

    .userImg img{
        width: 50px;
        border-radius: 30px;
    }

    .name{
        font-weight: bold;
    }
    .handle,.date{
        color: #393939;
        margin-left: 10px;
    }

`