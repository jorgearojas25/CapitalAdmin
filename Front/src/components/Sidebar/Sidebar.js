import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  HomeWork as HomeWorkIcon,
  PersonPinCircle as PeopleIcon,
  Domain as DomainIcon,
  Group as GroupIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  // {
  //   id: 1,
  //   label: "Typography",
  //   link: "/app/typography",
  //   icon: <TypographyIcon />,
  // },
  // { id: 2, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
  // {
  //   id: 3,
  //   label: "Notifications",
  //   link: "/app/notifications",
  //   icon: <NotificationsIcon />,
  // },
  {
    id: 4,
    label: "Barrios",
    link: "/app/Barrios",
    icon: <HomeWorkIcon />,
  },
  {
    id: 5,
    label: "Entidades",
    link: "/app/Entidades",
    icon: <DomainIcon />,
  },
  {
    id: 6,
    label: "Familias",
    link: "/app/Familia",
    icon: <GroupIcon />,
  },
  {
    id: 7,
    label: "Personas",
    link: "/app/Personas",
    icon: <PeopleIcon />,
  },
  // {
  //   id: 6,
  //   label: "UI Elements",
  //   link: "/app/ui",
  //   icon: <UIElementsIcon />,
  //   children: [
  //     { label: "Icons", link: "/app/ui/icons" },
  //     { label: "Charts", link: "/app/ui/charts" },
  //     { label: "Maps", link: "/app/ui/maps" },
  //   ],
  // },
  {
    id: 8,
    label: "Parametros",
    link: "/app/Parametros",
    icon: <UIElementsIcon />,
    children: [
      { label: "Localidades", link: "/app/Parametros/Localidades" },
      { label: "Tipo vivienda", link: "/app/Parametros/TipoVivienda" },
      { label: "Tipo barrio", link: "/app/Parametros/TipoBarrio" },
      { label: "Tipo entidad", link: "/app/Parametros/TipoEntidad" },
      { label: "Tipo educacion", link: "/app/Parametros/TipoEducacion" },
      { label: "Tipo actividad economica", link: "/app/Parametros/TipoActividadEconomica" },
      { label: "Rutas", link: "/app/Parametros/Rutas" },
      { label: "Enfermedades cubiertas", link: "/app/Parametros/EnfermedadesCubiertas"}
    ],
  },
  { id: 9, type: "divider" },
  { id: 10, type: "title", label: "HELP" },
  { id: 11, label: "Library", link: "", icon: <LibraryIcon /> },
  { id: 12, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 13, label: "FAQ", link: "", icon: <FAQIcon /> },
  // { id: 13, type: "divider" },
  // { id: 14, type: "title", label: "PROJECTS" },
  // {
  //   id: 15,
  //   label: "My recent",
  //   link: "",
  //   icon: <Dot size="large" color="warning" />,
  // },
  // {
  //   id: 16,
  //   label: "Starred",
  //   link: "",
  //   icon: <Dot size="large" color="primary" />,
  // },
  // {
  //   id: 17,
  //   label: "Background",
  //   link: "",
  //   icon: <Dot size="large" color="secondary" />,
  // },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
