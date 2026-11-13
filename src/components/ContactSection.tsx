import { m, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Instagram, MessageCircle } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScR3JheBWebXMvyOaCtdSX_SXmpcHseT8khUyg6IzACCn4jRA/formResponse";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    data.append("_subject", "Nuevo contacto desde la web - Amighini Arquitectural");
    data.append("_template", "table");

    try {
      const resp = await fetch("https://formsubmit.co/ajax/mail@arquitectural.com.ar", {
        method: "POST",
        body: data,
      });
      if (!resp.ok) throw new Error("Error " + resp.status);
      try { await resp.json(); } catch {}
    } catch (err) {
      console.error("FormSubmit error:", err);
    }

    try {
      const googleData = new FormData();
      googleData.append("entry.2024537176", formData.name);
      googleData.append("entry.840091570", formData.email);
      googleData.append("entry.1019948260", formData.phone);
      googleData.append("entry.1428200073", formData.message);
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleData,
      });
    } catch (err) {
      console.error("Google Forms error:", err);
    }

    alert("¡Gracias! Recibimos tu mensaje, te contactamos a la brevedad.");
    setFormData({ name: "", email: "", phone: "", message: "" });

    const texto =
      "Nueva consulta desde amighini.com.ar\n" +
      "Nombre: " + formData.name + "\n" +
      "Email: " + formData.email + "\n" +
      "Teléfono: " + formData.phone + "\n\n" +
      "Mensaje:\n" + formData.message;
    window.open("https://wa.me/5491134614400?text=" + encodeURIComponent(texto), "_blank");

    setSending(false);
  };
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <m.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-bronze font-body mb-4 block">
              Contacto
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
              Encontrá tu pieza
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-10">
              ¿Buscás una puerta única, una reja de época o un elemento arquitectónico con historia?
              Escribinos y te mostramos lo que tenemos disponible para vos.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/5491134614400?text=Buenos%20dias,%20andaba%20buscando%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-bronze-light transition-colors group"
              >
                <div className="w-12 h-12 border border-bronze/30 flex items-center justify-center group-hover:border-bronze transition-colors">
                  <MessageCircle size={18} className="text-bronze" />
                </div>
                <div>
                  <p className="font-body font-medium">WhatsApp Directo</p>
                  <p className="text-sm text-muted-foreground">Respuesta en menos de 24hs</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/amighinihome?igsh=MTN0NzdvbDd3NDBjOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-bronze-light transition-colors group"
              >
                <div className="w-12 h-12 border border-bronze/30 flex items-center justify-center group-hover:border-bronze transition-colors">
                  <Instagram size={18} className="text-bronze" />
                </div>
                <div>
                  <p className="font-body font-medium">@amighinihome</p>
                  <p className="text-sm text-muted-foreground">Seguinos en Instagram</p>
                </div>
              </a>
            </div>

            <div className="mt-10 p-6 border border-border">
              <p className="text-sm text-muted-foreground font-body">
                <strong className="text-foreground">Ubicación:</strong>{" "}
                <a href="https://maps.app.goo.gl/QFbRGMTzLfRSvFYy6" target="_blank" rel="noopener noreferrer" className="hover:text-bronze transition-colors duration-300 underline underline-offset-4 decoration-bronze/40">El Triangulo, Provincia de Buenos Aires, Argentina</a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Piezas arquitectónicas con historia · Restauración artesanal · Listas para llevar
              </p>
            </div>
          </m.div>

          {/* Form */}
          <m.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body block mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body focus:border-bronze focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body focus:border-bronze focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body block mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body focus:border-bronze focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body block mb-2">
                  Mensaje *
                </label>
                <textarea
                  rows={4}
                  required
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body focus:border-bronze focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-bronze-light transition-colors duration-300 disabled:opacity-50"
              >
                <Send size={16} />
                {sending ? "Enviando..." : "Enviar Consulta"}
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
