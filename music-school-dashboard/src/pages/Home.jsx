import { LuLayoutGrid } from "react-icons/lu";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-custom-pink-light w-24 h-20 mt-12 rounded">
      <LuLayoutGrid size={24} />
      <div>
        <h1 className="text-custom-pink-dark text-2l font-bold">Home</h1>
      </div>
    </div>
  );
};

export default Home;
