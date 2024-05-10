import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../screens/Inicio/Inicio";
import Producto from "../screens/Producto/Producto";
import Perfil from "../screens/Perfil/Perfil";
import Empresa from "../screens/Empresa/Empresa";
import Insumo from "../screens/Insumo/Insumo";
import Categoria from "../screens/Categoria/Categoria";
import Empleado from "../screens/Empleado/Empleado";
import Rol from "../screens/Rol/Rol";
import Promocion from "../screens/Promocion/Promocion";
import Sucursales from "../screens/Empresa/Sucursales/Sucursales";
import BaseNavbar from "../screens/common/BaseNavbar";
import BasicSidebar from "../screens/common/BasicSidebar";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <BaseNavbar />
      </div>
      <div className="d-flex">
        <BasicSidebar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empresas" element={<Empresa />} />
          <Route path="/productos" element={<Producto />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/insumos" element={<Insumo />} />
          <Route path="/categorias" element={<Categoria />} />
          <Route path="/empleados" element={<Empleado />} />
          <Route path="/roles" element={<Rol />} />
          <Route path="/promociones" element={<Promocion />} />
          <Route path="/sucursales/:empresaId" element={<Sucursales />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
