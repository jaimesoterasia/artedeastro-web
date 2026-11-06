# artedeastro · web

Web de **artedeastro** (Eva): tarot de Thoth, astrología y arte en Barcelona.

Es una sola página en HTML, CSS y JavaScript, sin dependencias ni paso de compilación. Se publica con GitHub Pages desde la rama `main`.

## Estructura
- `index.html`: la página completa (estilos y scripts incluidos).
- `img/`: fotos de Eva, de la obra y del evento Giro al Alma.
- `favicon.svg`: el logo oficial (estrella sobre círculo con degradado).
- `robots.txt`: de momento bloquea a los buscadores.

## Cómo funciona el contacto
La reserva de lecturas, la petición de presupuesto para eventos y la lista de la joyería abren WhatsApp con el mensaje ya escrito, dirigido al número de Eva. No hay servidor ni base de datos.

## Antes del lanzamiento en artedeastro.com
- [x] Dominio `artedeastro.com` (Cloudflare Registrar), archivo `CNAME` y DNS de GitHub Pages (4 registros A y `www` en CNAME, sin proxy).
- [x] Páginas de aviso legal, privacidad y cookies (`aviso-legal.html`, `privacidad.html`, `cookies.html`).
- [x] Servicios y precios reales: coaching astral 80 €, carta natal resumida + sesión 180 €, carta natal completa 250 €, acompañamiento continuado a medida.
- [ ] Precios de los formatos de evento (ahora «a consultar»).
- [ ] Títulos, técnica y medidas de las obras.
- [x] Abierta a buscadores (`robots.txt` y `sitemap.xml`).
- [ ] Opcional: alojar las fuentes en local en vez de cargarlas de Google Fonts.
