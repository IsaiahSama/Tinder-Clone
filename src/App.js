import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
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
          <Route path="/" element={[<TinderCards />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
