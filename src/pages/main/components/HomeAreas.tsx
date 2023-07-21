import Carousel from 'react-bootstrap/Carousel';
import {areas} from "../../../constants/mainConstants";

import '../styles/home_areas.css';

const HomeAreas = () => {
    return (
        <section className="Areas">
            <div className="Content">
                <header className="Introduction">
                    <h2 className={"Title"}>{areas.title}</h2>
                    <p className={"Subtitle"}>{areas.subtitle}</p>
                </header>
                <Carousel className="Specifics" interval={null} variant={"dark"}>
                    <Carousel.Item className="Specific-Area">
                        <img className="Image" src={areas.backend_software.image} alt="Areas"/>
                        <Carousel.Caption className={"Text"}>
                            <h3 className={"Caption-Title"}>{areas.backend_software.title}</h3>
                            <p className={"Caption-Description"}>{areas.backend_software.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="Specific-Area">
                        <img className="Image" src={areas.frontend_software.image} alt="Areas"/>
                        <Carousel.Caption className={"Text"}>
                            <h3 className={"Caption-Title"}>{areas.frontend_software.title}</h3>
                            <p className={"Caption-Description"}>{areas.frontend_software.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="Specific-Area">
                        <img className="Image" src={areas.data_analysis.image} alt="Areas"/>
                        <Carousel.Caption className={"Text"}>
                            <h3 className={"Caption-Title"}>{areas.data_analysis.title}</h3>
                            <p className={"Caption-Description"}>{areas.data_analysis.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="Specific-Area">
                        <img className="Image" src={areas.data_science.image} alt="Areas"/>
                        <Carousel.Caption className={"Text"}>
                            <h3 className={"Caption-Title"}>{areas.data_science.title}</h3>
                            <p className={"Caption-Description"}>{areas.data_science.description} </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="Specific-Area">
                        <img className="Image" src={areas.data_visualization.image} alt="Areas"/>
                        <Carousel.Caption className={"Text"}>
                            <h3 className={"Caption-Title"}>{areas.data_visualization.title}</h3>
                            <p className={"Caption-Description"}>{areas.data_visualization.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="Specific-Area">
                        <img className="Image" src={areas.teaching.image} alt="Areas"/>
                        <Carousel.Caption className={"Text"}>
                            <h3 className={"Caption-Title"}>{areas.teaching.title}</h3>
                            <p className={"Caption-Description"}>{areas.teaching.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default HomeAreas;