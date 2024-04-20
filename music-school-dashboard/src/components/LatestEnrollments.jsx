import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchEnrollments } from "@/features/enrollment/enrollmentAPI";
import {
  selectEnrollments,
  setEnrollments,
} from "@/features/enrollment/enrollmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const LatestEnrollments = () => {
  const dispatch = useDispatch();
  const enrollments = useSelector(selectEnrollments);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEnrollments();
      dispatch(setEnrollments(data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div className="flex">
        <h3
          className="mt-8 mb-8 text-custom-gray-dark"
          style={{ fontSize: "20px" }}
        >
          LATEST ENROLLMENTS
        </h3>
        <p className="m-auto mr-0 text-custom-pink-dark">View All Courses</p>
      </div>
      <Table className="table-auto bg-custom-blue-gray">
        <TableHeader>
          <TableRow className="border-b border-b-2">
            <TableHead>Enr. No</TableHead>
            <TableHead>S. Name</TableHead>
            <TableHead>C. Name</TableHead>
            <TableHead>Fees</TableHead>
            <TableHead>Enr. Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {enrollments &&
            enrollments.map((enrollment) => (
              <TableRow className="border-b border-b-2" key={enrollment.enrNo}>
                <TableCell>{enrollment.enrNo}</TableCell>
                <TableCell className="max-w-[20px]">
                  {enrollment.sName}
                </TableCell>
                <TableCell className="max-w-[20px]">
                  {enrollment.cName}
                </TableCell>
                <TableCell>{enrollment.fees}</TableCell>
                <TableCell>{enrollment.enrDate}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestEnrollments;
