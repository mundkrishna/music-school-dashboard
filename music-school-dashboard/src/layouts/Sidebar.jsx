import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import Home from "../pages/Home";
import Courses from "../pages/Courses";

const Sidebar = () => {
  return (
    <div className="bg-white border-r border-r-2 h-screen p-3 pt-8 w-32">
      <RiNeteaseCloudMusicLine
        size={64}
        color="#424242"
        style={{ marginLeft: "15px" }}
      />
      <Home />
      <Courses />
    </div>
  );
};

export default Sidebar;
