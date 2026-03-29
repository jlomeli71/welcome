# CLAUDE.md — Repositorio `welcome`

Este archivo describe la estructura, propósito y convenciones del repositorio,
y sirve como referencia para el asistente AI (Antigravity/Claude) al realizar cambios.

---

## 📌 Propósito del Repositorio

Sitio web personal de **Jose Manuel Lomeli** (`jlomeli71`), publicado en GitHub Pages:

🔗 https://jlomeli71.github.io/welcome/

Es un portafolio profesional de una sola página (SPA) que presenta su trayectoria como
Network Architect & Strategic Leader con más de 20 años de experiencia en redes de alta
escala, MPLS, Cloud e IA aplicada a redes.

---

## 🗂️ Estructura del Repositorio

```
welcome/
├── index.html              # Página principal del portafolio (SPA, ~1,539 líneas)
├── css/                    # Hojas de estilo externas (si aplica)
├── img/                    # Imágenes del sitio
├── scr/                    # Scripts JavaScript externos (si aplica)
├── portafolio/             # Subcarpeta con proyectos o demos adicionales
│   └── Dashboard/          # Dashboard demo (proyecto)
├── practice_tutorials/     # Tutoriales y prácticas personales
└── CLAUDE.md               # Este archivo
```

---

## 🎨 Stack Tecnológico

- **HTML5 + CSS3 + Vanilla JS** — todo en un único `index.html` autocontenido
- **Fuentes**: Google Fonts — `Inter` (principal) y `JetBrains Mono` (código/tags)
- **Sin frameworks CSS** — diseño propio con variables CSS (design tokens)
- **Sin build tools** — despliegue directo vía GitHub Pages

---

## 🎨 Design System (tokens CSS)

Definidos en `:root` dentro de `index.html`:

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#050b18` | Fondo principal |
| `--color-bg2` | `#081020` | Fondo secciones alternas |
| `--color-accent` | `#00d4ff` | Cyan — color principal de acento |
| `--color-accent2` | `#7c3aed` | Púrpura — acento secundario |
| `--color-accent3` | `#06ffa5` | Verde — acento terciario |
| `--color-text` | `#e2e8f0` | Texto principal |
| `--color-muted` | `#64748b` | Texto secundario/apagado |
| `--gradient-accent` | cyan → púrpura | Gradiente principal |
| `--transition` | `0.3s cubic-bezier(...)` | Transición estándar |

---

## 🧭 Secciones del Sitio (`index.html`)

| ID / Sección | Descripción |
|---|---|
| `#hero` | Presentación principal — nombre, título, CTA, estadísticas |
| `#about` | Filosofía profesional y tarjetas de enfoque |
| `#skills` | Grid de habilidades técnicas con tags categorizados |
| `#experience` | Timeline de experiencia laboral |
| `#projects` | Proyectos destacados en grid |
| `#contact` | Formulario o enlaces de contacto |
| `footer` | Pie de página con enlaces a GitHub y LinkedIn |

---

## 🔗 Links Sociales / Contacto

| Canal | URL |
|---|---|
| GitHub | https://github.com/jlomeli71 |
| LinkedIn | https://www.linkedin.com/in/jose-manuel-lomeli-corona-a1bb15/ |
| Email | jmlomeli@hotmail.com |
| Site | https://jlomeli71.github.io/welcome/ |

> ⚠️ Asegurarse de que **todos** los enlaces de LinkedIn en el archivo apunten a la URL correcta indicada arriba.

---

## 🚀 Despliegue

El sitio se despliega automáticamente a través de **GitHub Pages** cada vez que
se hace `push` a la rama `main`. No requiere build ni compilación.

```powershell
# Flujo estándar para subir cambios
git add .
git commit -m "descripcion del cambio"
git push
```

> En PowerShell usar `;` en lugar de `&&` para encadenar comandos.

---

## 🧩 Convenciones de Código

1. Todo el CSS está **embebido** en `<style>` dentro del `<head>` de `index.html`
2. Todo el JS está **embebido** en `<script>` al final del `<body>`
3. Los IDs de elementos interactivos siguen el patrón: `cta-*`, `link-*`, `section-*`
4. Las animaciones de entrada usan la clase `.reveal` con `IntersectionObserver`
5. Las cards usan hover con `transform: translateY(-6px)` y `box-shadow` con glow cyan

---

## 📝 Instrucciones para Cambios Futuros

> Agrega aquí cualquier instrucción, nota o cambio pendiente para la próxima sesión.

<!-- INICIO DE INSTRUCCIONES -->

- [ ] (Espacio reservado — agrega tus instrucciones aquí)

<!-- FIN DE INSTRUCCIONES -->
