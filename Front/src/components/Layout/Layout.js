import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import TipoVivienda from "../../pages/TipoVivienda";
import TipoEntidad from "../../pages/TipoEntidad";
import TipoBarrio from "../../pages/TipoBarrio";
import TipoEducacion  from "../../pages/TipoEducacion";
import TipoActividadEconomica from "../../pages/TipoActividadEconomica";
import Rutas from "../../pages/Rutas";
import EnfermedadesCubiertas from "../../pages/EnfermedadesCubiertas";
import Barrios from "../../pages/Barrios"; 
import Areas from "../../pages/Localidades";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/notifications" component={Notifications} />
              <Route path="/app/Barrios" component={Barrios}/>
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
               <Route
                exact
                path="/app/Parametros"
                render={() => <Redirect to="/app/Parametros/Localidades" />}
              />
              <Route path="/app/ui/icons" component={Icons}/>
              <Route path="/app/ui/charts" component={Charts}/>
              <Route path="/app/ui/maps" component={Maps}/>
              <Route path="/app/Parametros/Localidades" component={Areas} />
              <Route path="/app/Parametros/TipoVivienda" component={TipoVivienda} />
              <Route path="/app/Parametros/TipoBarrio" component={TipoBarrio} />
              <Route path="/app/Parametros/TipoEntidad" component={TipoEntidad} />
              <Route path="/app/Parametros/TipoEducacion" component={TipoEducacion} />
              <Route path="/app/Parametros/TipoActividadEconomica" component={TipoActividadEconomica} />
              <Route path="/app/Parametros/Rutas" component={Rutas} />
              <Route path="/app/Parametros/EnfermedadesCubiertas"component={EnfermedadesCubiertas} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
