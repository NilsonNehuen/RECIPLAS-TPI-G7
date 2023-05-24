
import TablaProductosFabricados from "../components/TablaProductosFabricados";

import { WidthFull } from "@mui/icons-material";
import Navegacion from "../components/Navegacion";
import { useNavigate } from "react-router-dom";
// Componente de la tabla


export default function ListadoProductosFabricados(  ) {




    return(

        <div className="main-content" style={{   margin: "0", padding: "0",  width:"100%" }}>
        <div style={{  width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

      

        <div style={{ marginBottom: "20px", marginLeft: "10%", marginTop: "30px" }} >
        <Navegacion/>
        </div>


        <div style={{ marginBottom: "20px", marginLeft: "5%" }} >

            <h1> Listado Productos Fabricados </h1>
        </div>

        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "10%" }}>
            <div style={{ width: "72%",  }}>
            <TablaProductosFabricados />
            </div>
        </div>


        </div>
        </div>


)
}