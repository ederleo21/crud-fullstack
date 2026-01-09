import { Routes, Route } from "react-router-dom";
import { Home } from "../modules/home/pages/Home";
import { ModalidadesPage } from "../modules/modalidades/pages/ModalidadesPage";
import { CarrerasPage } from "../modules/carreras/pages/CarrerasPage";

export default function AppRouter() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modalidades" element={<ModalidadesPage />} />
      <Route path="/carreras" element={<CarrerasPage />} />
    </Routes>
  )
}
