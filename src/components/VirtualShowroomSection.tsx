import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        "auto-rotate"?: boolean | string;
        "camera-controls"?: boolean | string;
        "shadow-intensity"?: string;
        "environment-image"?: string;
      };
    }
  }
}

const spaces = [
  { id: "living-1", label: "Living 1", model: "/models/living-1.glb" },
  { id: "living-2", label: "Living 2", model: "/models/living-2.glb" },
  { id: "patio", label: "Patio", model: "/models/patio.glb" },
  { id: "entrada", label: "Entrada", model: "/models/entrada.glb" },
  { id: "galeria", label: "Galería", model: "/models/galeria.glb" },
];

const VirtualShowroomSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeSpace, setActiveSpace] = useState(spaces[0]);

  useEffect(() => {
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
              Showroom Virtual
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Explorá nuestras piezas{" "}
              <em className="italic text-bronze-light">en 3D</em>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              Rotá y descubrí cada detalle de nuestras piezas arquitectónicas desde cualquier lugar.
            </p>
          </motion.div>
        </div>

        {/* Space selector cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {spaces.map((space) => (
            <button
              key={space.id}
              onClick={() => setActiveSpace(space)}
              className={`px-5 py-3 font-body text-sm tracking-[0.15em] uppercase border transition-all duration-300 ${
                activeSpace.id === space.id
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-muted-foreground border-border hover:border-bronze hover:text-foreground"
              }`}
            >
              {space.label}
            </button>
          ))}
        </motion.div>

        {/* 3D Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden border border-border">
            <model-viewer
              key={activeSpace.id}
              src={activeSpace.model}
              auto-rotate
              camera-controls
              shadow-intensity="1"
              environment-image="neutral"
              style={{ width: "100%", height: "clamp(400px, 50vw, 600px)" }}
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-bronze/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualShowroomSection;
