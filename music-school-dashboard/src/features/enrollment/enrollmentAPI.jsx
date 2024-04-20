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
    "https://run.mocky.io/v3/e42128da-7f62-4a40-80e2-05689ef3bcff"
  );
  upsertInLocalStorage("enrollments", enrollments);
  return enrollments;
};
