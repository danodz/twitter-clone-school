import { FaRetweet } from "react-icons/fa";
import styled from "styled-components";

const RetweetedFrom = ({author})=>{
    return (
        <Wrapper>
            <FaRetweet size={14}/> {author.handle} Remeowed
        </Wrapper>
    )
}
export default RetweetedFrom;

const Wrapper = styled.div`
    margin-left: 25px;
`