import {summary} from "../../../constants/mainConstants";

import "../styles/home_summary.css"

const HomeSummary = () => {
    return (
        <section className="Summary">
            <div className="Content">
                <header className={"Introduction"}>
                    <h2 className={"Title"}> {summary.title} </h2>
                    <span className={"Subtitle"}> {summary.subtitle} </span>
                </header>
                <span className={"Description"}>{summary.section_1}</span>
                <span className={"Description"}>{summary.section_2}</span>
                <span className={"Description"}>{summary.section_3}</span>
            </div>
        </section>
    )
}

export default HomeSummary;