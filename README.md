# Amighini Arquitectural — amighini.com.ar

Sitio web de Amighini Arquitectural: puertas antiguas, rejas de época, herrajes y piezas arquitectónicas restauradas. Showroom en El Triángulo, Provincia de Buenos Aires.

Hecho con Vite, React, TypeScript, Tailwind CSS y Framer Motion.

## Desarrollo

```sh
npm install
npm run dev        # http://localhost:8080
```

## Build para publicar

```sh
npm run build
```

Esto genera la carpeta `dist/` lista para subir. El build:

1. Compila la app (`vite build`).
2. **Prerenderiza** la página (`scripts/prerender.mjs`): `dist/index.html` sale con todo el contenido en HTML, así Google, Bing, WhatsApp y Facebook lo leen sin ejecutar JavaScript. Además genera `dist/404.html`.

También se puede descargar `dist` ya armado desde GitHub → Actions → "Build and Package" → artifact `dist`.

## Publicar en Plesk

1. Subí **el contenido** de `dist/` (no la carpeta en sí) a `httpdocs/` del dominio, reemplazando lo anterior.
2. Asegurate de que se suba también `.htaccess` (es un archivo oculto; si comprimís en zip desde macOS/Windows, verificá que esté incluido).
3. En Plesk → Hosting y DNS → **Hosting**: dejá como preferido el dominio **sin www** y activá el redireccionamiento 301 de HTTP a HTTPS (coincide con lo que hace `.htaccess`).

## SEO — archivos clave

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Título, descripción, canonical, Open Graph y datos estructurados (Store + WebSite) |
| `public/robots.txt` | Permite el rastreo e indica el sitemap |
| `public/sitemap.xml` | Lista de URLs para Google Search Console (actualizar `lastmod` si cambia el contenido) |
| `public/og-image.jpg` | Imagen al compartir el link (1200×630) |
| `public/.htaccess` | https + sin www, 404 real, compresión y caché |

El dominio oficial es **https://amighini.com.ar/** — usar siempre ese en metadatos.
