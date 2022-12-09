import React, { Component } from 'react';
import logo_medium from '../imgs/logo_medium.png';

class Home extends Component {
    state = {  } 

    handleClick = () => {
        console.log('button Click!');
     };

    render() { 
        return (
            <div className="columns is-centered mi_row"> 
                <div className="column is-narrow mi_col">
                    {/*<h1 className="title">¡Bienvenido a CuTesT!</h1>*/}
                    <img src={logo_medium} alt="CuTest Logo"/>
            </div>
        </div>
        );
    }
}
 
export default Home;