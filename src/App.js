import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import ProjectSection from "./components/ProjectSection";
import RecommendationStack from "./components/RecommendationStack";
import SkillsStack from "./components/SkillsStack";
import Title from "./components/Title";
import WriteRecommendations from "./components/WriteRecommendations";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import AddProject from "./components/AddProject";
import { Provider } from "./components/context";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Title
              name="Jayesh Talreja"
              leadtext="I am a freelancer from India"
            />
            <RecommendationStack />
            <SkillsStack />
            <ProjectSection />
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/Write-a-Recommendation">
            <WriteRecommendations />
          </Route>
          <Route exact path="/AllProjects" component={AllProjects} />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/project/:id" component={ProjectPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
