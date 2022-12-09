const PanelResultados = (props) => {
    return ( 
        <div className="column bg-light mi_col">
            <h4 className="title is-4">{props.title}</h4>
            <hr />
            <div className="notification is-info is-light">
                {props.resultado}
            </div>
            <hr />
            <div className="notification is-info is-light">
                {props.description}
                <div className="columns mi_row">
                    <div className="column mi_col"></div>
                    <div className="column mi_col">
                        <figure className="image is-128x128">
                            <img src={props.logo} alt="Logo_pendiente" />
                        </figure>
                    </div>
                    <div className="column mi_col"></div>
                </div>
            </div>
            <hr />
        </div>
     );
}
 
export default PanelResultados;