import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-navy via-[#002a5c] to-[#001c3d] px-7 pt-13 pb-23 isolate">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-55">
        <svg
          viewBox="0 0 500 200"
          preserveAspectRatio="none"
          className="absolute -bottom-8 -left-[20%] w-[140%] h-auto"
        >
          <motion.path
            d="M0,120 C80,90 160,150 250,120 C340,90 420,150 500,120 L500,200 L0,200 Z"
            fill="#6EC6FF"
            opacity="0.25"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,140 C80,110 160,170 250,140 C340,110 420,170 500,140 L500,200 L0,200 Z"
            fill="#00C2C7"
            opacity="0.3"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -3,
            }}
          />
          <motion.path
            d="M0,160 C80,135 160,185 250,160 C340,135 420,185 500,160 L500,200 L0,200 Z"
            fill="#0057B8"
            opacity="0.35"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -6,
            }}
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <div className="relative mb-6 flex justify-center">
          <div className="absolute h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(110,198,255,0.28)_0%,rgba(110,198,255,0)_70%)]" />
          <img
            src={logo}
            alt="Climarte"
            className="relative w-48 drop-shadow-[0_8px_20px_rgba(0,0,0,0.22)]"
          />
        </div>
      </motion.div>
    </div>
  );
}
