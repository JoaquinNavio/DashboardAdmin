import DataModel from "./DataModel";

export default interface Rol  extends DataModel<Rol>{
    nombre: string;
    horas: string;
    salario: string;
  }