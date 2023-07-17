import Header from "./HomeHeader";
import HomeBanner from "./HomeBanner";
import HomeContent from "./HomeContent";

const HomeIndex = () => {
    return (
        <div className={"HomeIndex"}>
            <Header/>
            <HomeBanner/>
            <HomeContent/>
        </div>
    );
};

export {HomeIndex};