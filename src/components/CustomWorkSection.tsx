import { m, useInView } from "framer-motion";
import { useRef } from "react";

const CustomWorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="medida" className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center border border-border p-8 lg:p-12"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-3 block">
            También hacemos
          </span>
          <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
            Pequeñas modificaciones y adaptaciones
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
            Si necesitás ajustar alguna pieza a las medidas de tu espacio o alguna modificación puntual,
            podemos ayudarte. Consultanos por WhatsApp.
          </p>
          <a
            href="https://wa.me/5491134614400?text=Buenos%20dias,%20andaba%20buscando%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-bronze/40 text-foreground font-body text-sm tracking-[0.15em] uppercase hover:border-bronze hover:text-bronze-light transition-colors duration-300"
          >
            Consultar
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default CustomWorkSection;
