import { getDataFromApi } from "@/util/getDataFromApi";
import {
  getFromLocalStorage,
  upsertInLocalStorage,
} from "@/util/localStorageUtil";

export const fetchEnrollments = async () => {
  let enrollments = getFromLocalStorage("enrollments");
  if (enrollments && enrollments.length > 0) {
    return enrollments;
  }
  enrollments = await getDataFromApi(
    "https://run.mocky.io/v3/61927f0c-dbfd-4fef-9483-cce4e6b7fe8f"
  );
  upsertInLocalStorage("enrollments", enrollments);
  return enrollments;
};
