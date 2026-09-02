# Climarte — Landing

Migración de la landing de Climarte de HTML plano a React 19 + Vite + Tailwind CSS v4 +
Framer Motion + Lucide React, pensada para usarse con un QR en tarjetas impresas.

## Qué incluye esta entrega

- Todo el contenido de la landing actual (hero, reseña de Google, WhatsApp/Instagram/Ubicación,
  badges de confianza), migrado 1:1 a componentes React.
- **Sección nueva: Servicios detallados**, organizados por categoría (Climatización,
  Refrigeración, Servicio técnico) en vez de la grilla de chips simple.
- **Sección nueva: Garantía**, destacando los plazos de garantía (3 y 6 meses).
- Botón flotante de WhatsApp, siempre visible en mobile.
- Identidad visual (colores, tipografías Montserrat/Inter) idéntica a la actual, centralizada en
  `src/index.css` con `@theme` de Tailwind v4 — para cambiar un color de marca se edita en un
  solo lugar.
- Contenido separado del componente: `src/data/links.js` y `src/data/services.js`, para que
  editar un teléfono, un servicio o un texto no requiera tocar JSX.

## Cómo correrlo localmente

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # genera /dist listo para deployar
npm run preview   # previsualiza el build de producción
```

## Deploy

El build (`npm run build`) genera una carpeta `dist/` estática, deployable directo en
**Vercel** o **Netlify** (arrastrando la carpeta o conectando el repo). Una vez que tengas la URL
final, ese es el link que va en el QR de las tarjetas.

## Qué falta del plan completo (a propósito, para no sobrecargar esta entrega)

Quedó preparada la arquitectura (carpetas `components/` y `data/` separadas) para sumar, cuando
se decida, sin tocar lo ya construido:

- Sección "¿Por qué Climarte?" (diferencial de la marca)
- Sección "Cómo trabajamos" (proceso paso a paso, con línea de tiempo animada)
- Sección "Trabajos realizados" (casos reales con fotos, integrable con Instagram)
- Sección "Pretemporada" con voucher precargado por WhatsApp (campaña de septiembre)
- Sección "Equipos & insumos" (catálogo, cuando arranquen a vender aires nuevos/usados)
- Tracking de conversiones (Meta Pixel + eventos de clic en WhatsApp/presupuesto)
- React Router, si el catálogo crece y necesita rutas propias (`/equipos`, `/insumos`)

## Notas

- El logo se extrajo del HTML original (estaba embebido en base64) y quedó en
  `src/assets/logo.png`.
- Los textos de WhatsApp, el link de reseñas de Google y la dirección están en
  `src/data/links.js` — revisalos antes de deployar por si cambió algo.
