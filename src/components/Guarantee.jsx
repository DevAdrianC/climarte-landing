import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-6 rounded-[24px] bg-navy p-6 text-center text-white"
    >
      <ShieldCheck size={30} className="mx-auto mb-3 text-sky" />
      <h3 className="mb-2 font-display text-[16px] font-bold">Trabajamos con garantía</h3>
      <p className="mb-4 text-[13.5px] leading-snug text-white/75">
        Cada servicio realizado por Climarte cuenta con garantía según el tipo de trabajo y los
        componentes involucrados.
      </p>
      <div className="flex justify-center gap-3">
        <span className="rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-semibold">
          3 meses
        </span>
        <span className="rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-semibold">
          6 meses
        </span>
      </div>
      <p className="mt-3 text-[11px] text-white/50">Según el trabajo realizado</p>
    </motion.section>
  );
}
