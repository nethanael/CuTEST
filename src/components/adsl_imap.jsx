import React, { Component } from 'react';
import ElGrafico from './elGrafico';
import logo from '../imgs/volius_logo.png';
import { crearGrafica, crearGraficaCustom } from '../utils/graficaBRvrsKM';
import { calculoBrADSLImap, errorADSLImap, pasoDBaKMADSLImap, resultadoBuilder } from '../utils/functions';
import PanelResultados from './panel_resultados';
import Input from '../common/input';

class ADSLImap extends Component {
	state = { 
		data: [],
		inputData: '',
		title: "Volius (ADSL)",
		description: "Plataforma de accesos multiservicios integrada. Red de acceso multiservicio integrada basada en fibra óptica que permite al ICE resolver las necesidades de red en los diferentes servicios de infocomunicaciones que brinda a los clientes, topología de anillo con un Upstream de 100Mbps.",
		resultado: "Digite la atenuación reportada por el CPE en la casilla.",
		rango: 30000
	 } 

	 componentDidMount(){
        const data = crearGrafica(calculoBrADSLImap);
        this.setState({ data });
     };

	 handleSubmit = (e) => {
		e.preventDefault();
		//console.log("submitted");
		const nuevoKM = pasoDBaKMADSLImap(this.state.inputData);
		const nuevoBR = calculoBrADSLImap(nuevoKM);
		const errorValue = errorADSLImap();
		const inputData = this.state.inputData;
		const resultado = resultadoBuilder(inputData, nuevoKM, nuevoBR, errorValue);                         
		const data = crearGraficaCustom(calculoBrADSLImap, nuevoKM, errorValue);
		this.setState({ resultado, data });                                        
	};

	handleChange = (e) => {
		let inputData = this.state.inputData;
		inputData = e.currentTarget.value;
		//console.log(inputData);
		this.setState({ inputData }); 
	};

	render() { 
		const { 
			data, 
			rango, 
			inputData, 
			title, 
			description, 
			resultado 
		} = this.state;  
		return (

			<div className="container mi_cont">
				<div className="columns mi_row">
					
					<div className="column mi_col">
						<h4 className="title is-4">Plataforma: IMAP</h4>
						<hr />
						<div id="elGrafico">
							<ElGrafico 
								data={data}
								rango={rango}
							/>
						</div>
						<form onSubmit={this.handleSubmit}>
							<Input
								max='70' 
								onChange={this.handleChange}
								value={inputData} 
							/>
							<div className="columns mi_row">
								<div className="column mi_col"></div>
								<div className="column mi_col"></div>
								<div className="column mi_col">
									<button 
									type="submit"  
									className="button is-warning"
									>
										Calcular
									</button>
								</div>
								<div className="column mi_col"></div>
								<div className="column mi_col"></div>
							</div>
						</form>
					</div>
		
					<PanelResultados 
						title={title}
						description={description}
						resultado={resultado}
						logo={logo}
					/>
		
				</div>	        
			</div>
			  );
	}
}
 
export default ADSLImap;