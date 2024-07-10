import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route index element={<HomePage />} >
              </Route>
              <Route path={"*"} element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App
