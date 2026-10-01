# Multimedia de Glanz Salon y Spa

Sube aquí las fotos y videos con **exactamente estos nombres** y la página los mostrará sola.
Mientras falte un archivo, la página muestra un recuadro gris con la ruta esperada.

Recomendado: JPG/WebP de máx. 1600 px de ancho y menos de 400 KB. Video hero: MP4 (H.264), 10–20 s, sin audio, menos de 8 MB.

| Ruta | Uso |
|---|---|
| `video/hero.mp4` (+ opcional `video/hero.webm`) | Video de fondo del hero |
| `img/hero-poster.jpg` | Imagen fija mientras carga el video |
| `img/destacado-cabello.jpg`, `img/destacado-tienda.jpg` | Dos fotos verticales grandes después del hero |
| `img/espacio/salon-01.jpg`, `detalle-01.jpg`, `atencion-01.jpg` | Quiénes somos |
| `img/espacio/salon-02.jpg`, `lavado.jpg`, `recepcion.jpg` | Franja de espacios bajo el equipo |
| `img/espacio/cta.jpg` | Fondo del llamado final |
| `img/servicios/cabello-01..03.jpg`, `belleza-01..03.jpg`, `bienestar-01..03.jpg` | Fotos por categoría |
| `img/galeria/color-01..04.jpg`, `corte-01..03.jpg`, `unas-01..03.jpg`, `pestanas-01..02.jpg` | Galería de trabajos |
| `img/antes-despues/color-antes.jpg` / `color-despues.jpg` | Antes/después 1 (vertical 4:5) |
| `img/antes-despues/pestanas-antes.jpg` / `pestanas-despues.jpg` | Antes/después 2 (horizontal 4:3) |
| `img/antes-despues/unas-antes.jpg` / `unas-despues.jpg` | Antes/después 3 (horizontal 4:3) |
| `img/equipo/yasna.jpg`, `aline.jpg`, `eli.jpg`, `melissa.jpg` | Equipo (vertical 4:5) |
| `img/tienda/*.jpg` | Productos (ver nombres en `PRODUCTS` dentro de `index.html`) |

Los textos de galería, antes/después, reseñas y productos se editan en los arreglos
`GALLERY`, `BEFORE_AFTER`, `REVIEWS` y `PRODUCTS` al inicio del `<script>` de `index.html`.
