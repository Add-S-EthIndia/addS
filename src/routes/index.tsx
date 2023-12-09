import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Dashboard from "../pages/advertiserDashboard";
// import App from "../App";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
