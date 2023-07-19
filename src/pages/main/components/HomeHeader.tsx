import React from 'react';
import {NavLink} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import {House, FileText, BarChart, Terminal, Tools, Person} from "react-bootstrap-icons";

import '../styles/home.css';

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
        label
    }) => {
    return (
        <NavLink to={path} className="Header-Nav-Links" reloadDocument={true}>
            <Icon className="Link-Icon"/>
            <span className={"Link-Label"}>{label}</span>
        </NavLink>
    );
});

const Header = () => {
    return (
        <header className="Header">
            <Navbar className="Navigation-Bar">
                <Container>
                    <NavigationHeaderLink path={"/personal-portafolio"} icon={House} label={"Home"}/>
                    <NavDropdown
                        title={<NavigationHeaderLink path="/personal-portafolio/projects" icon={FileText} label={"Projects"}/>}
                        id="header-navigation-items-projects">
                        <NavDropdown.Item>
                            <NavigationHeaderLink path="/personal-portafolio/projects/development" icon={Terminal} label={"Software Engineering"}/>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavigationHeaderLink path="/personal-portafolio/projects/data" icon={BarChart} label={"Data Science"}/>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavigationHeaderLink path="/personal-portafolio/projects/other" icon={Tools} label={"Others"}/>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavigationHeaderLink path="/personal-portafolio/about" icon={Person} label={"About Me"}/>
                    <Button
                        className={"Contact-Button"}
                        variant={"outline-primary"}>
                        Contacto
                    </Button>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;