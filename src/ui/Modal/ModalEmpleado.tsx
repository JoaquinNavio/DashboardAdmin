import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Empleado from "../../types/Empleado"; // Importa la interfaz Empleado
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleModal } from "../../redux/slices/modal";
import EmpleadoService from "../../services/EmpleadoService"; // Importa el servicio de empleado
import Swal from "sweetalert2"; // Importa SweetAlert2

const ModalEmpleado: React.FC<{ getEmpleados: () => void }> = ({
    getEmpleados,
}) => {
    const [successMessage, setSuccessMessage] = useState<string>("");
    const empleadoService = new EmpleadoService(); // Instancia EmpleadoService
    const url = import.meta.env.VITE_API_URL;

    const initialValues: Empleado = {
        id: 0,
        nombre: "",
        turno: "",
        antiguedad: "",
        rol: {
            id: 0,
            nombre: "",
            horas: "",
            salario: "",
        },
    };

    const modal = useAppSelector((state) => state.modal.modal);
    const elementActive = useAppSelector((state) => state.tabla.elementActive);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(toggleModal({ modalName: "modal" }));
    };

    return (
        <Modal
            id={"modalEmpleado"}
            show={modal}
            onHide={handleClose}
            size={"lg"}
            backdrop="static"
            keyboard={false}
            centered // Centra el modal en la pantalla
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {elementActive ? "Editar empleado:" : "Añadir empleado:"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    validationSchema={Yup.object({
                        nombre: Yup.string().required("Campo requerido"),
                        turno: Yup.string().required("Campo requerido"),
                        antiguedad: Yup.number().required("Campo requerido"),
                        // Agrega validaciones para otros campos si es necesario
                    })}
                    initialValues={elementActive ? elementActive : initialValues}
                    enableReinitialize={true}
                    onSubmit={async (values: Empleado) => {
                        try {
                            if (elementActive) {
                                // Lógica para editar una empresa existente
                                await empleadoService.put(url + "empleado", values.id.toString(), values);
                                setSuccessMessage("Se ha actualizado correctamente.");
                            } else {
                                // Lógica para agregar una nueva empresa
                                await empleadoService.post(url + "empleado", values);
                                setSuccessMessage("Se ha agregado correctamente.");
                            }
                            getEmpleados(); // Actualiza las empresas
                            setTimeout(() => {
                                setSuccessMessage(""); // Limpiar el mensaje después de cierto tiempo
                                handleClose(); // Cierra el modal
                                Swal.fire({
                                    icon: "success",
                                    title: "¡Éxito!",
                                    text: successMessage,
                                });
                            }, 3000); // Ocultar el mensaje después de 3 segundos
                        } catch (error) {
                            console.error("Error al realizar la operación:", error);
                        }
                    }}
                >
                    {() => (
                        <>
                            <Form autoComplete="off" className="form-empleado">
                                <div className="mb-4">
                                    <label htmlFor="nombre">Nombre:</label>
                                    <Field
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre"
                                        className="form-control my-2"
                                    />
                                    <ErrorMessage
                                        name="nombre"
                                        className="error-message"
                                        component="div"
                                    />

                                    <label htmlFor="turno">Turno:</label>
                                    <Field
                                        name="turno"
                                        type="text"
                                        placeholder="Turno"
                                        className="form-control my-2"
                                    />
                                    <ErrorMessage
                                        name="turno"
                                        className="error-message"
                                        component="div"
                                    />

                                    <label htmlFor="antiguedad">Antiguedad:</label>
                                    <Field
                                        name="antiguedad"
                                        type="text"
                                        placeholder="Antiguedad"
                                        className="form-control my-2"
                                    />
                                    <ErrorMessage
                                        name="antiguedad"
                                        className="error-message"
                                        component="div"
                                    />
                                    {/* Agrega otros campos necesarios para el empleado */}
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        variant="outline-success"
                                        type="submit"
                                        className="custom-button"
                                    >
                                        Enviar
                                    </Button>
                                </div>
                            </Form>
                        </>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};

export default ModalEmpleado;
