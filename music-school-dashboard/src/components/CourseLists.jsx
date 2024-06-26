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
import { upsertInLocalStorage } from "@/util/localStorageUtil";

const instrumentOptions = ["Guitar", "Piano", "Violin", "Drums"];
const dayOfWeekOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CourseLists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [addCourse, setAddCourse] = useState({
    id: null,
    name: "",
    description: "",
    instructor: "",
    instrument: "",
    dayOfWeek: "",
    status: "Active",
    price: null,
    noOfStudents: 0,
  });
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

  const handleAddCourse = async () => {
    const allCourses = [...courses, { ...addCourse, id: new Date().getTime() }];
    dispatch(setCourses(allCourses));
    upsertInLocalStorage("courses", allCourses);
    setShowModal(false);
  };

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
    <div className="pt-8">
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
      {/* Show form modal while adding user */}
      {/* TODO: Below modal should be rendered as a different component*/}
      {/* TODO: Need to add validation before storing the value*/}
      <div
        className={`modal ${showModal ? `show d-block` : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Course</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={addCourse.name}
                    onChange={(e) =>
                      setAddCourse({ ...addCourse, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={addCourse.description}
                    onChange={(e) =>
                      setAddCourse({
                        ...addCourse,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="instructor" className="form-label">
                    Instructor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="instructor"
                    value={addCourse.instructor}
                    onChange={(e) =>
                      setAddCourse({ ...addCourse, instructor: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="instrument" className="form-label">
                    Instrument
                  </label>
                  <select
                    className="form-select"
                    id="instrument"
                    value={addCourse.instrument}
                    onChange={(e) =>
                      setAddCourse({ ...addCourse, instrument: e.target.value })
                    }
                  >
                    <option value="">Select Instrument</option>
                    {instrumentOptions.map((instrument) => (
                      <option key={instrument} value={instrument}>
                        {instrument}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="dayOfWeek" className="form-label">
                    Day Of Week
                  </label>
                  <select
                    className="form-select"
                    id="dayOfWeek"
                    value={addCourse.dayOfWeek}
                    onChange={(e) =>
                      setAddCourse({ ...addCourse, dayOfWeek: e.target.value })
                    }
                  >
                    <option value="">Select Day Of Week</option>
                    {dayOfWeekOptions.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={addCourse.price}
                    onChange={(e) =>
                      setAddCourse({ ...addCourse, price: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddCourse}
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button
        className="bg-pink-200 hover:bg-gray-300 text-2l text-black py-3 px-5 float-right mr-8 rounded shadow-2xl"
        style={{ marginTop: "20px" }}
        onClick={() => setShowModal(true)}
      >
        + Add Course
      </button>
    </div>
  );
};

export default CourseLists;
