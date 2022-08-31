import moment from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";
import ActionButtons from "./ActionButtons";
import RetweetedFrom from "./RetweetedFrom";
import TweetContent from "./TweetContent";

const BigTweet = ({tweet})=>{
    return(
        <Wrapper>
            {tweet.retweetFrom && <RetweetedFrom author={tweet.retweetFrom}/>}
            <div className="user">
                <img src={tweet.author.avatarSrc} alt="user avatar"/>
                <div className="userIdentity">
                    <Link to={"/"+tweet.author.handle}>
                        <span className="name">{tweet.author.displayName}</span>
                        <p className="handle">@{tweet.author.handle}</p>
                    </Link>
                </div>
            </div>
            <TweetContent status={tweet.status} medias={tweet.media}/>
            <span className="date">{moment(tweet.timestamp).format("HH:MM A · MMM Do YYYY")}</span>
            <ActionButtons isLiked={tweet.isLiked} isRetweeted={tweet.isLiked} numLikes={tweet.numLikes} numRetweets={tweet.numRetweets}/>

        </Wrapper>
    )
}
export default BigTweet;

const Wrapper = styled.div`
    width: 600px;
    border: 1px solid ${COLORS.lightgray};
    border-top: none;
    padding: 10px;

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

    a:hover *{
        text-decoration: underline;
    }
`