import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        {/* Tinder Cards */}
        {/* Buttons Below cards  */}

        {/* Chats Screen */}
        {/* Individual Chat Screen  */}

        <Routes>
          <Route
            path="/chat/:person"
            element={[<Header backButton="/chat" />, <ChatScreen />]}
          />
          <Route
            path="/chat"
            element={[<Header backButton="/" />, <Chats />]}
          />
          <Route
            path="/"
            element={[<Header />, <TinderCards />, <SwipeButtons />]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
