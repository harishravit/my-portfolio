import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
interface SocialLinks {
  title: string;
  to: string;
}
const socialLinks: SocialLinks[] = [
  {
    title: "Github",
    to: "https://github.com/harishravit",
  },
  {
    title: "Linkedin",
    to: "https://www.linkedin.com/in/harishravit",
  },
  {
    title: "Twitter",
    to: "https://x.com/",
  },
  {
    title: "Instagram",
    to: "https://instagram.com",
  },
];
export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-y-2 w-full px-2 ">
      <h3 className="text-lg md:text-xl font-semibold text-primary">
        Social Links
      </h3>
      <div className="flex flex-col pl-1 gap-y-2">
        {socialLinks.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              color: "black",
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            key={item.title}
            className="flex flex-col gap-y-1"
          >
            <div className="p-1 text-md md:text-lg text-secondary hover:text-primary hover:cursor-pointer font-medium flex justify-between items-center">
              <a className="w-full" target="_blank" href={item.to}>
                {item.title}
              </a>
              <ArrowUpRight className="size-4 md:size-6" />
            </div>
            <hr className="w-full border border-border" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
