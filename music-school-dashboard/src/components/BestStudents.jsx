import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchBestStudents } from "@/features/bestStudent/bestStudentAPI";
import {
  selectBestStudents,
  setBestStudents,
} from "@/features/bestStudent/bestStudentSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BestStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectBestStudents);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBestStudents();
      dispatch(setBestStudents(data));
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
          BEST STUDENTS
        </h3>
        <p className="m-auto mr-0 text-custom-pink-dark">View All Students</p>
      </div>
      <Table className="table-auto bg-custom-blue-gray">
        <TableHeader>
          <TableRow className="border-b border-b-2">
            <TableHead>Reg. No</TableHead>
            <TableHead>F. Name</TableHead>
            <TableHead>L. Name</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Total Fees</TableHead>
            <TableHead>Reg. Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students &&
            students.map((student) => (
              <TableRow className="border-b border-b-2" key={student.regNo}>
                <TableCell>{student.regNo}</TableCell>
                <TableCell>{student.fName}</TableCell>
                <TableCell>{student.lName}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.totalFees}</TableCell>
                <TableCell>{student.regDate}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BestStudents;
