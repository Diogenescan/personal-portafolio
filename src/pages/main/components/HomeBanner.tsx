import React from "react";

import {banner} from "../../../constants/mainConstants";

const HomeBanner = () => {
    return (
        <section className="Banner">
            <div className="Content">
                <header>
                    <h2> {banner.title} </h2>
                    <p> {banner.subtitle} </p>
                    <ul>
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