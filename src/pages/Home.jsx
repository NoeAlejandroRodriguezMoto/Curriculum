import Header from "../components/organisms/Header";
import AboutMe from "../components/organisms/AboutMe";
import Skills from "../components/organisms/Skills";
import Contact from "../components/organisms/Contact";
import Education from "../components/organisms/Education";
import styles from "../assets/styles/Home.css";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="left">
          <AboutMe></AboutMe>
          <Contact></Contact>
        </div>
        <div className="right">
          <Skills></Skills>
          <Education></Education>
        </div>
      </div>
    </>
  );
};

export default Home;
