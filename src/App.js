import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
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
        <Header />
        <Routes>
          <Route path="/chat" element={[]} />
          <Route path="/" element={[<TinderCards />, <SwipeButtons />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
