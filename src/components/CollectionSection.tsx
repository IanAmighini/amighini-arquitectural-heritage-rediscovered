import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import collectionImage from "@/assets/coleccion-piezas-antiguas-amighini.jpg";
import detailIronImage from "@/assets/herrajes-hierro-antiguos-amighini.jpg";
import mobiliarioImage from "@/assets/mobiliario-vintage-amighini.jpg";
import interiorDoorImage from "@/assets/puertas-interior-antiguas-amighini.jpg";
import entradaDoorImage from "@/assets/puertas-entrada-antiguas-amighini.jpg";
import vitreauxImage from "@/assets/ventanas-vitreaux-antiguos-amighini.jpg";
import decoImage from "@/assets/decoracion-vintage-amighini.jpg";

const categories = [
  {
    title: "Puertas de Entrada",
    description: "Puertas antiguas de entrada, restauradas y listas para instalar en tu hogar.",
    image: entradaDoorImage,
  },
  {
    title: "Puertas de Interior",
    description: "Puertas interiores de época con carácter y detalles únicos.",
    image: interiorDoorImage,
  },
  {
    title: "Hierro y Metal",
    description: "Rejas, herrajes y piezas ornamentales de colección disponibles en stock.",
    image: detailIronImage,
  },
  {
    title: "Ventanas y Vitreaux",
    description: "Aberturas antiguas restauradas, listas para llevar.",
    image: vitreauxImage,
  },
  {
    title: "Mobiliario",
    description: "Muebles con historia, restaurados y listos para tu espacio.",
    image: mobiliarioImage,
  },
  {
    title: "Deco y más",
    description: "Objetos decorativos y piezas especiales para darle vida a tu ambiente.",
    image: decoImage,
  },
];

const CollectionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="coleccion" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
            La Colección
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Piezas disponibles ahora
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Cada pieza cuenta una historia. Restauradas y listas para llevar a tu espacio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.a
              href="#contacto"
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={`${cat.title} — piezas antiguas restauradas en Buenos Aires | Amighini`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/75 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-bronze-light text-sm tracking-[0.15em] uppercase font-body">
                  <span>Explorar</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
