import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import logoAmighini from "@/assets/logo-amighini-arquitectural.webp";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Colección", href: "#coleccion" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <a href="/" className="flex items-center" aria-label="Amighini Arquitectural — Inicio">
          <img src={logoAmighini} alt="Amighini Arquitectural" width={400} height={225} className="h-16 md:h-20 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#coleccion"
            className="ml-4 px-6 py-2.5 border border-bronze text-sm tracking-[0.15em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Ver Colección
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#coleccion"
                onClick={() => setOpen(false)}
                className="px-6 py-2.5 border border-bronze text-sm tracking-[0.15em] uppercase text-foreground"
              >
                Ver Colección
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
