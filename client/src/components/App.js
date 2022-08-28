import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeFeed from "./HomeFeed.js";
import Notifications from "./Notifications.js";
import Bookmarks from "./Bookmarks.js";
import TweetDetails from "./TweetDetails.js";
import Profile from "./Profile.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeFeed/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/bookmarks" element={<Bookmarks/>}/>
        <Route path="/tweet/:tweetId" element={<TweetDetails/>}/>
        <Route path="/:profileId" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
