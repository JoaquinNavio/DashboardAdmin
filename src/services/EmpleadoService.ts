// Importamos el tipo de dato IEmpresa y la clase BackendClient
import IEmpleado from "../types/Empleado";
import  BackendClient  from "./BackendClient";

// Clase EmpresaService que extiende BackendClient para interactuar con la API de personas
export default class EmpleadoService extends BackendClient<IEmpleado> {}