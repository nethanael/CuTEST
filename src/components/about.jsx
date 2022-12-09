import React from "react";

const About = () => {
    return (
        <React.Fragment>

            <div className="columns is-centered mi_row">
                <div className="column mi_col">
                    <div id="" className="notification">Esta aplicación permite hacer una estimación de los parámetros de distancia,
                    atenuación y capacidad de canal del <strong>COBRE</strong> <em>(Cu)</em>; desde el equipo de acceso, hasta el inmueble del cliente. Se puede realizar
                    para cada una de las plataformas xDSL del ICE, tales como: DSLAM Samsung, IMAP y NAM Volius, MSAN Huawei 
                    y Calix. Calculos son posibles gracias a un estudio de metodos estadísticos aplicados a mediciones realizadas en el 
                    laboratorio de Investigación y Desarrollo de Sistemas Fijos, Unidad Infraestructura.
                    </div>
                    <div id="" className="notification">La estimación de los parámetros en esta plataforma se basa en un ajuste por regresión
                        polinómica de las gráficas obtenidas en las mediciones del laboratorio capacidad de canal
                        versus distancia, así como atenuación versus distancia. <b>Se utilizó una muestra de cables de 0.4mm,
                        calibre que se considerá como crítico pues es el que presenta mayor atenuación por defecto.</b>  
                        Se utilizan distancias variables entre los 0 y 5 kms para ADSL y los 0 y 3 KMs para VDSL.
                    </div>
                </div>
            </div>
            
            <div className="columns is-centered mi_row"> 
                <div className="column is-narrow mi_col">
                    <h1>Desarrollador: Ing. Pablo Hidalgo Acuña</h1>
                    <h1>Modelo Matemático: Ing. Geovanny Morales</h1>
                    <h1>Pruebas de campo: Ing. Andrés Bermúdez</h1>
                </div>
            </div>
            
        </React.Fragment>
        );
}
 
export default About;