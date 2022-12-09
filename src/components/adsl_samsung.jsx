import React, { Component } from 'react';
import ElGrafico from './elGrafico';
import logo from '../imgs/samsung_logo.png';
import { crearGrafica, crearGraficaCustom } from '../utils/graficaBRvrsKM';
import { calculoBrADSLSamsung, errorADSLSamsung, pasoDBaKMADSLSamsung, resultadoBuilder } from '../utils/functions';
import PanelResultados from './panel_resultados';
import Input from '../common/input';

class ADSLSamsung extends Component {
	state = { 
		data: [],
		inputData: '',
		title: "SAMSUNG (ADSL)",
		description: "DSLAM: siglas de Digital Subscriber Line Access Multiplexer (Multiplexor de acceso de línea de abonado digital). Multiplexor localizado en la central telefónica que proporciona a los abonados acceso a los servicios internet sobre cable de par trenzado de cobre. El dispositivo separa la voz y los datos de las líneas de abonado. Es la más antigua de las plataformas xDSL del ICE.",
		resultado: "Digite la atenuación reportada por el CPE en la casilla.",
		rango: 30000
	 } 

	 componentDidMount(){
        const data = crearGrafica(calculoBrADSLSamsung);
        this.setState({ data });
     };

	 handleSubmit = (e) => {
		e.preventDefault();
		//console.log("submitted");
		const nuevoKM = pasoDBaKMADSLSamsung(this.state.inputData);
		const nuevoBR = calculoBrADSLSamsung(nuevoKM);
		const errorValue = errorADSLSamsung();
		const inputData = this.state.inputData;
		const resultado = resultadoBuilder(inputData, nuevoKM, nuevoBR, errorValue);                         
		const data = crearGraficaCustom(calculoBrADSLSamsung, nuevoKM, errorValue);
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
						<h4 className="title is-4">Plataforma: DSLAM</h4>
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
 
export default ADSLSamsung;

	