import { AnimatePresence, motion } from "motion/react";

interface TooltipProps {
  show: boolean;
  children: React.ReactNode;
}

export default function Tooltip({ show, children }: TooltipProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 6,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 6,
            scale: 0.96,
          }}
          transition={{
            duration: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-full
            left-1/2
            -translate-x-1/2
            mb-2
            pointer-events-none
            whitespace-nowrap
            rounded-md
            bg-primary
            dark:bg-white
            p-2
            text-xs
            text-white
            dark:text-black
            z-50
          "
        >
          {children}

          <div
            className="
              absolute
              top-full
              left-1/2
              -translate-x-1/2
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
