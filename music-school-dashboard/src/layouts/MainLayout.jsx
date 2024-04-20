import { Route, Routes, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import LogIn from "@/pages/Login";

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex flex-col bg-custom-gray-light w-screen text-custom-gray p-9">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        {isLoginPage && <Route path="/login" element={<LogIn />} />}
      </Routes>
    </div>
  );
};

export default MainLayout;
