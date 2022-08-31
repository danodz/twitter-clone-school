import styled from "styled-components";
import {COLORS} from "../constants"

const Header = ({pageName})=>{
    return (
        <Wrapper>
            {pageName}
        </Wrapper>
    )
}
export default Header;

const Wrapper = styled.div`
    padding: 20px;
    border: 1px solid ${COLORS.lightgrey};
    border-top: none;
    font-weight: bold;
    font-size: 20px;
`