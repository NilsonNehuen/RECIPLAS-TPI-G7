import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Typography, Link, Card } from '@mui/material';
//import './RegisterProductPage.css'; // Agrega un archivo CSS para estilos adicionales

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import { MuiFileInput } from 'mui-file-input'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { NavLink } from 'react-router-dom';
import SelectSmall from '../../components/SelectSmall';

function NuevoUsuario() {
    const [productType, setProductType] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleProductTypeChange = (event) => {
        setProductType(event.target.value);
        // Si el usuario selecciona "Materia Prima", se borra el valor de precio
        // y se deshabilita el campo para que no se pueda ingresar un valor.
        if (event.target.value === 'Materia Prima') {
            setProductPrice('');
        }
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductDescriptionChange = (event) => {
        setProductDescription(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleProductImageChange = (event) => {
        setProductImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos del producto al servidor para registrarlo
        console.log({
            productType,
            productName,
            productDescription,
            productPrice,
            productImage,
        });
    };

    // Aquí se agrega el estilo CSS utilizando template literals
    const styles = `
    input[type="number"]:disabled {
    color: #aaa;
    }
    `;

    const [file, setFile] = React.useState(null)

    const handleChange = (newFile) => {
        setFile(newFile)
    }


    return (
        <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ width: "100%" }}>
            <style>{styles}</style>

            <Grid item xs={12}>
                <p><NavLink to="/home" >Home</NavLink> » Stock » Registrar</p>
            </Grid>

            <Grid container xs={8} direction="row" justifyContent="center" alignItems="center" border="1px solid black" borderRadius={8} padding={2}>
                <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                    <Typography variant="h4" gutterBottom>
                        Formulario de Nuevo Usuario
                    </Typography>
                </Grid>

                <form onSubmit={handleSubmit}>
                    

                    <Grid container xs={12}
                        justifyContent="flex-start"
                        alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                            <label>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Nombre"
                                    multiline
                                    maxRows={4}
                                />
                            </label>
                        </Grid>

                        <Grid item xs={6}>
                            <label>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Apellido"
                                    multiline
                                    maxRows={4}
                                />
                            </label>
                        </Grid>
                    </Grid>

                    <br /> <br />
                    <Grid container xs={12} alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                id="date"
                                label="Fecha de nacimiento"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Usuario"
                                multiline
                                maxRows={4}
                            />
                        </Grid>

                    </Grid>

                    <br /><br />

                    <Grid container xs={12} spacing={1}>

                        <Grid item xs={6}>
                            <SelectSmall />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>

                    </Grid>
                    <br /> <br />

                    <Grid container xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                disabled
                                id="filled-disabled"
                                label="ID"
                                defaultValue="9999"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                disabled
                                id="filled-disabled"
                                label="Usuario"
                                defaultValue="xxxx"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>

                    <br /><br />

                    <Grid container xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                disabled
                                id="filled-disabled"
                                label="Fecha"
                                defaultValue="aaaa/mm/dd"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>

                    <br /> <br />

                    <Grid container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center">
                        <Button variant="contained" color="success">
                            Registrar
                        </Button>
                        {/* <button type="submit">Registrar</button> */}
                        <Button variant="outlined">Cancelar</Button>
                        {/* <button type="button">Cancelar</button> */}
                    </Grid>


                </form>
            </Grid>




        </Grid>
    );
}

export default NuevoUsuario;