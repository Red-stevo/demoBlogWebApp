import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Home from "./Pages/Home.jsx";
import UserHomePage from "./Pages/UserHomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import UserHomeHeader from "./Components/UserHomeHeader.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path={"/"} element={<HomePage />}>
                  <Route path={"home"} element={<Home/>} />
                  <Route path={"login"} element={<LoginPage />} />
                  <Route path={"register"} />
              </Route>
              <Route path={"user"} element={<UserHomeHeader />}>
                <Route path={"user"} element={<UserHomePage />} />
              </Route>
              <Route path={"*"} element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;
