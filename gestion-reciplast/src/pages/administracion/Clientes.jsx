import { Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import TablaClientes from "../../components/TablaClientes";
import Navegacion from "../../components/Navegacion";
import "../../componentsStyles.css";
import CssBaseline from "@mui/material/CssBaseline";
import Modal from "react-overlays/Modal";
import "../../Modal.css";
import { useState } from "react";


function Clientes() {
    const [showModal, setShowModal] = useState(false);
  
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  
    const handleClose = () => setShowModal(false);
  
    const handlePrint = () => {
      setShowModal(true);
    };

    const handleSuccess = () => {
        console.log("success");
    };
  
    return (
      <>
        <div className="Page">
          <div className="ParteSuperior">
            <div style={{ padding: "0px 0px 20px 20px" }}><Navegacion/></div>
            <h1 style={{ margin: "0" }}>LISTADO DE CLIENTES</h1>
          </div>
          <div className="Caja">
            <CssBaseline />
            <TablaClientes />
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
        </div>
      </>
    );
  }
  
  export default Clientes;