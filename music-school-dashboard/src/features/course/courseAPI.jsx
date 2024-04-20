import { getDataFromApi } from "@/util/getDataFromApi";
import {
  getFromLocalStorage,
  upsertInLocalStorage,
} from "@/util/localStorageUtil";

export const fetchCourses = async () => {
  let courses = getFromLocalStorage("courses");
  if (courses && courses.length > 0) {
    return courses;
  }
  courses = await getDataFromApi(
    "https://run.mocky.io/v3/1007c5f7-0095-42de-b56c-6a9fae2ce04f"
  );
  upsertInLocalStorage("courses", courses);
  return courses;
};
