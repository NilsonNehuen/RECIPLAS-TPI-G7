import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid, TextField, Button, Checkbox } from '@mui/material';
import Modal from "react-overlays/Modal";
import { useState } from 'react';
import "../Modal.css";
import "../componentsStyles.css";

function createData(descripcion, id, fecha, total, proveedor) {
  return {
    descripcion,
    id,
    fecha,
    total,
    proveedor,
    history: [
      {
        name: 'Botella',
        pu: 35,
        cantidad: 3,
        descripcion: "Buen producto"
      },
      {
        name: 'Bolsas',
        pu: 5,
        cantidad: 1,
        descripcion: "Buenisimo"
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    console.log("success");
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          <Checkbox />
        </TableCell>
        <TableCell component="th" scope="row" align="center" >
          {row.fecha}
        </TableCell>
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.proveedor}</TableCell>
        <TableCell align="center">{row.total}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>

            {/* Detalle de cada fila */}
            <Box sx={{ margin: 1 }}>

              <p><strong>Comentarios:</strong> {row.descripcion}</p>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Producto</TableCell>
                    <TableCell align="center">Descripcion</TableCell>
                    <TableCell align="center">Precio por kg</TableCell>
                    <TableCell align="center">Cantidad (kg)</TableCell>
                    <TableCell align="center">Total ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row" align="left">
                        {historyRow.name}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.descripcion}
                      </TableCell>
                      <TableCell align="center">{historyRow.pu}</TableCell>
                      <TableCell align="center">{historyRow.cantidad}</TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.cantidad * historyRow.pu * 100) / 100}
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <br />

              <Grid container
                direction="row"
                justifyContent="flex-end"
                alignItems="center">
                <button className='Button' onClick={() => setShowModal(true)}>Imprimir</button>
              </Grid>
              {/* <div>
                <button type="button" onClick={() => setShowModal(true)}>
                  Open Modal
                </button>
              </div> */}

              <Modal
                className="modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
              >
                <div>
                  <div className="modal-header">
                    <div className="modal-title">Imprimir Compra</div>
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

              {/* <Grid container
              direction="row"
              justifyContent="flex-end"
              alignItems="center">
              <Button variant="outlined">Imprimir</Button>
            </Grid> */}

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment >
  );
}


const rows = [
  createData('Polietileno de baja densidad (PEBD)', 9999, "02/03/2023", 2400, "proveedor"),
  createData('Compras para administación', 237, "15/03/2023", 2374, "proveedor"),
  createData('Utiles para área ventas', 3465, "15/03/2023", 6543, "proveedor"),
  createData('Polietileno tereftalato (PET)', 235677, "15/03/2023", 3600, "proveedor"),
  createData('Poliestireno (PS)', 6587, "15/03/2023", 5000, "Rocco"),
  createData('Polietileno tereftalato (PET)', 95238, "15/03/2023", 2463, "proveedor"),
];

export default function TablaCompras() {
  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
            <TableCell ><Typography variant="h6" color="initial"> </Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Fecha</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">ID</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Proveedor</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Total</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Detalles</Typography></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}