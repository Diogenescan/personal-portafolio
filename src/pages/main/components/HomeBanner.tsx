import React from "react";

import {banner} from "../../../constants/mainConstants";

import '../styles/home_banner.css';


const HomeBanner = () => {
    return (
        <section className="Banner">
            <div className="Content">
                <header>
                    <h2 className={"Title"}> {banner.title} </h2>
                    <p className={"Subtitle"}> {banner.subtitle} </p>
                    <ul className={"Skills"}>
                        {banner.skills.map((skill) => (
                            <li key={skill}> {skill} </li>
                        ))}
                    </ul>
                </header>
            </div>
        </section>
    )
};

export default HomeBanner;