import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Muy buena atención y hay de todo. Lo usado está en muy buen estado, se nota el cuidado en cada pieza. Un lugar que vale la pena conocer para quienes buscan calidad.",
    author: "Fernando",
    location: "Cliente verificado",
  },
  {
    text: "Muy buen lugar para los que buscan puertas de todo estilo. Tienen un showroom con muchas antigüedades y piezas únicas que realmente vale la pena visitar.",
    author: "Lucía",
    location: "Cliente verificado",
  },
  {
    text: "Excelente atención y se encuentran muy buenas antigüedades. Gran variedad de piezas restauradas con mucho detalle. Totalmente recomendable para cualquier proyecto.",
    author: "Mercedes",
    location: "Cliente verificado",
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
