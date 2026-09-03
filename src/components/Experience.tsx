import { cn } from "@sglara/cn";
import { motion } from "motion/react";
import { useState } from "react";

interface ExperienceContent {
  timeLine: string;
  title: string;
  description: string;
}

const ExperienceContents: ExperienceContent[] = [
  {
    timeLine: "2023-2025",
    title: "Iris js",
    description:
      "Developer-first Express framework with automated routing, validation, and global error handling.",
  },
  {
    timeLine: "2023-2025",
    title: "Problem Hub js",
    description:
      "Developer-first Express framework with automated routing, validation, and global error handling.",
  },
];

export default function Experience() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-y-2 px-2">
      <h3 className="text-lg md:text-xl font-semibold text-primary">
        Experience
      </h3>

      <div className="flex flex-col w-full">
        {ExperienceContents.map((item) => {
          const isHovered = hovered === item.title;

          return (
            <motion.div
              key={item.title}
              layout
              onHoverStart={() => setHovered(item.title)}
              onHoverEnd={() => setHovered(null)}
              onTapStart={() => setHovered(item.title)}
              onTapCancel={() => setHovered(null)}
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 1.01,
              }}
              transition={{
                layout: {
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                },
                duration: 0.2,
              }}
              className={cn(
                "mt-2 rounded-2xl bg-secondary/7 p-3 overflow-hidden",
                "transition-colors duration-200",
              )}
            >
              <span className="text-xs text-secondary">{item.timeLine}</span>

              <h4 className="text-lg text-primary font-medium">{item.title}</h4>

              <p
                className={cn(
                  "text-sm text-primary transition-all duration-300",
                  isHovered ? "line-clamp-none" : "truncate",
                )}
              >
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
