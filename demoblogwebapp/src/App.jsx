import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route index element={<HomePage />}>
              </Route>
          </Routes>
      </Router>
  );
}

export default App
