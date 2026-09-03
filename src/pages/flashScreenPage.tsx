import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function FlashScreenPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Home");
    }, 2000);
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <span>H</span>
      <motion.span
        initial={{ scale: 1 }}
        animate={{
          scale: 350,
        }}
        transition={{
          delay: 1.99,
        }}
      >
        O
      </motion.span>
    </div>
  );
}
