import "./App.css";

// import Footer from "./Components/Pages/Footer";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import EmployeeProductiveDashboard from "./components/EmployeeProductiveDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logo" element={<Login />} />
          <Route
            path="/EmployeeProductiveDashboard"
            element={<EmployeeProductiveDashboard />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//=========================================>>
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
// import EmployeeProductiveDashboard from "./components/EmployeeProductiveDashboard";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/employeeProductiveDashboard"
//           component={EmployeeProductiveDashboard}
//         />
//         <Route
//           path="/forgotPassword"
//           render={() => <div>Forgot Password</div>}
//         />
//         <Route path="/" component={Login} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
