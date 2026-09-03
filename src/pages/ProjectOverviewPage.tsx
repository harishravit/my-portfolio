import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNavigationBtn from "../components/BottomNavigationBtn";
import projectInfo from "../utils/project-data";
const ROUTE_TITLE = "Problem hub";
export default function ProjectOverview() {
  return (
    <>
      <div className="flex gap-x-2 items-center">
        <div className="flex items-center gap-x-1">
          <Link
            to={"/projects"}
            className="hover:cursor-pointer hover:underline text-secondary text-lg md:text-xl font-medium antialiased"
          >
            Projects
          </Link>
          <ChevronRight className="text-primary size-3 md:size-5" />
          <span className="text-primary text-lg md:text-xl font-medium antialiased">
            {ROUTE_TITLE}
          </span>
        </div>
      </div>
      {projectInfo.map((item) => (
        <div key={item.title} className="flex flex-col gap-y-1 px-4">
          <span className="text-2xl text-primary font-medium">
            {item.title}
          </span>
          <p className="text-secondary">
            See this project{" "}
            <a
              className="underline text-primary font-medium"
              href="http://localhost:5000/demo"
              target="_blank"
            >
              Demo
            </a>
          </p>
          <Link replace={true} to={item.pathLink}></Link>

          {item.description}
        </div>
      ))}
      <BottomNavigationBtn
        varient="single"
        text={["Journey"]}
        routes={["/journey"]}
      />
    </>
  );
}
