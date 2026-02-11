import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Hammer, TreePine, Compass } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Piezas irrepetibles",
    description: "Cada elemento es único. No trabajamos con producción en serie. Cada puerta, reja o pieza de madera tiene una historia que la hace irrepetible.",
  },
  {
    icon: Hammer,
    title: "Restauración artesanal premium",
    description: "Técnicas tradicionales combinadas con conocimiento arquitectónico profesional. Restauración artesanal de puertas en Buenos Aires con los más altos estándares.",
  },
  {
    icon: TreePine,
    title: "Materiales de alta gama",
    description: "Maderas nobles, hierro forjado y materiales seleccionados por su calidad y autenticidad. Arte en madera y hierro de la más alta categoría.",
  },
  {
    icon: Compass,
    title: "Diseño con intención arquitectónica",
    description: "No somos anticuarios. Somos arquitectos que entienden el diseño, el espacio y la intención detrás de cada pieza. Arquitectura premium en Argentina.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
            Por Qué Elegirnos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Donde el valor supera al precio
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gradient-card border border-border p-8 lg:p-10 group hover:border-bronze/40 transition-colors duration-500"
            >
              <r.icon className="text-bronze mb-6" size={32} strokeWidth={1} />
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">{r.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
