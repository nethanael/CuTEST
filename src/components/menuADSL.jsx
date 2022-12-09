import { NavLink } from "react-router-dom";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuADSL = () => {
    return (
        <div className="columns is-centered mi_row"> 
            <div className="column is-narrow mi_col">
                <article className="panel is-success">
                    <p className="panel-heading">
                        Seleccione Plataforma:
                    </p>
                    <NavLink to="/cutest/adsl_samsung" className="panel-block is-active">
                        <span className="panel-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        DSLAM Samsung
                    </NavLink>
                    <NavLink to="/cutest/adsl_imap" className="panel-block is-active">
                        <span className="panel-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        IMAP Volius
                    </NavLink>
                    <NavLink to="/cutest/adsl_nam" className="panel-block is-active">
                        <span className="panel-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        NAM Volius
                    </NavLink>
                    <NavLink to="/cutest/adsl_msan_huawei" className="panel-block is-active">
                        <span className="panel-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        MSAN Huawei
                    </NavLink>
                    <NavLink to="/cutest/adsl_msan_calix" className="panel-block is-active">
                        <span className="panel-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        MSAN Calix
                    </NavLink>
                </article>
            </div>
        </div>
            
      );
}
 
export default MenuADSL;