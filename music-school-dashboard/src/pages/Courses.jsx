import { BsMusicNoteList } from "react-icons/bs";

const Courses = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-custom-pink-light w-24 h-20 mt-8 rounded">
      <BsMusicNoteList size={24} />
      <h1 className="text-custom-pink-dark text-2l font-bold">Courses</h1>
    </div>
  );
};

export default Courses;
