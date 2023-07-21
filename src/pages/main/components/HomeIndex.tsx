import Header from "./HomeHeader";
import HomeBanner from "./HomeBanner";
import HomeSummary from "./HomeSummary";
import HomeAreas from "./HomeAreas";
import HomeSkills from "./HomeSkills";
import HomeExperience from "./HomeExperience";

const HomeIndex = () => {
    return (
        <div className={"HomeIndex"}>
            <Header/>
            <HomeBanner/>
            <HomeSummary/>
            <HomeAreas/>
        </div>
    );
};

export {HomeIndex};