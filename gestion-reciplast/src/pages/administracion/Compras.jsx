import { Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import TablaCompras from "../../components/TablaCompras";
import Navegacion from "../../components/Navegacion";
import CssBaseline from "@mui/material/CssBaseline";
import "../../componentsStyles.css";
import { useState } from "react";
import Modal from "react-overlays/Modal";

function Compras() {

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
    <div className="Page">
      <div className="ParteSuperior">
        <div style={{ padding: "0px 0px 20px 20px" }}><Navegacion /></div>
        <h1 style={{ margin: "0" }}>LISTADO DE COMPRAS</h1>
      </div>
      <div className="Caja">
        <CssBaseline />
        <TablaCompras />
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

  );
}

export default Compras;