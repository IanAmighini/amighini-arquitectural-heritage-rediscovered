import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, PenTool, Hammer as HammerIcon, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consulta", description: "Conversamos sobre tu proyecto, espacio y visión." },
  { icon: PenTool, title: "Diseño", description: "Creamos propuestas a medida con intención arquitectónica." },
  { icon: HammerIcon, title: "Manufactura", description: "Artesanía de alta gama en nuestro taller." },
  { icon: CheckCircle2, title: "Instalación", description: "Entrega e instalación profesional." },
];

const CustomWorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="medida" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
            Trabajo a Medida
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Tu visión, nuestra artesanía
          </h2>
          <p className="text-muted-foreground font-body">
            Creamos piezas únicas a medida para proyectos que demandan lo extraordinario.
            Consultas de diseño arquitectónico con historia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-bronze/30 flex items-center justify-center">
                <step.icon className="text-bronze" size={24} strokeWidth={1} />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] divider-bronze" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="inline-block px-10 py-4 bg-accent text-accent-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-bronze-light transition-colors duration-300"
          >
            Comenzar Proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomWorkSection;
