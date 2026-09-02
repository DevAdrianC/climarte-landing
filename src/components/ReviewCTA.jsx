import { Star } from "lucide-react";
import { googleReviewUrl } from "../data/links";

export default function ReviewCTA() {
  return (
    <a
      href={googleReviewUrl}
      target="_blank"
      rel="noopener"
      className="block rounded-[28px] bg-gradient-to-br from-teal to-blue p-7 text-center shadow-[0_16px_32px_-14px_rgba(0,59,122,0.4)] active:scale-[0.97] transition-transform"
    >
      <div className="mb-2.5 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={20} fill="#FFD84D" stroke="none" />
        ))}
      </div>
      <h2 className="mb-1.5 text-lg font-bold text-white">¿Cómo fue tu experiencia?</h2>
      <p className="mb-4.5 text-[13.5px] leading-snug text-white/90">
        Contanos qué te pareció el servicio.
        <br />
        Tu reseña en Google nos ayuda un montón.
      </p>
      <span className="flex items-center justify-center gap-2.5 rounded-2xl bg-white px-4.5 py-3.5 text-[15px] font-semibold text-navy shadow-[0_10px_20px_-8px_rgba(0,0,0,0.3)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12s3.36-7.27 7.19-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.19 2C6.42 2 2.03 6.8 2.03 12s4.39 10 10.16 10c5.05 0 8.71-3.46 8.71-8.57 0-1.19-.13-1.87-.13-1.87z"
            fill="#4285F4"
          />
        </svg>
        Dejar reseña en Google
      </span>
    </a>
  );
}
