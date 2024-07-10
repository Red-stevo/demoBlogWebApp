import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Home from "./Pages/Home.jsx";
import UserHomePage from "./Pages/UserHomePage.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route index element={<HomePage />}>
                  <Route path={"home"} element={<Home/>} />
                  <Route path={"login"} />
                  <Route path={"register"} />
              </Route>
              <Route path={":username"} element={<UserHomePage />}>

              </Route>
              <Route path={"*"} element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;
