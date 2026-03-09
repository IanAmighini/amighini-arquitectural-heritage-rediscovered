import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, CalendarCheck } from "lucide-react";
import showroomImage from "@/assets/showroom-piezas-antiguas-amighini.jpg";

const ShowroomSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="showroom" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
              Showroom Presencial
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Viví la experiencia{" "}
              <em className="italic text-bronze-light">en persona</em>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-10">
              Nuestro showroom de piezas únicas en Buenos Aires, Argentina, te invita a descubrir
              elementos arquitectónicos de colección en un espacio diseñado para inspirar. Una
              experiencia guiada por nuestro equipo especializado.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-bronze mt-1 flex-shrink-0" size={20} />
                <div>
                  <a href="https://maps.app.goo.gl/QFbRGMTzLfRSvFYy6" target="_blank" rel="noopener noreferrer" className="text-foreground font-body font-medium hover:text-bronze transition-colors duration-300 underline underline-offset-4 decoration-bronze/40">El Triangulo, Provincia de Buenos Aires, Argentina</a>
                  <p className="text-sm text-muted-foreground">Visitas con cita previa</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-bronze mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-foreground font-body font-medium">Lunes a Viernes: 9:00 - 18:00 hs</p>
                  <p className="text-foreground font-body font-medium">Sábados: 9:00 - 13:00 hs</p>
                </div>
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-bronze-light transition-colors duration-300"
            >
              <CalendarCheck size={16} />
              Agendar Visita
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src={showroomImage}
                alt="Showroom de piezas arquitectónicas únicas en Buenos Aires Argentina"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-bronze/30" />
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default ShowroomSection;
