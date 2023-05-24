import { Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import TablaDeudores from "../../components/TablaDeudores";
import Modal from "react-overlays/Modal";
import { useState } from "react";
import "../../componentsStyles.css";
import Navegacion from "../../components/Navegacion";
import CssBaseline from "@mui/material/CssBaseline";

function ClientesDeudores() {
  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    console.log("success");
  };

  return (
    <div className="Page">
      <div className="ParteSuperior">
        <div style={{ padding: "0px 0px 20px 20px" }}>
          <Navegacion />
        </div>
        <h1 style={{ margin: "0" }}>LISTADO DE CLIENTES DEUDORES</h1>
      </div>
      <div className="Caja">
        <CssBaseline />
        <TablaDeudores />
        <div
          style={{
            textAlign: "right",
            width: "100%",
            padding: "20px 0 20px 0",
          }}
        >
          {" "}
          <Button variant="outlined" onClick={() => setShowModal(true)}>
            Imprimir
          </Button>
        </div>
      </div>

      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className="modal-header">
            <div className="modal-title">Imprimir Clientes Deudores</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <p>¿Seguro que desea imprimir?</p>
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Cancelar
            </button>
            <button className="primary-button" onClick={handleSuccess}>
              Imprimir
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ClientesDeudores;
