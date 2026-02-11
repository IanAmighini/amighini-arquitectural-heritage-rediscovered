const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading text-lg tracking-widest uppercase text-foreground">
            Amighini Arquitectural
          </p>
          <p className="text-xs text-muted-foreground mt-1 font-body">
            Herencia arquitectónica reimaginada · Buenos Aires, Argentina
          </p>
        </div>
        <div className="flex items-center gap-8">
          {["Nosotros", "Colección", "Showroom", "Contacto"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="divider-bronze my-8" />
      <p className="text-center text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Amighini Arquitectural. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
