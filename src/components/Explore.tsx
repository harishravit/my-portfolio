import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface ExploreNavigation {
  pathTitle: string;
  to: string;
}
const RoutesPath: ExploreNavigation[] = [
  {
    pathTitle: "Projects",
    to: "/projects",
  },
  {
    pathTitle: "Journey",
    to: "/journey",
  },
  {
    pathTitle: "Blog",
    to: "/blog",
  },
];
export default function Explore() {
  return (
    <div className="flex flex-col gap-y-2 w-full px-2 ">
      <h3 className="text-lg md:text-xl font-semibold text-primary">Explore</h3>
      <div className="flex flex-col pl-1 gap-y-2">
        {RoutesPath.map((item, _index) => (
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            key={item.pathTitle}
            className="flex flex-col gap-y-1"
          >
            <div className="p-1 text-md md:text-lg text-secondary hover:text-primary hover:cursor-pointer font-medium flex justify-between items-center gap-x-1">
              <Link className="w-full" to={item.to}>
                <span>{item.pathTitle}</span>
              </Link>
              <ArrowUpRight className="size-4 md:size-6" />
            </div>
            <hr className="w-full border border-border" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
