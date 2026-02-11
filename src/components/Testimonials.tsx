import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "INSUPERABLES. Diseño hasta manufactura artesanal de la madera. Herencia arquitectónica en cada detalle.",
    author: "Cliente verificado",
    location: "Buenos Aires",
  },
  {
    text: "Artesanos!!! Venta de antigüedades de calidad únicas. Restauración artesanal en Buenos Aires de primer nivel.",
    author: "Cliente verificado",
    location: "Provincia de Buenos Aires",
  },
  {
    text: "Extraordinarios elementos. Puertas antiguas únicas Argentina. Cada pieza es una obra de arte irrepetible.",
    author: "Cliente verificado",
    location: "Buenos Aires",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-border p-8 lg:p-10 relative"
            >
              <Quote className="text-bronze/30 mb-6" size={32} />
              <p className="font-body text-foreground leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="divider-bronze mb-4" />
              <p className="text-sm text-muted-foreground font-body">{t.author}</p>
              <p className="text-xs text-bronze tracking-wider uppercase">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
