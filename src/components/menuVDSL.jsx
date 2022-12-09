import { NavLink } from "react-router-dom";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

//import { 'fa-arrow-trend-up' } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuADSL = () => {
    return (
        <div className="columns is-centered mi_row"> 
            <div className="column is-narrow mi_col">
                <article className="panel is-link">
                    <p className="panel-heading">
                        Seleccione Plataforma:
                    </p>
                    <NavLink to="/cutest/vdsl_msan_calix" className="panel-block is-active">
                        <span className="panel-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        MSAN Calix
                    </NavLink>
                    <NavLink to="/cutest/vdsl_msan_huawei" className="panel-block is-active">
                        <span className="panel-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        MSAN Huawei
                    </NavLink>
                </article>
            </div>
        </div>
      );
}
 
export default MenuADSL;