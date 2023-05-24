
import TablaProductosFabricadosAdm from "../../components/TablaProductosFabricadosAdm";

import { WidthFull } from "@mui/icons-material";
import Navegacion from "../../components/Navegacion";
import { useNavigate } from "react-router-dom";
// Componente de la tabla
import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "react-overlays/Modal";


export default function ListadoProductosFabricados() {

    const [showModal, setShowModal] = useState(false);

  const [showModal1, setShowModal1] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleClose1 = () => setShowModal1(false);

  const handlePrint = () => {
    setShowModal(true);
  };

    return (

        <div className="main-content" style={{ margin: "0", padding: "0", width: "100%" }}>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>



                <div style={{ marginBottom: "20px", marginLeft: "10%", marginTop: "30px" }} >
                    <Navegacion />
                </div>


                <div style={{ marginBottom: "20px", marginLeft: "5%" }} >

                    <h1> Listado Productos Fabricados </h1>
                </div>

                <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "10%" }}>
                    <div style={{ width: "72%", }}>
                        <TablaProductosFabricadosAdm />
                        <div
                            style={{
                                textAlign: "right",
                                width: "100%",
                                padding: "20px 0 20px 0",
                            }}
                        >
                            <Modal
                                className="modal"
                                show={showModal}
                                onHide={handleClose}
                                renderBackdrop={renderBackdrop}
                            >
                                <div>
                                    <div className="modal-header">
                                        <div>
                                            <span className="close-button" onClick={handleClose}>
                                                x
                                            </span>
                                        </div>
                                    </div>
                                    <div className="modal-desc">
                                        <p>¿Seguro desea imprimir?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="secondary-button" onClick={handleClose}>
                                            Cancelar
                                        </button>
                                        <button
                                            className="primary-button"
                                            onClick={() => setShowModal1(true)}
                                        >
                                            Aceptar
                                        </button>
                                        <Modal
                                            className="modal"
                                            show={showModal1}
                                            onHide={handleClose}
                                            renderBackdrop={renderBackdrop}
                                        >
                                            <div>
                                                <div className="modal-header">
                                                    <div>
                                                        <span
                                                            className="close-button"
                                                            onClick={() => {
                                                                setShowModal1(false);
                                                                setShowModal(false);
                                                            }}
                                                        >
                                                            x
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="modal-desc">
                                                    <p>Se ha impreso con éxito</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        className="primary-button"
                                                        onClick={() => {
                                                            setShowModal1(false);
                                                            setShowModal(false);
                                                        }}
                                                    >
                                                        Aceptar
                                                    </button>
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                            </Modal>

                            <button
                                className="Button"
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            >
                                IMPRIMIR
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </div>


    )
}