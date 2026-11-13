# artedeastro · web

Web de **artedeastro** (Eva): tarot de Thoth, astrología y arte en Barcelona. Publicada en https://artedeastro.com con GitHub Pages desde la rama `main`.

HTML, CSS y JavaScript sin dependencias ni paso de compilación.

## Estructura
- `index.html`: inicio (portada, sesiones, Eva, obra, eventos, joyería y contacto).
- `sesiones.html`: detalle de las cuatro sesiones (sin precios: el botón abre WhatsApp para consultar y reservar) y preguntas frecuentes.
- `estilos.css` y `site.js`: diseño «C · Arte», salido del Design Lab (repositorio `artedeastro-design-lab`).
- `aviso-legal.html`, `privacidad.html`, `cookies.html` y `legal.css`: páginas legales.
- `img/`: foto de Eva y cuatro cuadros. `favicon.svg`: el logo.

## Contacto
Los enlaces con `data-wa` abren WhatsApp con el mensaje ya escrito para Eva (`site.js`). No hay servidor propio.

## Testimonios (aprobación con un clic)
Las clientas envían su testimonio desde `testimonio.html`: `site.js` lo manda por POST a un Google Form de la cuenta de Eva (`artedeastrologia@gmail.com`), que lo guarda en la hoja «Testimonios artedeastro (respuestas)». En esa hoja, la casilla **Aprobado** (última columna) decide qué se publica: la pestaña «Publicados» filtra solo las aprobadas y está publicada como CSV; la web lo lee al cargar (caché de unos minutos). Eva recibe un correo por cada envío nuevo. Para retirar uno, desmarcar la casilla. No hay claves: los identificadores del formulario y la URL del CSV están en `site.js` y no son secretos.

## Diseño anterior
La versión previa está en la etiqueta `diseno-anterior-2026-11-06`.

## Pendiente
- [ ] Precios de los formatos de evento.
- [ ] Títulos, técnica y medidas de las obras.
- [ ] Imágenes en WebP y fuentes alojadas en la propia web.
- [ ] Que las páginas legales usen la tipografía del nuevo diseño.
