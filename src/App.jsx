import React, { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Updated imports
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/authprovider";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setUserRole(data.role); // Assuming login data has a 'role' field
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user_role", data.role);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const storedRole = localStorage.getItem("user_role");
    if (accessToken && storedRole) {
      setIsAuthenticated(true);
      setUserRole(storedRole);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to login if not authenticated */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Login handleLogin={handleLogin} />
            ) : userRole === "admin" ? (
              <Navigate to="/admin-dashboard" />
            ) : (
              <Navigate to="/employee-dashboard" />
            )
          }
        />
        {/* Define admin and employee dashboard routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        {/* Catch-all route to redirect to the appropriate dashboard */}
        <Route
          path="*"
          element={
            isAuthenticated ? (
              userRole === "admin" ? (
                <Navigate to="/admin-dashboard" />
              ) : (
                <Navigate to="/employee-dashboard" />
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
