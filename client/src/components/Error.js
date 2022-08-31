import { FaBomb } from "react-icons/fa";
import styled from "styled-components";
import Header from "./Header";

const Error = ()=>{
    return (
        <Wrapper>
            <FaBomb size={50}/>
            <h1>An unknown error has occured.</h1>
            <p>
                Please try refreshing the page, or <a href="#">contact support</a> if the problem persists
            </p>
        </Wrapper>
    )
}
export default Error;

const Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;


    h1{
        font-weight: bold;
        font-size: 30px;
        margin: 25px 0;
    }

    p{
        text-align: left;
    }

    a{
        color: blue;
        text-decoration: underline;
    }
`