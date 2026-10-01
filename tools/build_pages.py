"""Arma las páginas del sitio a partir de src/.

    src/styles.css            estilos compartidos
    src/app.js                CONFIG, datos y comportamiento compartido
    src/partials/*.html       head, header (menú) y footer (pie, carrito, barra móvil)
    src/pages/*.html          contenido de cada página

Cada página generada en la raíz (index.html, trabajos.html, tienda.html, gift-card.html)
queda autocontenida: HTML + CSS + JS en un solo archivo.
Uso: python3 tools/build_pages.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "src")
SITE = "https://vicentebaricic.github.io/glanzsalonspa/"
GLYPHS = os.path.join(ROOT, "tools", "glanz-glyphs.json")

def read(*p):
    with open(os.path.join(SRC, *p), encoding="utf-8") as f:
        return f.read()

def wordmark():
    """GLANZ con las letras vectorizadas del logo (sin diente de león ni ®)."""
    g = json.load(open(GLYPHS, encoding="utf-8"))
    return "".join(
        f'<svg viewBox="0 0 {w} {h}" focusable="false"><path d="{d}" fill="currentColor" fill-rule="evenodd"/></svg>'
        for w, h, d in g.values())

def favicon():
    w, h, d = json.load(open(GLYPHS, encoding="utf-8"))["G"]
    svg = (f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-14 -18 {w+28} {w+28}'>"
           f"<rect x='-14' y='-18' width='{w+28}' height='{w+28}' rx='18' fill='#8A505A'/>"
           f"<path d='{d}' fill='#F8F5F0' fill-rule='evenodd'/></svg>")
    return "data:image/svg+xml," + svg.replace("<", "%3C").replace(">", "%3E").replace("#", "%23").replace('"', "'")

def build(name):
    body = read("pages", name)
    meta = json.loads(re.search(r"<!--meta\s*(\{.*?\})\s*-->", body, re.S).group(1))
    body = re.sub(r"<!--meta.*?-->\s*", "", body, count=1, flags=re.S)
    is_home = name == "index.html"
    url = SITE + ("" if is_home else name)

    head = read("partials", "head.html")
    head = re.sub(r"<title>.*?</title>", f"<title>{meta['title']}</title>", head)
    head = re.sub(r'(<meta name="description" content=")[^"]*', r"\g<1>" + meta["description"], head)
    head = re.sub(r'(<meta property="og:title" content=")[^"]*', r"\g<1>" + meta["title"], head)
    head = re.sub(r'(<meta property="og:description" content=")[^"]*', r"\g<1>" + meta["description"], head)
    head = re.sub(r'(<meta property="og:url" content=")[^"]*', r"\g<1>" + url, head)
    head = re.sub(r'<link rel="icon" href="[^"]*">', f'<link rel="icon" href="{favicon()}">', head)

    header = read("partials", "header.html")
    nav = meta.get("nav")
    if nav:
        header = header.replace(f'data-nav="{nav}"', f'data-nav="{nav}" aria-current="page"')
    footer = read("partials", "footer.html").replace("{{wordmark}}", wordmark())

    html = (head.rstrip() + "\n<style>\n" + read("styles.css") + "</style>\n</head>\n"
            + f'<body class="{meta.get("bodyClass", "")}">\n'
            + '<a class="skip" href="#main">Saltar al contenido</a>\n\n'
            + header + '\n<main id="main">\n' + body + "</main>\n\n" + footer
            + "\n<script>\n" + read("app.js") + "</script>\n</body>\n</html>\n")
    html = html.replace("{{home}}", "#inicio" if is_home else "./")
    html = html.replace('href="#inicio#', 'href="#')   # anclas internas en la portada
    with open(os.path.join(ROOT, name), "w", encoding="utf-8") as f:
        f.write(html)
    print("✓", name)

if __name__ == "__main__":
    for n in sorted(os.listdir(os.path.join(SRC, "pages"))):
        if n.endswith(".html") and not n.startswith("_"):
            build(n)
