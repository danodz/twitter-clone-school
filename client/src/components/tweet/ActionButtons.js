import {FaRegCommentDots, FaRetweet} from "react-icons/fa"
import {AiOutlineHeart, AiFillHeart, AiOutlineUpload} from "react-icons/ai"
import styled from "styled-components";

const ActionButtons = ({isLiked})=>{
    const preventDefault = (e)=>{
        e.preventDefault();
    }
    return (
        <Wrapper>
            <button onClick={preventDefault}><FaRegCommentDots size={14}/></button>
            <button onClick={preventDefault}><FaRetweet size={14}/></button>
            <button onClick={preventDefault}>
                {isLiked?<AiFillHeart size={14}/>:<AiOutlineHeart size={15}/>}
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
    }

    button:hover{
        background: lightgrey;
    }
`