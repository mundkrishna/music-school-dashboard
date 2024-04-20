import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { BsMusicNoteList } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { IoIosLogOut } from "react-icons/io";
import { signOutFromLocalStorage } from "@/util/localStorageUtil";

const pages = [
  { name: "Home", path: "/", icon: <LuLayoutGrid size={24} /> },
  { name: "Courses", path: "/courses", icon: <BsMusicNoteList size={24} /> },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    signOutFromLocalStorage();
    dispatch(logout());
  };

  return (
    <div className="bg-white border-r border-r-2 h-screen p-3 pt-8 w-32">
      <RiNeteaseCloudMusicLine
        size={64}
        color="#424242"
        style={{ marginLeft: "15px" }}
      />
      {pages.map((page) => (
        <div
          key={page.path}
          className="flex flex-col items-center justify-center bg-custom-pink-light hover:bg-gray-300 w-20 h-16 mt-12 rounded"
        >
          {page.icon}
          <NavLink
            to={page.path}
            activeclassname="bg-gray-300"
            className="text-custom-pink-dark hover:text-gray-500 text-2l font-bold"
          >
            {page.name}
          </NavLink>
        </div>
      ))}
      {isLoggedIn && (
        <div
          style={{ position: "fixed", bottom: "0", width: "100%" }}
          className="my-10 mx-3"
        >
          <Button
            onClick={handleLogout}
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-3"
          >
            <IoIosLogOut size={24} />
          </Button>
          <p className="text-sm text-gray-500">Logout</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
