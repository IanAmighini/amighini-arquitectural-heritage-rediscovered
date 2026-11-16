import { m } from "framer-motion";
import heroImage from "@/assets/puerta-antigua-restaurada-amighini.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Puerta antigua de madera restaurada en el showroom de Amighini Arquitectural"
          width={1024}
          height={1010}
          {...{ fetchpriority: "high" }}
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-sm tracking-[0.4em] uppercase text-bronze-light font-body">
            Buenos Aires, Argentina
          </span>
        </m.div>

        <m.h1
          initial={{ y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight text-foreground mb-6"
        >
          Antigüedades con{" "}
          <em className="italic text-bronze-light">carácter</em>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Piezas únicas listas para llevar. Restauradas con artesanía premium para espacios extraordinarios.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#coleccion"
            className="px-10 py-4 bg-accent text-accent-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-bronze-light transition-colors duration-300"
          >
            Ver Piezas Disponibles
          </a>
          <a
            href="#showroom"
            className="px-10 py-4 border border-foreground/30 text-foreground font-body text-sm tracking-[0.2em] uppercase hover:border-bronze hover:text-bronze-light transition-colors duration-300"
          >
            Visitar el Showroom
          </a>
        </m.div>
      </div>

      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-bronze/50 to-transparent" />
      </m.div>
    </section>
  );
};

export default HeroSection;
