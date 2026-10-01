# Multimedia de Glanz Salon y Spa

La carpeta `Media/` guarda los originales. Las versiones optimizadas que usa la página están en `assets/`.

Sube aquí las fotos y videos con **exactamente estos nombres** y la página los mostrará sola.
Mientras falte un archivo, la página muestra un recuadro gris con la ruta esperada.

Recomendado: JPG/WebP de máx. 1600 px de ancho y menos de 400 KB. Video hero: MP4 (H.264), 10–20 s, sin audio, menos de 8 MB.

| Ruta | Uso |
|---|---|
| `video/hero.mp4`, `video/hero-mobile.mp4` | Video de fondo del hero (horizontal y vertical) ✅ |
| `img/hero-poster.jpg`, `img/hero-poster-mobile.jpg` | Imagen fija mientras carga el video ✅ |
| `img/logo.png`, `logo-light.png`, `logo-dark-mode.png` | Logo (malva, claro y para modo oscuro) ✅ |
| `img/destacado-cabello.webp`, `img/destacado-color.webp` | Dos fotos verticales grandes después del hero ✅ |
| `img/espacio/salon-01.webp` ✅, `atencion-01.webp` ✅, `detalle-01.jpg` ⏳ | Quiénes somos |
| `img/espacio/salon-02.jpg`, `lavado.jpg`, `recepcion.jpg` | Franja de espacios bajo el equipo |
| `img/espacio/cta.jpg` | Fondo del llamado final |
| `img/servicios/cabello-01/02.webp` ✅, `belleza-01/02.webp` ✅, `bienestar-01.webp` ✅ · faltan `cabello-03.jpg`, `belleza-03.jpg`, `bienestar-02/03.jpg` | Fotos por categoría |
| `img/galeria/color-01..04.jpg`, `corte-01..03.jpg`, `unas-01..03.jpg`, `pestanas-01..02.jpg` | Galería de trabajos |
| `img/antes-despues/color-antes.jpg` / `color-despues.jpg` | Antes/después 1 (vertical 4:5) |
| `img/antes-despues/pestanas-antes.jpg` / `pestanas-despues.jpg` | Antes/después 2 (horizontal 4:3) |
| `img/antes-despues/unas-antes.jpg` / `unas-despues.jpg` | Antes/después 3 (horizontal 4:3) |
| `img/equipo/yasna.webp`, `aline.webp`, `eli.webp`, `melissa.webp` | Equipo (cuadradas) ✅ — idealmente reemplazar por versiones de al menos 800×800 px |
| `img/tienda/*.jpg` | Productos (ver nombres en `PRODUCTS` dentro de `index.html`) |

Los textos de galería, antes/después, reseñas y productos se editan en los arreglos
`GALLERY`, `BEFORE_AFTER`, `REVIEWS` y `PRODUCTS` al inicio del `<script>` de `index.html`.
