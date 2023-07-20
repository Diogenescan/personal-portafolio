import React from "react";
import { NavLink } from "react-router-dom";

import {banner} from "../../../constants/mainConstants";
import {CardGroup} from "react-bootstrap";
import {Card} from "react-bootstrap";

import '../styles/home_banner.css';


const HomeBanner = () => {
    return (
        <section className="Banner">
            <div className="Content">
                <header>
                    <h2 className={"Title"}> {banner.title} </h2>
                    <p className={"Subtitle"}> {banner.subtitle} </p>
                    <CardGroup className={"Skills"}>
                        {banner.skills.name.map((skill, index) => (
                            <Card className={"Items"}  id={banner.skills.id[index]} key={index}>
                                <NavLink className={"Nav"} to={banner.skills.path[index]}>
                                    <Card.Img className={"Icon"} variant="top" src={banner.skills.icon[index]} />
                                    <Card.Body>
                                        <Card.Title>{skill}</Card.Title>
                                    </Card.Body>
                                </NavLink>
                            </Card>
                        ))}
                    </CardGroup>
                </header>
            </div>
        </section>
    )
};

export default HomeBanner;