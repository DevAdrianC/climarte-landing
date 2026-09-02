import { ShieldCheck, Users, Award } from "lucide-react";
import { badges } from "../data/services";

const ICONS = { ShieldCheck, Users, Award };

export default function Badges() {
  return (
    <div className="mb-6 grid grid-cols-3 gap-2">
      {badges.map((badge) => {
        const Icon = ICONS[badge.icon];
        return (
          <div
            key={badge.label}
            className="flex flex-col items-center gap-1.5 rounded-2xl bg-white p-3 text-center"
          >
            <Icon size={22} className="text-blue" />
            <span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.02em] text-[#6B7688]">
              {badge.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
