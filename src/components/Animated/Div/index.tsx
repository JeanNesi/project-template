import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

interface IAnimatedDiv extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hidden?: boolean;
}

export const AnimatedDiv = ({
  children,
  hidden = false,
  ...props
}: IAnimatedDiv) => (
  <AnimatePresence mode="wait">
    {!hidden && (
      <motion.div
        style={{
          width: "100%",
        }}
        {...props}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
