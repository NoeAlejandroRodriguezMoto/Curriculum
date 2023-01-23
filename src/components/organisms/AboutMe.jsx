import styles from "../../assets/styles/AboutMe.css"
import information from "../../data/information.js";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
const AboutMe = () => {
    return ( 
        <div className="aboutMe">
          <Title >{information.Sobre}</Title>
          <Text>{information.AboutMeText}</Text>
        </div>
     );
}
export default AboutMe;