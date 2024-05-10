import Categoria from "../../types/Categoria";
import Empleado from "../../types/Empleado";
import Empresa from "../../types/Empresa";
import Promocion from "../../types/Promocion";
import ArticuloInsumo from "../../types/ArticuloInsumo";
import { createEntitySlice } from "../../utils/crearSlice";
import ArticuloManufacturado from "../../types/ArticuloManufacturado";
import Sucursal from "../../types/Sucursal";
import UnidadMedida from "../../types/UnidadMedida";

// Crea los slices para cada entidad
export const empleadoSlice = createEntitySlice<Empleado>("empleado");
export const empresaSlice = createEntitySlice<Empresa>("empresa");
export const categoriaSlice = createEntitySlice<Categoria>("categoria");
export const promocionSlice = createEntitySlice<Promocion>("promocion");
export const articuloInsumoSlice = createEntitySlice<ArticuloInsumo>("insumo");
export const articuloManufacturadoSlice =
  createEntitySlice<ArticuloManufacturado>("manufacturado");
export const sucursalSlice = createEntitySlice<Sucursal>("sucursal");
export const unidadMedidaSlice =
  createEntitySlice<UnidadMedida>("unidadMedida");

// Exporta las acciones y el reducer de cada slice
export const { setEntities: setEmpleado, resetEntities: resetEmpleado } =
  empleadoSlice.actions;
export const { setEntities: setEmpresa, resetEntities: resetEmpresa } =
  empresaSlice.actions;
export const { setEntities: setCategoria, resetEntities: resetCategoria } =
  categoriaSlice.actions;
export const { setEntities: setPromocion, resetEntities: resetPromocion } =
  promocionSlice.actions;
export const {
  setEntities: setArticuloInsumo,
  resetEntities: resetArticuloInsumo,
} = articuloInsumoSlice.actions;
export const {
  setEntities: setArticuloManufacturado,
  resetEntities: resetArticuloManufacturado,
} = articuloManufacturadoSlice.actions;
export const { setEntities: setSucursal, resetEntities: resetSucursal } =
  sucursalSlice.actions;
export const {
  setEntities: setUnidadMedida,
  resetEntities: resetUnidadMedida,
} = unidadMedidaSlice.actions;

export default {
  empleado: empleadoSlice.reducer,
  empresa: empresaSlice.reducer,
  categoria: categoriaSlice.reducer,
  promocion: promocionSlice.reducer,
  articuloInsumo: articuloInsumoSlice.reducer,
  articuloManufacturado: articuloManufacturadoSlice.reducer,
  sucursal: sucursalSlice.reducer,
  unidadMedida: unidadMedidaSlice.reducer,
};
