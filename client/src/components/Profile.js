import { useParams } from "react-router-dom";
import styled from "styled-components";
import FeedOfTweets from "./tweet/FeedOfTweets";
import {COLORS} from "../constants"
import moment from "moment";
import {GoLocation} from "react-icons/go"
import {AiOutlineCalendar} from "react-icons/ai"
import { CircularProgress } from "@mui/material";
import useFetch from "../hooks/useFetch";
import Error from "./Error"
import LoadManager from "./LoadManager";

const Profile = ()=>{
    const handle = useParams().profileId;
    const [data, loadingStatus] = useFetch(`/api/${handle}/profile`)
    const profile = data?data.profile:null;
    return (
            loadingStatus==="loading" ? <CircularProgress/>
            :loadingStatus==="error" ? <Error/>
            :<Wrapper>
                <img className="banner" src={profile.bannerSrc}/>
                <div className="avatarFollow">
                    <img className="avatar" src={profile.avatarSrc}/>
                    <button className="follow">{profile.isBeingFollowedByYou?"Following":"Follow"}</button>
                </div>
                <div>
                    <h1>{profile.displayName}</h1>
                    <h2>
                        @{profile.handle}
                        {profile.isFollowingYou && <span>Follows you</span>}
                    </h2>
                    <p>{profile.bio}</p>
                    <p>
                        <span className="location"><GoLocation/>{profile.location}</span>
                        <span className="joined"><AiOutlineCalendar/>Joined {moment(profile.joined).format("MMMM YYYY")}</span>
                    </p>
                    <p>{profile.numFollowing} Following {profile.numFollowers} Followers</p>
                </div>
                <div className="sectionBtns">
                    <button className="active">Tweets</button>
                    <button>Media</button>
                    <button>Likes</button>
                </div>
                <FeedOfTweets url={`/api/${handle}/feed`}/>
            </Wrapper>
    )
}
export default Profile;

const Wrapper = styled.div`
    .avatarFollow{
        display: flex;
        justify-content: space-between;
    }

    img.banner{
        width: 100%;
        max-height: 200px;
    }

    img.avatar{
        margin-top: -100px;
        border-radius: 175px;
        border: 2px solid white;
        width: 200px;
        margin-left: 25px;
    }

    .follow{
        background: blue;
        height: fit-content;
        padding: 10px 25px;
        color: white;
        border-radius: 20px;
        font-weight: bold;
        font-size: 20px;
        margin-top: 25px;
        border: none;
        cursor: pointer;
    }

    h1{
        font-weight: bold;
        font-size: 20px;
    }
    h2{
        color: ${COLORS.grey};
    }
    h2 span{
        background: lightgrey;
        border-radius: 10px;
        padding: 2px 5px;
    }

    p {
        margin: 25px 0;
    }

    .location, .joined{
        color: ${COLORS.grey};
    }
    .joined{
        margin-left: 25px;
    }

    .sectionBtns{
        margin-bottom: 25px;
    }

    .sectionBtns button{
        color: gray;
        width: 33%;
        border: none;
        border-bottom-color: currentcolor;
        border-bottom-style: none;
        border-bottom-width: medium;
        border-bottom: 1px solid gray;
        background: none;
        font-size: 20px;
        font-weight: bold;
        padding: 25px 0;
        cursor: pointer;
    }

    .sectionBtns button.active{
        color: blue;
        border-bottom: 1px solid blue;
    }
`