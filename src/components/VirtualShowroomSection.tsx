import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const VirtualShowroomSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // Load model-viewer script
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden border border-border">
            {/* @ts-ignore */}
            <model-viewer
              src="/models/showroom.glb"
              auto-rotate
              camera-controls
              style={{ width: "100%", height: "400px" }}
              className="md:!h-[600px]"
              shadow-intensity="1"
              environment-image="neutral"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-bronze/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualShowroomSection;
