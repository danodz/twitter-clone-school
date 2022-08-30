import {FaRegCommentDots, FaRetweet} from "react-icons/fa"
import {AiOutlineHeart, AiFillHeart, AiOutlineUpload} from "react-icons/ai"
import styled from "styled-components";

const ActionButtons = ({isLiked})=>{
    return (
        <Wrapper>
            <button><FaRegCommentDots size={14}/></button>
            <button><FaRetweet size={14}/></button>
            <button>
                {isLiked?<AiFillHeart size={14}/>:<AiOutlineHeart size={15}/>}
            </button>
            <button><AiOutlineUpload size={14}/></button>
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
    }

    button:hover{
        background: lightgrey;
    }
`