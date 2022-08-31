import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";
import RetweetedFrom from "./RetweetedFrom";
import TweetContent from "./TweetContent";

const SmallTweet = ({tweet})=>{
    const navigate = useNavigate();

    const navigateToAuthor = (e)=>{
        navigate("/"+tweet.author.handle)
        e.preventDefault();
    }

    return ( <>
        {tweet.retweetFrom && <RetweetedFrom author={tweet.retweetFrom}/>}
        <Wrapper>
            <Link to={"/tweet/"+tweet.id}>
                <div className="userImg">
                    <img src={tweet.author.avatarSrc} alt="user avatar"/>
                </div>
                <div className="tweet">
                    <div>
                        <div className="author" onClick={navigateToAuthor}>
                            <span className="name">{tweet.author.displayName}</span>
                            <span className="handle">@{tweet.author.handle} ·</span>
                        </div>
                        <span className="date">{moment(tweet.timestamp).format("MMM Do")}</span>
                    </div>
                    <TweetContent status={tweet.status} medias={tweet.media}/>
                    <ActionButtons isLiked={tweet.isLiked}/>
                </div>
            </Link>
        </Wrapper>
    </>)
}
export default SmallTweet;

const Wrapper = styled.div`
    display: flex;
    width: 600px;
    border-bottom: 1px solid grey;
    margin-bottom: 25px;
    cursor: pointer;

    .userImg img{
        width: 50px;
        border-radius: 30px;
    }

    .name{
        font-weight: bold;
    }
    .handle,.date{
        color: #393939;
    }
    .handle{
        margin-left: 10px;
    }

    .author:hover span{
        text-decoration: underline;
    }
`