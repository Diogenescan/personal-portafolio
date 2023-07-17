import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from "react-bootstrap/Button";
import {House, FileText, BarChart, Terminal, Tools, Person} from "react-bootstrap-icons";

interface IconProps {
  className?: string;
}
interface NavigationLinkProps {
  path: string;
  icon: React.ComponentType<IconProps>;
  label: string;
}

const NavigationHeaderLink = React.memo<NavigationLinkProps>((
    {
      path,
      icon: Icon,
      label}) => {
  return (
    <NavLink to={path} className="Header-Nav-Links" reloadDocument={true}>
      <Icon className="Link-Icon" />
      <span className={"Link-Label"}>{label}</span>
    </NavLink>
  );
});

const Header = () => {
  return (
      <header className="Header">
        <nav className="Navigation-Bar">
          <ul>
            <li>
              <NavigationHeaderLink path={"/personal-portafolio"} icon={House} label={"Home"}/>
            </li>
            <li>
              <NavigationHeaderLink path="/personal-portafolio/projects" icon={FileText} label={"Projects"}/>
              <ul>
                <li>
                  <NavigationHeaderLink path="/personal-portafolio/projects/development" icon={Terminal} label={"Software Engineering"}/>
                </li>
                <li>
                  <NavigationHeaderLink path="/personal-portafolio/projects/data" icon={BarChart} label={"Data Science"}/>
                </li>
                <li>
                  <NavigationHeaderLink path="/personal-portafolio/projects/other" icon={Tools} label={"Others"}/>
                </li>
              </ul>
            </li>
            <li>
              <NavigationHeaderLink path="/personal-portafolio/about" icon={Person} label={"About Me"}/>
            </li>
            <li>
              <Button className={"Contact-Button"}
                      variant={"primary"}>
                Contacto
              </Button>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;