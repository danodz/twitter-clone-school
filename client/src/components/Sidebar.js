import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import {CgProfile} from "react-icons/cg";
import {IoMdNotificationsOutline} from "react-icons/io"
import {BsBookmark} from "react-icons/bs"

import {COLORS} from "../constants"

const Sidebar = ()=>{
    return (
        <Wrapper>
            <NavLink to="/"><FiHome size={25}/>Home</NavLink>
            <NavLink to="/:temp"><CgProfile size={25}/>Profile</NavLink>
            <NavLink to="/notifications"><IoMdNotificationsOutline size={25}/>Notifications</NavLink>
            <NavLink to="/bookmarks"><BsBookmark size={25}/>Bookmarks</NavLink>
        </Wrapper>
    )
}
export default Sidebar;

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;

    a{
        font-weight: bold;
        text-decoration: none;
        padding: 25px;
        border-radius: 20px;
        color: black;
        width: fit-content;
    }
    a:hover{
        background-color: ${COLORS.primaryTransparent};
    }
    a:hover,a.active{
        color: ${COLORS.primary}
    }
    svg{
        margin-right: 25px;
    }
`