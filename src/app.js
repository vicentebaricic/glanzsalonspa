/* ============================================================
   CONFIG — datos centralizados
   ============================================================ */
const CONFIG = {
  business: "Glanz Salon y Spa",
  whatsapp: "56944242386",
  agendapro: "https://glanz.site.agendapro.com/cl/sucursal/73487",
  bookingInline: true,   // false = los botones "Reservar" abren AgendaPro en pestaña nueva
  reviews:   "https://glanz.site.agendapro.com/cl/sucursal/73487",
  instagram: "https://www.instagram.com/glanzsalonyspa/",
  deliveryFee: 3500,
  mapEmbed: "https://www.google.com/maps?q=Paseo%20Liray%2021-A%2C%20Chicureo%2C%20Colina%2C%20Chile&z=16&output=embed",
  // Mensajes de WhatsApp pre-armados según la sección del clic
  waMessages: {
    default:   "Hola Glanz, quisiera hacer una consulta.",
    menu:      "Hola Glanz, quisiera hacer una consulta.",
    barra:     "Hola Glanz, quisiera hacer una consulta sobre sus servicios.",
    flotante:  "Hola Glanz, quisiera hacer una consulta sobre sus servicios.",
    ubicacion: "Hola Glanz, ¿me podrían indicar cómo llegar al salón en Paseo Liray?",
    cta:       "Hola Glanz, tengo una duda antes de reservar mi hora.",
    footer:    "Hola Glanz, quisiera hacer una consulta.",
    equipo:    "Hola Glanz, quisiera agendar con {name}.",
    servicio:  "Hola Glanz, quisiera más información sobre {name}."
  },
  // Horario real (domingo = 0)
  hours: [
    { day: "Domingo",   open: null,    close: null },
    { day: "Lunes",     open: "10:00", close: "19:00" },
    { day: "Martes",    open: "10:00", close: "19:00" },
    { day: "Miércoles", open: "10:00", close: "19:00" },
    { day: "Jueves",    open: "10:00", close: "19:00" },
    { day: "Viernes",   open: "10:00", close: "19:00" },
    { day: "Sábado",    open: "10:00", close: "16:00" }
  ]
};

/* Galería — reemplaza con fotos reales (assets/img/galeria/) */
const GALLERY = [
  { home: true, file: "corte-01.webp",    cat: "corte",    cap: "Ondas sueltas",                size: "g-big" },
  { home: true, file: "color-01.webp",    cat: "color",    cap: "Aplicación de color con pincel", size: "" },
  { home: true, file: "pestanas-01.webp", cat: "rostro",   cap: "Limpieza facial",              size: "g-tall" },
  { home: true, file: "unas-01.webp",     cat: "unas",     cap: "Manicure de precisión",        size: "" },
  { file: "color-02.webp",    cat: "corte",    cap: "Corte y forma",                size: "g-tall" },
  { file: "unas-02.webp",     cat: "unas",     cap: "Esmaltado nude",               size: "g-wide" },
  { home: true, file: "corte-03.webp",    cat: "corte",    cap: "Brushing con cepillo redondo", size: "" },
  { file: "color-04.webp",    cat: "color",    cap: "Mechas con papel",             size: "" },
  { file: "corte-02.webp",    cat: "corte",    cap: "Ondas con tenaza",             size: "" },
  { home: true, file: "color-03.webp",    cat: "color",    cap: "Rubio luminoso",               size: "" },
  { file: "pestanas-02.webp", cat: "rostro",   cap: "Masaje facial",                size: "" },
  { file: "unas-03.webp",     cat: "unas",     cap: "Cuidado de cutículas",         size: "" }
];

/* Antes / después — assets/img/antes-despues/ */
const BEFORE_AFTER = [
  { title: "Color y ondas",   note: "Balayage + brushing",   before: "color-antes.webp",  after: "color-despues.webp" },
  { title: "Limpieza facial", note: "Limpieza + hidratación", before: "facial-antes.webp", after: "facial-despues.webp" },
  { title: "Spa de manos",    note: "Manicure + esmaltado",   before: "unas-antes.webp",   after: "unas-despues.webp" }
];

/* Equipo — datos reales. Fotos: assets/img/equipo/<nombre>.jpg */
const TEAM = [
  { name: "Yasna",   role: "Colorista · Estilista",          file: "yasna.webp",
    tagline: "Ciencia y arte en color capilar.",
    bio: "Especialista en colorimetría, mechas de alta precisión y análisis capilar. Domina balayage, babylights y highlights para lograr efectos de luz naturales y elegantes. Sus tratamientos, basados en un diagnóstico profundo, devuelven vitalidad, suavidad y brillo.",
    days: "Martes, miércoles, viernes y sábado" },
  { name: "Aline",   role: "Cosmetóloga · Belleza integral", file: "aline.webp",
    tagline: "Versatilidad profesional y resultados impecables.",
    bio: "Cosmetóloga certificada, especialista en piel. Realiza limpiezas faciales profundas, maquillaje profesional, manicure rusa, pedicure, depilación con cera, lifting y extensiones de pestañas 1 a 1, además de trenzas para ocasiones especiales.",
    days: "Lunes a viernes" },
  { name: "Eli",     role: "Masoterapeuta",                  file: "eli.webp",
    tagline: "Bienestar que transforma.",
    bio: "Masoterapeuta con amplia experiencia en masajes terapéuticos y estéticos. También realiza depilación, manicure, pedicure y lifting de pestañas, combinando técnica y calidez para renovar cuerpo y mente.",
    days: "Lunes a sábado" },
  { name: "Melissa", role: "Estilista integral",             file: "melissa.webp",
    tagline: "Técnica y dedicación en cada corte.",
    bio: "Especialista en corte femenino, masculino y niños, styling y blowout, y color, destacando en técnicas de iluminación con capucha. Su sello: un resultado pensado para realzar tu estilo.",
    days: "Martes a sábado" }
];

/* Reseñas — DE EJEMPLO hasta copiar textos reales desde AgendaPro */
const REVIEWS = [
  { name: "María José R.", service: "Coloración", text: "Me escucharon de verdad y el color quedó exactamente como lo quería. El salón es impecable." },
  { name: "Paula S.",      service: "Spa de manos", text: "Llevo años atendiéndome aquí. Siempre puntuales, limpias y con un trato precioso." },
  { name: "Andrea M.",     service: "Masaje relajante", text: "Una hora de desconexión total. Salí nueva. La música y la luz, todo pensado." },
  { name: "Cecilia V.",    service: "Corte y brushing", text: "Por fin encontré mi peluquería en Chicureo. Honestas al recomendar y muy profesionales." }
];

/* Tienda — productos y precios DE EJEMPLO. Fotos: assets/img/tienda/ */
const PRODUCTS = [
  { id: "sh-hidra",  brand: "Línea profesional", name: "Shampoo hidratante 300 ml",         desc: "Para cabello seco o con color.",         price: 18900, file: "shampoo-hidratante.webp" },
  { id: "ac-hidra",  brand: "Línea profesional", name: "Acondicionador hidratante 300 ml",  desc: "Desenreda y aporta suavidad.",            price: 19900, file: "acondicionador.webp" },
  { id: "cr-peinar", brand: "Línea profesional", name: "Crema de peinar anti frizz 200 ml", desc: "Define sin apelmazar.",                  price: 15900, file: "crema-peinar.webp" },
  { id: "masc-rep",  brand: "Línea profesional", name: "Mascarilla reparadora 250 ml",      desc: "Tratamiento semanal intensivo.",         price: 24900, file: "mascarilla.webp" },
  { id: "ac-capil",  brand: "Línea profesional", name: "Aceite capilar de argán 50 ml",     desc: "Brillo y protección de puntas.",          price: 21900, file: "aceite-argan.webp" },
  { id: "term",      brand: "Línea profesional", name: "Protector térmico 150 ml",          desc: "Antes del secador o la plancha.",        price: 16900, file: "protector-termico.webp" },
  { id: "sh-matiz",  brand: "Línea profesional", name: "Shampoo matizador 300 ml",          desc: "Neutraliza tonos amarillos en rubios.",   price: 19900, file: "shampoo-matizador.webp" },
  { id: "cr-manos",  brand: "Glanz Spa",         name: "Crema de manos y cutículas 75 ml",  desc: "Nutrición diaria con karité.",           price: 9900,  file: "crema-manos.webp" }
];

/* ============================================================
   UTILIDADES
   ============================================================ */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const clp = n => "$" + Math.round(n).toLocaleString("es-CL");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const STAR = '<svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.8z"/></svg>';
const sampleBadge = (txt = "Contenido de ejemplo") => `<span class="sample">${txt}</span>`;
const imgBox = (src, alt, cls = "", attrs = "") =>
  `<div class="ph ${cls}" data-file="${esc(src)}" ${attrs}><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"></div>`;

function toast(msg){
  const t = $("#toast");
  t.textContent = msg; t.classList.add("is-show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("is-show"), 3200);
}

/* Placeholder visible cuando falta una imagen/video (antes de subir la multimedia) */
function watchMedia(root = document){
  $$(".ph img", root).forEach(img => {
    const mark = () => img.closest(".ph").classList.add("is-missing");
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) mark();
    img.addEventListener("error", mark, { once: true });
    img.addEventListener("load", () => img.closest(".ph").classList.remove("is-missing"), { once: true });
  });
}

/* ============================================================
   LINKS CENTRALIZADOS (AgendaPro, WhatsApp, Instagram)
   ============================================================ */
function wireLinks(root = document){
  $$(".js-book", root).forEach(a => a.href = CONFIG.agendapro);
  $$(".js-reviews", root).forEach(a => a.href = CONFIG.reviews);
  $$(".js-ig", root).forEach(a => a.href = CONFIG.instagram);
  $$(".js-wa", root).forEach(a => {
    const key = a.dataset.wa || "default";
    let msg = CONFIG.waMessages[key] || CONFIG.waMessages.default;
    if (a.dataset.name) msg = msg.replace("{name}", a.dataset.name);
    a.href = waLink(msg);
  });
}

/* ============================================================
   RENDER DE SECCIONES
   ============================================================ */
function renderGallery(){
  const el = $("#gallery"), preview = el.dataset.preview !== undefined;
  el.innerHTML = GALLERY.map((g, i) => (preview && !g.home) ? "" : `
    <button class="g-item ${g.size} reveal" type="button" data-cat="${g.cat}" data-index="${i}" aria-label="Ampliar foto: ${esc(g.cap)}">
      ${imgBox("assets/img/galeria/" + g.file, g.cap)}
      <figcaption>${esc(g.cap)}</figcaption>
    </button>`).join("");
}

function renderBA(){
  const knob = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg>`;
  $("#baGrid").innerHTML = BEFORE_AFTER.map((b, i) => `
    <div class="ba reveal" data-delay="${i}">
      <figure>
        <div class="ba__frame">
          ${imgBox("assets/img/antes-despues/" + b.before, "Antes: " + b.title, "ba__before")}
          ${imgBox("assets/img/antes-despues/" + b.after, "Después: " + b.title, "ba__after")}
          <span class="ba__label ba__label--b" aria-hidden="true">Antes</span>
          <span class="ba__label ba__label--a" aria-hidden="true">Después</span>
          <span class="ba__line" aria-hidden="true"></span>
          <input class="ba__range" type="range" min="0" max="100" value="50" step="1" aria-label="Comparar antes y después: ${esc(b.title)}" aria-valuetext="50% antes">
          <span class="ba__knob" aria-hidden="true">${knob}</span>
        </div>
        <figcaption><strong>${esc(b.title)}</strong><span>${esc(b.note)}</span></figcaption>
      </figure>
    </div>`).join("");
  $$(".ba__range").forEach(r => {
    const frame = r.closest(".ba__frame");
    const set = () => {
      frame.style.setProperty("--pos", r.value + "%");
      r.setAttribute("aria-valuetext", `${r.value}% antes, ${100 - r.value}% después`);
    };
    r.addEventListener("input", set); set();
  });
}

function renderTeam(){
  $("#team").innerHTML = TEAM.map((m, i) => `
    <article class="member reveal" data-delay="${i % 4}">
      <div class="member__photo">
        ${imgBox("assets/img/equipo/" + m.file, `${m.name}, ${m.role}`)}
        <div class="member__over" id="bio-${i}">
          <p class="member__tag">${esc(m.tagline)}</p>
          <p>${esc(m.bio)}</p>
          <a class="js-wa" data-wa="equipo" data-name="${esc(m.name)}" href="#" target="_blank" rel="noopener">Agendar con ${esc(m.name)} →</a>
        </div>
      </div>
      <h3>${esc(m.name)}</h3>
      <p class="role">${esc(m.role)}</p>
      <p class="member__days">${esc(m.days)}</p>
      <button class="member__more" type="button" aria-expanded="false" aria-controls="bio-${i}">Ver perfil</button>
    </article>`).join("");
  // Táctil y teclado: el botón abre/cierra el perfil (en desktop también aparece con el cursor)
  $("#team").addEventListener("click", e => {
    const b = e.target.closest(".member__more"); if (!b) return;
    const card = b.closest(".member"), open = !card.classList.contains("is-open");
    $$(".member.is-open").forEach(c => { c.classList.remove("is-open"); $(".member__more", c).setAttribute("aria-expanded", "false"); $(".member__more", c).textContent = "Ver perfil"; });
    card.classList.toggle("is-open", open);
    b.setAttribute("aria-expanded", open); b.textContent = open ? "Cerrar" : "Ver perfil";
  });
}

function renderReviews(){
  $("#reviews").innerHTML = REVIEWS.map((r, i) => `
    <figure class="review reveal" data-delay="${i % 2}">
      <span class="stars" aria-label="5 de 5 estrellas">${STAR.repeat(5)}</span>
      <blockquote>“${esc(r.text)}”</blockquote>
      <figcaption><span><b>${esc(r.name)}</b> · ${esc(r.service)}</span>${sampleBadge("Reseña de ejemplo")}</figcaption>
    </figure>`).join("");
}

function renderHours(){
  const now = new Date();
  const today = now.getDay();
  const order = [1,2,3,4,5,6,0];
  $("#hoursBody").innerHTML = order.map(d => {
    const h = CONFIG.hours[d];
    return `<tr class="${d === today ? "is-today" : ""}"><th scope="row">${h.day}${d === today ? ' <span class="sr-only">(hoy)</span>' : ""}</th><td>${h.open ? `${h.open} – ${h.close}` : "Cerrado"}</td></tr>`;
  }).join("");

  // ¿Abierto ahora? (hora de Chile)
  const parts = new Intl.DateTimeFormat("es-CL", { timeZone: "America/Santiago", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(now);
  const hh = +parts.find(p => p.type === "hour").value, mm = +parts.find(p => p.type === "minute").value;
  const cl = new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" }));
  const h = CONFIG.hours[cl.getDay()];
  const mins = hh * 60 + mm;
  const toM = s => { const [a, b] = s.split(":").map(Number); return a * 60 + b; };
  const el = $("#openNow");
  if (h.open && mins >= toM(h.open) && mins < toM(h.close)) {
    el.lastElementChild.textContent = `Abierto ahora · cierra a las ${h.close}`;
  } else {
    el.classList.add("is-closed");
    el.lastElementChild.textContent = "Cerrado ahora · reserva online 24/7";
  }
}

function renderShop(){
  $("#shop").innerHTML = PRODUCTS.map((p, i) => `
    <article class="product reveal" data-delay="${i % 4}">
      ${imgBox("assets/img/tienda/" + p.file, p.name)}
      <span class="product__brand">${esc(p.brand)}</span>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="product__foot">
        <span class="price">${clp(p.price)}</span>
        <button class="btn btn--ghost add-btn" type="button" data-add="${p.id}" aria-label="Agregar ${esc(p.name)} al carrito">Agregar</button>
      </div>
    </article>`).join("");
}

/* ============================================================
   INTERACCIONES
   ============================================================ */
// Header sólido al hacer scroll
function initHeader(){
  const header = $("#header");
  if (document.body.classList.contains("page-sub")) { header.classList.add("is-solid"); return; }
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.6 - 80);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}

// Tema claro/oscuro
function initTheme(){
  const btn = $("#themeBtn");
  const saved = store.get("glanz-theme", null);
  if (saved) document.documentElement.dataset.theme = saved;
  const isDark = () => document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const label = () => btn.setAttribute("aria-label", isDark() ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  label();
  btn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next; store.set("glanz-theme", next); label();
  });
  $("#themeBtnM").addEventListener("click", () => btn.click());
}

// Focus trap + overlay genérico
let lastFocus = null;
function openLayer(el, { scrim = false } = {}){
  lastFocus = document.activeElement;
  el.classList.add("is-open");
  if (scrim) $("#scrim").classList.add("is-open");
  document.body.style.overflow = "hidden";
  const f = el.querySelector("button, a[href], input, select, textarea");
  setTimeout(() => f && f.focus(), 60);
}
function closeLayer(el){
  el.classList.remove("is-open");
  $("#scrim").classList.remove("is-open");
  document.body.style.overflow = "";
  lastFocus && lastFocus.focus();
}
function trapFocus(e, el){
  if (e.key !== "Tab" || !el.classList.contains("is-open")) return;
  const f = $$("button:not([disabled]), a[href], input, select, textarea", el).filter(x => x.offsetParent !== null);
  if (!f.length) return;
  if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
  else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
}

// Menú móvil
function initMenu(){
  const m = $("#mnav"), btn = $("#menuBtn");
  btn.addEventListener("click", () => { openLayer(m); btn.setAttribute("aria-expanded", "true"); });
  const close = () => { closeLayer(m); btn.setAttribute("aria-expanded", "false"); };
  $("#menuClose").addEventListener("click", close);
  $$("a[href^='#']", m).forEach(a => a.addEventListener("click", close));
  m.addEventListener("keydown", e => { if (e.key === "Escape") close(); trapFocus(e, m); });
}

// Video hero: pausa accesible + reduced motion
function initHero(){
  const v = $("#heroVideo"), b = $("#heroPause"), box = v.closest(".ph");
  const sources = $$("source", v);
  let failed = 0;
  sources.forEach(s => s.addEventListener("error", () => { if (++failed === sources.length) { box.classList.add("is-missing"); b.hidden = true; } }));
  if (matchMedia("(max-width: 699px)").matches) v.poster = "assets/img/hero-poster-mobile.jpg";
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { v.removeAttribute("autoplay"); v.pause(); }
  const sync = () => {
    b.setAttribute("aria-label", v.paused ? "Reproducir video de fondo" : "Pausar video de fondo");
    b.innerHTML = v.paused
      ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5l12 7-12 7z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
  };
  b.addEventListener("click", () => { v.paused ? v.play() : v.pause(); });
  v.addEventListener("play", sync); v.addEventListener("pause", sync); sync();
}

// Tabs de servicios (patrón ARIA)
function initTabs(){
  const tabs = $$("[role=tab]");
  const select = t => {
    tabs.forEach(x => {
      const on = x === t;
      x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1;
      $("#" + x.getAttribute("aria-controls")).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", e => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus();
    });
  });
}

// Galería: filtros + lightbox
function initGallery(){
  const items = () => $$(".g-item");
  $$("[data-filter]").forEach(b => b.addEventListener("click", () => {
    $$("[data-filter]").forEach(x => x.setAttribute("aria-pressed", x === b));
    const f = b.dataset.filter;
    items().forEach(it => it.classList.toggle("is-hidden", f !== "all" && it.dataset.cat !== f));
  }));

  const lb = $("#lightbox"), img = $("#lbImg"), cap = $("#lbCap");
  let idx = 0;
  const visible = () => items().filter(i => !i.classList.contains("is-hidden"));
  const show = i => {
    const v = visible(); idx = (i + v.length) % v.length;
    const g = GALLERY[+v[idx].dataset.index];
    img.src = "assets/img/galeria/" + g.file; img.alt = g.cap; cap.textContent = g.cap;
  };
  $("#gallery").addEventListener("click", e => {
    const it = e.target.closest(".g-item"); if (!it) return;
    show(visible().indexOf(it)); openLayer(lb);
  });
  $(".lb-close", lb).addEventListener("click", () => closeLayer(lb));
  $(".lb-prev", lb).addEventListener("click", () => show(idx - 1));
  $(".lb-next", lb).addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLayer(lb); });
  lb.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLayer(lb);
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
    trapFocus(e, lb);
  });
}

// Gift card
function initGift(){
  const form = $("#giftForm");
  const upd = () => {
    const amount = +form.amount.value;
    $("#gcAmount").textContent = clp(amount);
    $("#gcTo").textContent = "Para: " + (form.to.value.trim() || "alguien especial");
    $("#gcMsg").textContent = form.msg.value.trim() || "Un momento de calma, solo para ti.";
  };
  form.addEventListener("input", upd); upd();

  const setErr = (input, errId, msg) => {
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    $("#" + errId).textContent = msg || "";
    return !msg;
  };
  const validate = () => {
    const a = setErr(form.from, "gcFromErr", form.from.value.trim() ? "" : "Escribe tu nombre para la gift card.");
    const b = setErr(form.to, "gcToErr", form.to.value.trim() ? "" : "Escribe el nombre de quien la recibe.");
    const em = form.email.value.trim();
    const c = setErr(form.email, "gcEmailErr", !em || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) ? "" : "Revisa el correo: debe tener el formato nombre@correo.cl");
    return a && b && c;
  };
  ["from", "to", "email"].forEach(n => form[n].addEventListener("blur", () => { if (form[n].value) validate(); }));

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!validate()) { form.querySelector("[aria-invalid=true]").focus(); return; }
    const lines = [
      "Hola Glanz, quiero comprar una Gift Card electrónica:",
      `• Monto: ${clp(+form.amount.value)}`,
      `• De: ${form.from.value.trim()}`,
      `• Para: ${form.to.value.trim()}`,
      form.email.value.trim() ? `• Enviar a: ${form.email.value.trim()}` : "• Enviármela a mí por WhatsApp",
      form.msg.value.trim() ? `• Mensaje: "${form.msg.value.trim()}"` : ""
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    toast("Abrimos WhatsApp con el detalle de tu gift card");
  });
}

// Carrito
const cart = {
  items: store.get("glanz-cart", {}),
  save(){ store.set("glanz-cart", this.items); renderCart(); },
  add(id){ this.items[id] = (this.items[id] || 0) + 1; this.save(); },
  set(id, q){ if (q <= 0) delete this.items[id]; else this.items[id] = q; this.save(); },
  count(){ return Object.values(this.items).reduce((a, b) => a + b, 0); },
  subtotal(){ return Object.entries(this.items).reduce((s, [id, q]) => s + (PRODUCTS.find(p => p.id === id)?.price || 0) * q, 0); }
};
function renderCart(){
  const n = cart.count();
  const badge = $("#cartCount");
  badge.textContent = n; badge.hidden = n === 0;
  $("#cartBtn").setAttribute("aria-label", `Abrir carrito, ${n} ${n === 1 ? "producto" : "productos"}`);
  const body = $("#cartBody"), foot = $("#cartFoot");
  const entries = Object.entries(cart.items).filter(([id]) => PRODUCTS.some(p => p.id === id));
  if (!entries.length) {
    body.innerHTML = `<div class="cart-empty"><h3>Tu carrito está vacío</h3><p>Agrega productos de la tienda para llevar el cuidado del salón a tu casa.</p><a class="btn btn--ghost" href="tienda.html" id="goShop">Ver productos</a></div>`;
    foot.hidden = true;
    $("#goShop").addEventListener("click", () => closeCart());
    return;
  }
  foot.hidden = false;
  body.innerHTML = entries.map(([id, q]) => {
    const p = PRODUCTS.find(x => x.id === id);
    return `<div class="cart-line">
      ${imgBox("assets/img/tienda/" + p.file, "")}
      <div><h4>${esc(p.name)}</h4><span class="muted">${clp(p.price)} c/u</span><br>
        <span class="qty" role="group" aria-label="Cantidad de ${esc(p.name)}">
          <button type="button" data-qty="${id}" data-d="-1" aria-label="Quitar uno">−</button>
          <output aria-live="polite">${q}</output>
          <button type="button" data-qty="${id}" data-d="1" aria-label="Agregar uno">+</button>
        </span></div>
      <div style="text-align:right"><b class="price">${clp(p.price * q)}</b><br><button class="remove" type="button" data-remove="${id}">Eliminar</button></div>
    </div>`;
  }).join("");
  watchMedia(body);
  const fee = $("#delivery").value === "despacho" ? CONFIG.deliveryFee : 0;
  $("#cartTotal").textContent = clp(cart.subtotal() + fee);
}
function openCart(){ openLayer($("#cart"), { scrim: true }); $("#cartBtn").setAttribute("aria-expanded", "true"); }
function closeCart(){ closeLayer($("#cart")); $("#cartBtn").setAttribute("aria-expanded", "false"); }
function initCart(){
  renderCart();
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#scrim").addEventListener("click", closeCart);
  $("#cart").addEventListener("keydown", e => { if (e.key === "Escape") closeCart(); trapFocus(e, $("#cart")); });
  $("#delivery").addEventListener("change", renderCart);
  $("#shop")?.addEventListener("click", e => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    cart.add(b.dataset.add);
    const p = PRODUCTS.find(x => x.id === b.dataset.add);
    b.classList.add("is-added"); b.textContent = "Agregado ✓";
    setTimeout(() => { b.classList.remove("is-added"); b.textContent = "Agregar"; }, 1400);
    toast(`${p.name} agregado al carrito`);
  });
  $("#cartBody").addEventListener("click", e => {
    const q = e.target.closest("[data-qty]"), r = e.target.closest("[data-remove]");
    if (q) { cart.set(q.dataset.qty, (cart.items[q.dataset.qty] || 0) + +q.dataset.d); }
    if (r) {
      const id = r.dataset.remove, prev = cart.items[id];
      cart.set(id, 0);
      toast("Producto eliminado");
      $("#cartClose").focus();
      undoRemove = { id, prev };
    }
  });
  $("#checkout").addEventListener("click", () => {
    const delivery = $("#delivery").value;
    const fee = delivery === "despacho" ? CONFIG.deliveryFee : 0;
    const lines = ["Hola Glanz, quiero hacer este pedido de la tienda:"];
    Object.entries(cart.items).forEach(([id, q]) => {
      const p = PRODUCTS.find(x => x.id === id); if (p) lines.push(`• ${q} × ${p.name} — ${clp(p.price * q)}`);
    });
    lines.push(delivery === "despacho" ? `• Despacho Chicureo/Colina — ${clp(fee)}` : "• Retiro en el salón (Paseo Liray)");
    lines.push(`Total: ${clp(cart.subtotal() + fee)}`);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
}
let undoRemove = null;

// Reserva: los botones "Reservar" abren AgendaPro dentro de la página.
// Si AgendaPro no permite mostrarse embebido, el link "Abrir en AgendaPro" sigue disponible arriba.
function initBooking(){
  const host = location.hostname;
  if (!CONFIG.bookingInline || !host || /claude|anthropic/.test(host)) return; // visor de artifacts: abre pestaña nueva
  const modal = $("#booking"), frame = $("#bookingFrame"), loading = $(".booking__loading", modal);
  $$(".js-book-ext").forEach(a => a.href = CONFIG.agendapro);
  frame.addEventListener("load", () => { if (frame.src) loading.hidden = true; });
  const open = () => {
    if (!frame.src) frame.src = CONFIG.agendapro;
    modal.hidden = false; requestAnimationFrame(() => modal.classList.add("is-open"));
    lastFocus = document.activeElement; document.body.style.overflow = "hidden";
    setTimeout(() => $("#bookingClose").focus(), 60);
  };
  const close = () => {
    modal.classList.remove("is-open"); document.body.style.overflow = "";
    setTimeout(() => { modal.hidden = true; }, 250); lastFocus && lastFocus.focus();
  };
  document.addEventListener("click", e => {
    const a = e.target.closest(".js-book");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // cmd/ctrl+clic: pestaña nueva
    e.preventDefault(); $("#mnav")?.classList.contains("is-open") && $("#menuClose").click(); open();
  });
  $("#bookingClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  modal.addEventListener("keydown", e => { if (e.key === "Escape") close(); trapFocus(e, modal); });
  if (location.hash === "#reservar") open();
}

// Mapa: embebe Google Maps cuando el sitio corre en su propio dominio
function initMap(){
  const host = location.hostname;
  if (!host || /claude|anthropic/.test(host)) return; // visor de artifacts: se queda la tarjeta con link
  // El bloque deja de ser un link completo: el mapa se usa y la tarjeta sigue llevando a Google Maps
  const link = $(".map"), box = document.createElement("div");
  box.className = link.className; box.dataset.delay = link.dataset.delay || "";
  const f = document.createElement("iframe");
  f.title = "Mapa: Glanz Salon y Spa en Paseo Liray, Chicureo";
  f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade"; f.src = CONFIG.mapEmbed;
  f.className = "map__frame";
  const card = document.createElement("a");
  card.className = "map__card is-over-map"; card.href = link.href; card.target = "_blank"; card.rel = "noopener";
  card.innerHTML = $(".map__card", link).innerHTML;
  box.append(f, card); link.replaceWith(box);
}

// Post de Instagram con video: se reproduce solo cuando está en pantalla
function initIgVideo(){
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  $$(".ig-video").forEach(v => {
    if (reduce) return;
    new IntersectionObserver(([e]) => e.isIntersecting ? v.play().catch(() => {}) : v.pause(), { threshold: .3 }).observe(v);
  });
}

// Reveal on scroll
function initReveal(){
  const els = $$(".reveal:not(.is-in)");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(e => e.classList.add("is-in")); return;
  }
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach(e => io.observe(e));
}

// Mostrar/ocultar etiquetas de ejemplo (para revisar el diseño limpio)
function initSamples(){
  const b = $("#toggleSamples");
  b.addEventListener("click", () => {
    const on = document.documentElement.classList.toggle("hide-samples");
    b.textContent = on ? "Mostrar etiquetas de ejemplo" : "Ocultar etiquetas de ejemplo";
  });
}

/* ============================================================
   INIT
   ============================================================ */
// Cada bloque corre solo si su sección existe en la página actual
const run = (sel, fn) => { if (!sel || $(sel)) fn(); };
run("#gallery", renderGallery); run("#baGrid", renderBA); run("#team", renderTeam);
run("#reviews", renderReviews); run("#hoursBody", renderHours); run("#shop", renderShop);
wireLinks(); watchMedia();
run(null, initHeader); run(null, initTheme); run("#mnav", initMenu); run("#heroVideo", initHero);
run("[role=tab]", initTabs); run("#gallery", initGallery); run("#giftForm", initGift); run("#cart", initCart);
run(".map", initMap); run("#booking", initBooking); run(".ig-video", initIgVideo); run(null, initReveal); run("#toggleSamples", initSamples);
$("#year").textContent = new Date().getFullYear();
