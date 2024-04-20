import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { selectCourses, setCourses } from "@/features/course/courseSlice";
import { useEffect, useState } from "react";
import { fetchCourses } from "@/features/course/courseAPI";
import ActionMenu from "./ActionMenu";

const CourseLists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCourses();
      dispatch(setCourses(data));
    };
    fetchData();
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    Object.values(course).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const getStatusColor = (status) => {
    status = status && status.toLowerCase();
    switch (status) {
      case "active":
        return "bg-green-200";
      case "closed":
        return "bg-red-200";
      case "archived":
        return "bg-gray-200";
      default:
        return "";
    }
  };

  return (
    <div className="pt8">
      <h2
        className="font-bold mb-8 text-custom-gray-dark"
        style={{ fontSize: "28px" }}
      >
        Courses
      </h2>
      <div className="flex justify-between">
        <h3
          className="mt-3 mb-8 text-custom-gray-dark"
          style={{ fontSize: "20px" }}
        >
          COURSE LIST
        </h3>
        <Input
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
          className="w-64"
        />
      </div>
      <Table className="table-auto bg-custom-blue-gray">
        <TableHeader>
          <TableRow className="border-b border-b-2">
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Instrument</TableHead>
            <TableHead>Day Of Week</TableHead>
            <TableHead># of Students</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCourses &&
            filteredCourses.map((course) => (
              <TableRow key={course.id} className="border-b border-b-2">
                <TableCell className="max-w-[200px]">{course.name}</TableCell>
                <TableCell className="max-w-[50px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {course.description}
                </TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>{course.instrument}</TableCell>
                <TableCell>{course.dayOfWeek}</TableCell>
                <TableCell>{course.noOfStudents}</TableCell>
                <TableCell>{course.price}</TableCell>
                <TableCell
                  className={`max-w-[50px] overflow-hidden whitespace-nowrap overflow-ellipsis`}
                >
                  <div
                    className={`w-16 h-8 rounded-full text-center ${getStatusColor(
                      course.status
                    )}`}
                  >
                    {course.status}
                  </div>
                </TableCell>
                <TableCell>
                  <ActionMenu course={course || {}} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div>
        <button
          className="bg-pink-200 hover:bg-gray-300 text-2l text-black py-5 px-8 float-right mr-10 rounded shadow-2xl"
          style={{ marginTop: "20px" }}
        >
          + Add Course
        </button>
      </div>
    </div>
  );
};

export default CourseLists;
