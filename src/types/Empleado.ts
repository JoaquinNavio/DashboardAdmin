import DataModel from "./DataModel";
import Rol from "./Rol";

export default interface Empleado extends DataModel<Empleado> {
    nombre: string;
    turno: string;
    antiguedad: string;
    rol: Rol;
  }