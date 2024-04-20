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
    "https://run.mocky.io/v3/d245cd58-8940-4a55-b645-077754bd18a0"
  );
  upsertInLocalStorage("bestStudents", bestStudents);
  return bestStudents;
};
