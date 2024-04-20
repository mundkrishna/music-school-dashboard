import { selectCourses, setCourses } from "@/features/course/courseSlice";
import { upsertInLocalStorage } from "@/util/localStorageUtil";
import PropTypes from "prop-types";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

const ActionMenu = ({ course }) => {
  const { status } = course;
  const [isArchived, setIsArchived] = useState(status === "Archived");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const courses = useSelector(selectCourses);
  const dispatch = useDispatch();
  const menuItems = isArchived
    ? [{ label: "Unarchive Course", status: "Active" }]
    : [
        { label: "Edit Course" },
        { label: "Close Course", status: "Closed" },
        { label: "Archive Course", status: "Archived" },
      ];

  const updateCourseDetails = (courseId, statusLabel) => {
    setIsMenuOpen(false);
    if (!statusLabel) {
      // TODO: Render the modal to edit course details
      return;
    }
    const updatedCourses = courses.map((course) => {
      if (course.id === courseId) {
        return { ...course, status: statusLabel };
      }
      return course;
    });
    upsertInLocalStorage("courses", updatedCourses);
    dispatch(setCourses(updatedCourses));
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          disabled={status === "Closed"}
          onClick={() => {
            setIsArchived(status === "Archived");
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <FiMoreVertical className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => updateCourseDetails(course.id, item.status)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

ActionMenu.propTypes = {
  course: PropTypes.object.isRequired,
};

export default ActionMenu;
