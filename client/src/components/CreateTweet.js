import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { CurrentUserContext } from "./CurrentUserContext";

const CreateTweet = ({triggerReload, setTriggerReload})=>{
    const {currentUser} = useContext(CurrentUserContext)

    const [postStatus, setPostStatus] = useState("success");

    const [text, setText] = useState("")
    let remainingCharsColor = text.length<225?"":text.length<=280?"yellow":"red";

    const submit = ()=>{
        if(text.length > 280 || text.length == 0)
            return;
        setPostStatus("loading")
        fetch('/api/tweet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({status:text}),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setTriggerReload(!triggerReload)
                setPostStatus("success")
            })
            .catch((error) => {
                console.error('Error:', error);
                setPostStatus("error")
            });
    }

    return (
        <Wrapper>
            <div>
                <img src={currentUser.profile.avatarSrc} alt="Your avatar"/>
                <textarea onChange={(e)=>{setText(e.target.value)}} placeholder="What's happening"></textarea>
            </div>
            <div className="submitSection">
                <span className={remainingCharsColor}>{280-text.length}</span>
                <button onClick={submit} className={text.length > 280 || text.length == 0 > 280?"disabled":""}>Meow</button>
            </div>
            <div className={"center "+ (postStatus==="loading"?"":"hide")}>
                Submitting...
            </div>
            <div className={"center "+ (postStatus==="error"?"":"hide")}>
                Posting failed, please try again.
            </div>
        </Wrapper>
    )
}
export default CreateTweet;
        
const Wrapper = styled.div`

    margin-top: 25px;
    padding-bottom: 25px;
    border-bottom: 10px solid ${COLORS.lightgray};

    img{
        width: 50px;
        border-radius: 30px;
    }

    textarea{
        border: none;
        resize: none;
        margin-left: 15px;
        width: 500px;
        height: 200px;
        font-size: 20px;
        vertical-align: top;
    }

    .submitSection{
        text-align: right;
        margin-top: 15px;
    }

    .submitSection button{
        background: ${COLORS.primary};
        border: none;
        color: white;
        border-radius: 31px;
        padding: 10px 20px;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
    }

    .submitSection button.disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }

    .submitSection span{
        margin-right: 25px;
        color: ${COLORS.gray};
    }

    .submitSection span.yellow{
        color: #acab00;
    }

    .submitSection span.red{
        color: red;
    }
    .hide{
        display: none;
    }
    .center{
        text-align: center;
    }
`