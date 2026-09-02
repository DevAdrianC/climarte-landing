import { MessageCircle, Instagram, MapPin, ChevronRight } from "lucide-react";
import { links } from "../data/links";

const ICONS = { MessageCircle, Instagram, MapPin };

const ACCENTS = {
  whatsapp: "bg-[#E7F8F0] text-[#25D366]",
  instagram: "bg-[#FDEEF4] text-[#D6249F]",
  location: "bg-[#E8F1FC] text-blue",
};

export default function LinksList() {
  return (
    <div className="mb-6 flex flex-col gap-3">
      {links.map((link) => {
        const Icon = ICONS[link.icon];
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3.5 rounded-[20px] border-[1.5px] border-[#EDF2F7] bg-white p-4 transition-[transform,border-color,box-shadow] active:scale-[0.97] hover:border-sky hover:shadow-[0_8px_18px_-10px_rgba(0,59,122,0.25)]"
          >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${ACCENTS[link.accent]}`}>
              <Icon size={22} />
            </div>
            <div className="flex-1">
              <div className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#8A93A3]">
                {link.label}
              </div>
              <div className="text-[14.5px] font-semibold">{link.value}</div>
            </div>
            <ChevronRight size={20} className="text-[#C4CCD6]" />
          </a>
        );
      })}
    </div>
  );
}
