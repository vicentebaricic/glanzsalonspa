# Multimedia de Glanz Salon y Spa

## Páginas

El sitio tiene 5 páginas: `index.html` (inicio), `servicios.html`, `trabajos.html`, `tienda.html` y `gift-card.html`.
Los servicios (nombres, duraciones y precios) se editan en la lista `SERVICES` de `src/app.js`.
**No se editan directo**: se generan desde `src/` con

```bash
python3 tools/build_pages.py
```

- `src/pages/*.html` → contenido de cada página
- `src/partials/` → head, menú (header) y pie (footer, carrito, barra móvil), compartidos
- `src/styles.css` y `src/app.js` → estilos, CONFIG (WhatsApp, AgendaPro), datos y comportamiento

Cada página generada queda autocontenida (HTML + CSS + JS en un solo archivo).
El GLANZ gigante del pie usa las letras del logo vectorizadas (`tools/glanz-glyphs.json`).


- `Media/` guarda los **originales** subidos (logo, video 4K, fotos Unsplash, equipo).
- `assets/` tiene las versiones **optimizadas** que usa `index.html`.

## Cómo se generan

```bash
python3 tools/build_media.py                         # recortes + grade de color (requiere Pillow y numpy)
NODE_PATH=$(npm root -g) node tools/build_products.js  # fotos de producto de la tienda (Playwright)
```

`build_media.py` recorta varias tomas desde cada original y les aplica **el mismo grade**
(balance cálido, sombras levantadas, altas luces suaves, saturación contenida), para que todo
se vea como una sola sesión de fotos. Los recortes se definen en la lista `SHOTS`.

## Para el sitio final

En este prototipo, la galería y los servicios usan fotos de Unsplash, el antes/después es una
**simulación** (el "antes" es la misma foto apagada) y los productos son renders genéricos.
Para reemplazarlos por material real:

1. Sube la foto a `Media/`.
2. Cambia la fuente correspondiente en `SHOTS` (o `BEFORE_AFTER`) de `tools/build_media.py`.
3. Vuelve a correr el script: la nueva foto queda con el mismo tratamiento de color.

| Carpeta | Uso |
|---|---|
| `video/hero.mp4`, `hero-mobile.mp4` | Video del hero (horizontal / vertical), con grade |
| `img/logo*.png` | Logo malva, claro (sobre el video) y para modo oscuro |
| `img/destacado-*.webp`, `img/nosotros-*.webp`, `img/espacio/*` | Fotos editoriales, Quiénes somos, espacios, llamado final |
| `img/servicios/*` | 3 fotos por categoría (Cabello, Belleza, Bienestar) |
| `img/galeria/*` | 12 trabajos (color, corte, uñas, rostro) |
| `img/antes-despues/*` | 3 pares antes/después |
| `img/equipo/*` | Yasna, Aline, Eli, Melissa (ideal reemplazar por fotos de ≥800×800 px) |
| `img/tienda/*` | 8 productos |
| `img/instagram/*` | 3 posts grandes de Instagram (el del medio es video) |
