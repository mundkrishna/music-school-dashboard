import { getDataFromApi } from "@/util/getDataFromApi";
import {
  upsertInLocalStorage,
  getFromLocalStorage,
} from "@/util/localStorageUtil";

export const fetchBestStudents = async () => {
  let bestStudents = getFromLocalStorage("bestStudents");
  if (bestStudents && bestStudents.length > 0) {
    return bestStudents;
  }
  bestStudents = await getDataFromApi(
    "https://run.mocky.io/v3/f78f01e8-1488-42db-89d7-1daf8563adee"
  );
  upsertInLocalStorage("bestStudents", bestStudents);
  return bestStudents;
};
