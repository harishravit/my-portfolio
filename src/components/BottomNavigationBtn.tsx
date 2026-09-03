import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomNavigationBtn({
  varient = "single",
  routes,
  text,
}: {
  varient: string;
  routes: [string, string?];
  text: [string, string?];
}) {
  return varient === "single" ? (
    <div className="flex items-center justify-end">
      <Link
        to={routes[0]}
        className="text-primary hover:text-primary hover:cursor-pointer underline underline-offset-2 py-1 px-2 rounded-full flex gap-x-1 items-center "
      >
        {text[0]}
        <ArrowRight size={16} />
      </Link>
    </div>
  ) : (
    <div className="flex items-center justify-between">
      <Link
        to={routes[0]}
        className="text-primary hover:text-primary hover:cursor-pointer underline underline-offset-2 py-1 px-2 rounded-full flex gap-x-1 items-center "
      >
        <ArrowLeft size={16} />
        {text[0]}
      </Link>
      <Link
        to={routes[1]}
        className="text-primary hover:text-primary hover:cursor-pointer underline underline-offset-2 py-1 px-2 rounded-full flex gap-x-1 items-center "
      >
        {text[1]}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
