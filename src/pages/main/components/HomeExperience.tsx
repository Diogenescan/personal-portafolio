import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {experiences} from '../../../constants/mainConstants';

interface Experience {
    date: string;
    icon: string;
    company_name: string;
    title: string;
}

const ExperienceCard = ({experience}: { experience: Experience }) => (
    <VerticalTimelineElement
        date={experience.date}
        icon={
            <div>
                <img src={experience.icon}
                     alt={experience.company_name}/>
            </div>}>
        <div>
            <h3>
                {experience.title}
            </h3>
            <p>
                {experience.company_name}
            </p>
        </div>
    </VerticalTimelineElement>
);

const HomeExperience = () => {
    return (
        <div className={"Experience"}>
            <h2>
                Work Experience.
            </h2>
            <div>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default HomeExperience;