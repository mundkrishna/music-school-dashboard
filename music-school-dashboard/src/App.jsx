import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./layouts/Sidebar";
import LogIn from "./pages/Login";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="flex">
          <Sidebar />
          <MainLayout />
        </div>
      ) : (
        <LogIn />
      )}
    </BrowserRouter>
  );
}

export default App;
