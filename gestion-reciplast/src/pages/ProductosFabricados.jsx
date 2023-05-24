import React, { useState } from "react";
import Modal from "react-overlays/Modal";
import "../Modal.css";
import Navegacion from "../components/Navegacion";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fustavo from "../imagenes/Hasbulla.jpg"
import CampoValor from "../components/CampoValor";


function Datos() {
  return (
    <div style={{ display: "flex", width:"85%"}}>


      <div style={{width:"35%", paddingRight:"20px" }}>
        <img src={Fustavo} alt="meñique" width="100%" />
      </div>

      <div >
        <CampoValor nombre={"ID:"} valor={"789191"} />
        <CampoValor nombre={"Nombre Producto:"} valor={"Polipropileno"} />
        <CampoValor nombre={"Descripcion:"} valor={"Es un plastico resistente y transparete"} />
        <CampoValor nombre={"Cant. Minima:"} valor={"24 g"} />
        <CampoValor nombre={"Cant. Maxima"} valor={"50 g"} />
        <CampoValor nombre={"Fecha ultima modificacion"} valor={"22/07/2023"} />
      </div>

    </div>
  );
}



















export default function ProductosFabricados() {

  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    setResultado(cantidad);
    setShowModal(false);
  };

  const [cantidad, setCantidad] = useState(' ');
  const [resultado, setResultado] = useState(' ');




  return (
    <div className="modal-example" style={{
      width: "100%", justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }} >

      <div>

        <div style={{ marginBottom: "20px", marginLeft: "10%" }} >
          <Navegacion />
        </div>


        <div style={{ marginBottom: "20px", marginLeft: "5%", width:"100%" }} >
          <h1> Detalle de Productos Fabricados </h1>
        </div>
      </div>

      <div style={{ justifyContent: "center", alignItems: "center", width:"100%" }}>
        <Datos />


        <Grid item xs={3}>
          <TextField
            fullWidth
            disabled
            id="Fecha Ultima modificacion"
            label="Cantidad"
            defaultValue="23"
            value={resultado}

          />
        </Grid>



      </div>
      <div className="Caja">

      </div>
      {/* Aca va la tabla */}
      <div className="Caja">
        <div style={{ justifyContent: "right", width: "100%", padding: "20px", display: "flex" }}>


        </div>
      </div>
      <div style={{ textAlign: "right", width: "90%" }}>
        {" "}
      </div>





      <div>
        <button type="button" onClick={() => setShowModal(true)}>
          Modificar Stock
        </button>
      </div>


      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className="modal-header">
            <div className="modal-title">INGRESO</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <p>La cantidad de nuevos productos es.</p>
            <input type="text" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Close
            </button>
            <button className="primary-button" onClick={handleSuccess}>
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}