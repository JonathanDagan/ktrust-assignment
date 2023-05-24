import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./views/LoginPage";
import ProfilePage from "./views/ProfilePage";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/users/:id" Component={ProfilePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
