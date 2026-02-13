import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import workshopImage from "@/assets/workshop.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src={workshopImage}
                alt="Taller artesanal de restauración de puertas antiguas en Buenos Aires"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-bronze/30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
              Quiénes Somos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Artesanía como método.{" "}
              <em className="italic text-bronze-light">Arquitectura como filosofía.</em>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Con más de tres décadas de trayectoria, la familia Amighini se dedica a buscar, seleccionar y
                restaurar piezas arquitectónicas con historia. Cada elemento que llega a nuestro taller es
                cuidadosamente evaluado y puesto en valor para ofrecerlo listo para su nuevo destino.
              </p>
              <p>
                Puertas antiguas, rejas de época, herrajes, aberturas y elementos decorativos — todo nuestro
                catálogo está disponible para que lo veas, lo elijas y te lo lleves.
              </p>
            </div>
            <div className="divider-bronze my-10" />
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: "30+", label: "Años de experiencia" },
                { value: "500+", label: "Piezas restauradas" },
                { value: "100%", label: "Artesanal" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl md:text-3xl text-bronze-light">{stat.value}</div>
                  <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
