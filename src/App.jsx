import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/authprovider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedinUser, setLoggedinUser] = useState(null);
  const authdata = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedinUser(userData); // Store logged-in user data
    }
    setLocalStorage();
  }, []);

  useEffect(() => {
    if (authdata) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [authdata]);

  const handleLogin = (email, password) => {
    if (authdata && authdata.admin) {
      // Check admin credentials first
      const admin = authdata.admin.find(
        (e) => email === e.email && password === e.password
      );
      if (admin) {
        setUser("admin");
        setLoggedinUser(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        return; // Exit the function if admin credentials are found
      }
    }

    if (authdata && authdata.employees) {
      // Check employee credentials if admin is not found
      const employee = authdata.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedinUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", email: employee.email })
        );
        return; // Exit the function if employee credentials are found
      }
    }

    // If neither admin nor employee is found
    alert("Invalid email or password");
  };
  const handleLogout = () => {
    setUser(null);
    setLoggedinUser(null);
    localStorage.removeItem("loggedInUser"); // Clear the logged-in user from local storage
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedinUser} onLogout={handleLogout} />
      ) : null}
    </>
  );
};

export default App;
