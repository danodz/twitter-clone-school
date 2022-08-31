import {FaRegCommentDots, FaRetweet} from "react-icons/fa"
import {AiOutlineHeart, AiFillHeart, AiOutlineUpload, AiOutlineRetweet} from "react-icons/ai"
import styled from "styled-components";
import { useState } from "react";

const ActionButtons = ({isLiked, isRetweeted, numLikes, numRetweets})=>{
    const [likes, setLikes] = useState(numLikes);
    const [liked, setLiked] = useState(isLiked);

    const preventDefault = (e)=>{
        e.preventDefault();
    }

    const toggleLike = ()=>{
        console.log(liked, likes)
        if(liked){
            setLikes(likes-1);
            setLiked(false);
        } else {
            setLikes(likes+1);
            setLiked(true);
        }
    }

    return (
        <Wrapper>
            <button onClick={preventDefault}><FaRegCommentDots size={14}/></button>
            <button onClick={preventDefault}>
                {isRetweeted?<><FaRetweet size={14}/>{numRetweets}</>:<AiOutlineRetweet/>}
            </button>
            <button onClick={(e)=>{
                toggleLike();
                preventDefault(e);
            }}>
                {liked?<><AiFillHeart size={14}/><span>{likes}</span></>:<AiOutlineHeart size={15}/>}
            </button>
            <button onClick={preventDefault}><AiOutlineUpload size={14}/></button>
        </Wrapper>
    )
}
export default ActionButtons;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;

    button{
        border: none;
        background: none;
        padding: 15px;
        cursor: pointer;
        border-radius: 30px;
        height: 60px;
        width: 60px;
    }

    button:hover{
        background: lightgrey;
    }

    button span{
        margin-left: 5px;
    }
`