import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Offer from "./pages/Offer";
import StyledNavBar from "./component/StyledNavBar";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/layout"
          element={
            <StyledNavBar />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="offers" element={<Offer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
