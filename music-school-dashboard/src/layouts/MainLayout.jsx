import BestStudents from "../components/BestStudents";
import LatestEnrollments from "../components/LatestEnrollments";
import Overview from "../components/Overview";

const MainLayout = () => {
  return (
    <div className="flex flex-col bg-custom-gray-light w-screen text-custom-gray p-9">
      <Overview />
      <LatestEnrollments />
      <BestStudents />
    </div>
  );
};

export default MainLayout;
