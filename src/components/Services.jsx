import { motion } from "framer-motion";
import { Wind, Refrigerator, Wrench, Check } from "lucide-react";
import { serviceCategories } from "../data/services";

const ICONS = { Wind, Refrigerator, Wrench };

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-6"
    >
      <h3 className="mb-3 px-1 font-display text-[15px] font-bold text-navy">
        Nuestros servicios
      </h3>
      <div className="flex flex-col gap-3">
        {serviceCategories.map((cat) => {
          const Icon = ICONS[cat.icon];
          return (
            <div
              key={cat.id}
              className="rounded-[20px] border-[1.5px] border-[#EDF2F7] bg-white p-4.5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F1FC] text-blue">
                  <Icon size={20} />
                </div>
                <div className="font-display text-[14.5px] font-bold text-dark">{cat.title}</div>
              </div>
              <ul className="flex flex-col gap-1.5 pl-1">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13.5px] text-dark/80">
                    <Check size={14} className="shrink-0 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
