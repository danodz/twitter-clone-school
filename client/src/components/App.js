import {BrowserRouter as Router, Routes, Route, useInRouterContext } from "react-router-dom";
import HomeFeed from "./HomeFeed.js";
import Notifications from "./Notifications.js";
import Bookmarks from "./Bookmarks.js";
import TweetDetails from "./TweetDetails.js";
import Profile from "./Profile.js";
import Sidebar from "./Sidebar.js";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext.js";
import LoadManager from "./LoadManager.js";

function App() {
  const {currentUser, currentUserLoadingStatus} = useContext(CurrentUserContext)

  return (
    <Router>
      <LoadManager status={currentUserLoadingStatus}>
        <Wrapper>
          <div className="leftSide">
            <Sidebar/>
          </div>
          <div className="rightSide">
            <Routes>
              <Route path="/" element={<HomeFeed/>}/>
              <Route path="/notifications" element={<Notifications/>}/>
              <Route path="/bookmarks" element={<Bookmarks/>}/>
              <Route path="/tweet/:tweetId" element={<TweetDetails/>}/>
              <Route path="/:profileId" element={<Profile/>}/>
            </Routes>
          </div>
        </Wrapper>
      </LoadManager>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 850px;
  margin: 0 auto;

  .leftSide{
    width: 250px;
  }
  .rightSide{
    width: 600px;
  }
`