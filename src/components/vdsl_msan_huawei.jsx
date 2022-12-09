import React, { Component } from 'react';
import ElGrafico from './elGrafico';
import logo from '../imgs/huawei_logo.png';
import { crearGraficaVDSL, crearGraficaCustom } from '../utils/graficaBRvrsKM';
import { calculoBrVDSLMsanHuawei, errorVDSLMsanHuawei, pasoDBaKMVDSLMsanHuawei, resultadoBuilder } from '../utils/functions';
import PanelResultados from './panel_resultados';
import Input from '../common/input';

class VDSLMsanHuawei extends Component {
	state = { 
		data: [],
		inputData: '',
		title: "Huawei (VDSL)",
		description: "MSAN Huawei: Un nodo de acceso multiservicio o MSAN (Multiservice access node) es un dispositivo que permite integrar los servicios de telefonía y de banda ancha en un solo aparato. Brinda tecnología de mas reciente generación para brindar servicios Triple Play a através de xDSL.",
		resultado: "Digite la atenuación reportada por el CPE en la casilla.",
		rango: 150000
	 } 

	 componentDidMount(){
        const data = crearGraficaVDSL(calculoBrVDSLMsanHuawei);
        this.setState({ data });
     };

	 handleSubmit = (e) => {
		e.preventDefault();
		//console.log("submitted");
		const nuevoKM = pasoDBaKMVDSLMsanHuawei(this.state.inputData);
		const nuevoBR = calculoBrVDSLMsanHuawei(nuevoKM);
		const errorValue = errorVDSLMsanHuawei();
		const inputData = this.state.inputData;
		const resultado = resultadoBuilder(inputData, nuevoKM, nuevoBR, errorValue);                         
		const data = crearGraficaCustom(calculoBrVDSLMsanHuawei, nuevoKM, errorValue);
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
						<h4 className="title is-4">Plataforma: MSAN</h4>
						<hr />
						<div id="elGrafico">
							<ElGrafico 
								data={data}
								rango={rango}
							/>
						</div>
						<form onSubmit={this.handleSubmit}>
							<Input
								max='50' 
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
 
export default VDSLMsanHuawei;

	