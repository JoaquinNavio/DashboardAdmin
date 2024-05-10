import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import EmpleadoService from "../../services/EmpleadoService";
import Empleado from "../../types/Empleado";
import { setEmpleado } from "../../redux/slices/slicesUnificados";
import { handleDelete, handleSearch } from "../../utils/utilities";
import { toggleModal } from "../../redux/slices/modal";
import Column from "../../types/Column";
import { Box, Typography, Button, Container } from "@mui/material";
import { Add } from "@mui/icons-material";
import SearchBar from "../common/SearchBar";
import TableComponent from "../../ui/Table/Table";
import ModalEmpleado from "../../ui/Modal/ModalEmpleado";

const EmpleadoComponent = () => {
  const url = import.meta.env.VITE_API_URL;
  const dispatch = useAppDispatch();
  const empleadoService = new EmpleadoService();
  const globalEmpleados = useAppSelector(
    (state) => state.empleado.entities
  );

  const [filteredData, setFilteredData] = useState<Empleado[]>([]);

  const fetchEmpleados = async () => {
    try {
      const empleados = await empleadoService.getAll(url + 'empleado');
      dispatch(setEmpleado(empleados)); 
      setFilteredData(empleados); 
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
    }
  }; 

  useEffect(() => {
    fetchEmpleados(); 
  }, [dispatch]); 

  const onSearch = (query: string) => {
    handleSearch(query, globalEmpleados, 'nombre', setFilteredData);
  };
  
  const onDelete = async (index: number) => {
    handleDelete(
      index,
      empleadoService,
      filteredData,
      fetchEmpleados,
      '¿Estás seguro de eliminar este empleado?',
      'Empleado eliminado correctamente.',
      'Hubo un problema al eliminar el empleado.',
      url + 'empleados'
    );
  };

  const handleEdit = (index: number) => {
    console.log("Editar empleado en el índice", index);
  };

  const handleAddEmpleado = () => {
    dispatch(toggleModal({ modalName: "modal" }));
  };

  const columns: Column[] = [
    { id: "nombre", label: "Nombre", renderCell: (empleado) => <>{empleado.nombre}</> },
    { id: "turno", label: "Turno", renderCell: (empleado) => <>{empleado.turno}</> },
    { id: "antiguedad", label: "Antiguedad", renderCell: (empleado) => <>{empleado.antiguedad}</> },
    { id: "rol", label: "Rol", renderCell: (empleado) => <>{empleado.rol.nombre}</> },
  ];

  return (
    <Box component="main" sx={{ flexGrow: 1, my: 2}}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 1 }}>
          <Typography variant="h5" gutterBottom>
            Empleados
          </Typography>
          <Button
            onClick={handleAddEmpleado}
            sx={{
              bgcolor: "#a6c732",
              "&:hover": {
                bgcolor: "#a0b750",
              },
            }}
            variant="contained"
            startIcon={<Add />}
          >
            Empleado
          </Button>
        </Box>
        <Box sx={{mt:2 }}>
          <SearchBar onSearch={onSearch} />
        </Box>
        <TableComponent data={filteredData} columns={columns} onDelete={onDelete} onEdit={handleEdit} />
        <ModalEmpleado getEmpleados={fetchEmpleados} />
      </Container>
    </Box>
  );
};

export default EmpleadoComponent;