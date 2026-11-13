// Prerender: convierte el index.html vacío del build en HTML con todo el
// contenido de la página, para que Google y las redes sociales lo lean sin
// ejecutar JavaScript. También genera 404.html (con noindex).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

process.env.NODE_ENV = "production";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const ROOT_TAG = '<div id="root"></div>';
if (!template.includes(ROOT_TAG)) throw new Error("No se encontró " + ROOT_TAG + " en dist/index.html");

// Página principal
fs.writeFileSync(
  path.join(dist, "index.html"),
  template.replace(ROOT_TAG, `<div id="root">${render("/")}</div>`),
);

// Página 404 (la usa .htaccess con ErrorDocument)
const notFound = template
  .replace(ROOT_TAG, `<div id="root">${render("/404")}</div>`)
  .replace(/<title>[^<]*<\/title>/, "<title>Página no encontrada | Amighini Arquitectural</title>")
  .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
  .replace(/\s*<link rel="canonical"[^>]*>/, "")
  .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
fs.writeFileSync(path.join(dist, "404.html"), notFound);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log("✓ Prerender: dist/index.html y dist/404.html generados");
