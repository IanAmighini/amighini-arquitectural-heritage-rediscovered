import { Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

/**
 * Árbol de rutas compartido entre el cliente (BrowserRouter, ver main.tsx)
 * y el prerender en build (StaticRouter, ver entry-server.tsx).
 */
const App = () => (
  <LazyMotion features={domAnimation} strict>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </LazyMotion>
);

export default App;
