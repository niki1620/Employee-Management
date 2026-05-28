import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";

import Navbar from "./components/Navbar";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/employees"
          element={<Employees />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;