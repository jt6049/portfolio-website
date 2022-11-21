import React from "react";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./about";
function HomePage(){
    return(
        <div>
            <Title/>
            <RecommendationSection/>
            <SkillSection/>
            <ProjectSection/>
            <About/>

        </div>
    );
}
export default HomePage;