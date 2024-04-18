import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserGroup } from "react-icons/fa6";

const overviewData = [
  { id: 1, description: "total number of students", value: 164 },
  { id: 2, description: "total number of courses", value: 12 },
  { id: 3, description: "total amount earned", value: 2000 },
  { id: 4, description: "Best performing course", value: "Guitar" },
  { id: 5, description: "Worst performing course", value: "Flute" },
];

const Overview = () => {
  return (
    <div className="pt-8">
      <h2
        className="font-bold mb-8 text-custom-gray-dark"
        style={{ fontSize: "28px" }}
      >
        Overview
      </h2>
      <div className="flex gap-3">
        {overviewData &&
          overviewData.map((data) => (
            <Card
              key={data.id}
              className="flex h-32 pt-6"
              style={{ width: "275px" }}
            >
              <CardHeader>
                <FaUserGroup />
              </CardHeader>
              <CardContent>
                <CardTitle>{data.value}</CardTitle>
                <div className="flex flex-col">
                  <CardDescription>{data.description}</CardDescription>
                  <p className="ml-auto text-custom-pink-dark">view</p>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Overview;
