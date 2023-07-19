import {technologies} from '../../../constants/mainConstants';

const HomeSkills = () => {
    return (
        <div className={"Skills"}>
            <h2>Technologies</h2>
            <div>
                {technologies.map((technology) => (
                    <div key={technology.name}>
                        <img src={technology.icon} alt={technology.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSkills;