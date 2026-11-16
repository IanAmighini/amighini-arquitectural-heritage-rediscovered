const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6">
    <div className="text-center">
      <p className="mb-4 font-heading text-6xl text-bronze-light">404</p>
      <h1 className="mb-4 font-heading text-2xl md:text-3xl text-foreground">Página no encontrada</h1>
      <p className="mb-8 text-muted-foreground font-body">La página que buscás no existe o fue movida.</p>
      <a
        href="/"
        className="inline-block px-8 py-3 border border-bronze text-sm tracking-[0.15em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300 font-body"
      >
        Volver al inicio
      </a>
    </div>
  </main>
);

export default NotFound;
