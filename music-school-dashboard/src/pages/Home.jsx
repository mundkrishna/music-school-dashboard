import LatestEnrollments from "@/components/LatestEnrollments";
import BestStudents from "@/components/BestStudents";
import Overview from "@/components/Overview";

const Home = () => {
  return (
    <div>
      <Overview />
      <LatestEnrollments />
      <BestStudents />
    </div>
  );
};

export default Home;
