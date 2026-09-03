import { motion } from "motion/react";
import { useState } from "react";
import Tooltip from "./tooltip";

import {
  CssIcon,
  GithubIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  MongoDbIcon,
  MotionIcon,
  MySqlIcon,
  NextjsIcon,
  NodeJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TanstackIcon,
  TypescriptIcon,
  ZodIcon,
} from "./tech-icons";

interface Skill {
  name: string;
  Icon: React.ComponentType;
}

const skills: Skill[] = [
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "JavaScript", Icon: JavascriptIcon },
  { name: "Node.js", Icon: NodeJsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Java", Icon: JavaIcon },
  { name: "Tailwind CSS", Icon: TailwindCssIcon },
  { name: "MongoDB", Icon: MongoDbIcon },
  { name: "MySQL", Icon: MySqlIcon },
  { name: "TypeScript", Icon: TypescriptIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "TanStack", Icon: TanstackIcon },
  { name: "Zod", Icon: ZodIcon },
  { name: "GitHub", Icon: GithubIcon },
  { name: "Motion", Icon: MotionIcon },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-y-2 px-2">
      <h3 className="text-lg md:text-xl font-semibold text-primary">Skills</h3>

      <div
        className="
          grid
          grid-cols-5
          md:grid-cols-4
          lg:grid-cols-5
          gap-2
        "
      >
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="relative"
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Tooltip show={hovered === name}>{name}</Tooltip>

            <motion.button
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                rounded-md
                bg-secondary/7
                p-2
                flex
                items-center
                justify-center
                cursor-pointer
                transition-colors
                hover:bg-secondary/15
              "
            >
              <Icon />
            </motion.button>
          </div>
        ))}
      </div>
    </section>
  );
}
