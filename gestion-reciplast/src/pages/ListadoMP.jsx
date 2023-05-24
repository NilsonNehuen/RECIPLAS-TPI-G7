import React from "react";
import TablaCompleta from "../components/TablaCompleta";
import TablaMP from "../components/TablaMP";
import { useState } from "react";
import Modal from "react-overlays/Modal";
import { Button } from "@mui/material";


const ListadoMP = () => {

    const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    console.log("success");
  };

  const handlePrint = () => {
    setShowModal(true);
  };

    return (
        <div>
            
            <TablaCompleta titulo="Stock Materia Prima" />
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
                            <button className="primary-button" onClick={handleSuccess}>
                                Aceptar
                            </button>
                        </div>
                    </div>
                </Modal>

                <Button variant="outlined" onClick={handlePrint}>
                    Imprimir
                </Button>
            </div>
        </div>


    )
}


export default ListadoMP;



// <TablaCompleta titulo= "Stock Materia Prima" />