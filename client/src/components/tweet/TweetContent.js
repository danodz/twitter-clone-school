import styled from "styled-components";

const TweetContent = ({status, medias})=>{
    return (
        <Wrapper>
            <div className="text">{status}</div>
            <div className="media">
                {medias.map((media)=>{
                    return <img key={media.url} src={media.url} alt={"Content"}/>
                })}
            </div>
        </Wrapper>
    )
}
export default TweetContent;

const Wrapper = styled.div`
    margin-top: 15px;

    .media img{
        width: 100%;
        border-radius: 15px;
    }
`