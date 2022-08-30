import moment from "moment";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";
import RetweetedFrom from "./RetweetedFrom";
import TweetContent from "./TweetContent";

const SoloTweet = ({tweet})=>{
    console.log(tweet, tweet.author)
    return(
        <Wrapper>
            {tweet.retweetFrom && <RetweetedFrom author={tweet.retweetFrom}/>}
            <div className="user">
                <img src={tweet.author.avatarSrc} alt="user avatar"/>
                <div className="userIdentity">
                    <span className="name">{tweet.author.displayName}</span>
                    <p className="handle">@{tweet.author.handle} ·</p>
                </div>
            </div>
            <TweetContent status={tweet.status} medias={tweet.media}/>
            <span className="date">{moment(tweet.timestamp).format("HH:MM A · MMM Do YYYY")}</span>
            <ActionButtons isLiked={tweet.isLiked}/>

        </Wrapper>
    )
}
export default SoloTweet;

const Wrapper = styled.div`
    width: 500px;

    .user img{
        width: 50px;
        border-radius: 30px;
    }

    .userIdentity{
        display: inline-block;
        margin-left: 25px;
    }
    .userIdentity p{
        margin: 0;
    }

    .name{
        font-weight: bold;
    }
    .date{
        color: #393939;
        margin-left: 10px;
    }

`