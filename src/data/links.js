export const whatsappNumber = "5493624812036";
export const whatsappMessage = "Hola Climarte! Vengo de la tarjeta y quiero hacer una consulta";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const googleReviewUrl = "https://g.page/r/CbMYGn8codBOEAI/review";

export const links = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Escribinos ahora",
    href: whatsappUrl,
    icon: "MessageCircle",
    accent: "whatsapp",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@clim.arte",
    href: "https://www.instagram.com/clim.arte",
    icon: "Instagram",
    accent: "instagram",
  },
  {
    id: "location",
    label: "Ubicación",
    value: "Av. Mac Clean 1099, Resistencia",
    href: "https://www.google.com/maps/place/Climarte/@-27.4469371,-59.0101956,17z",
    icon: "MapPin",
    accent: "location",
  },
];
