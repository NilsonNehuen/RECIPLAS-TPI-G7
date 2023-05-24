import React from "react";
import CampoValor from "../components/CampoValor";

const Home = () => {

    document.title = 'Home';

    return (
        <div>
                  <h1> Home </h1>
                  <CampoValor nombre="Edad" valor="25" />
        </div>
      
    )
}


export default Home;