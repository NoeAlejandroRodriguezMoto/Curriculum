import styles from "../../assets/styles/Skills.css"
import Title from "../atoms/Title";
import Graficas from "../../assets/images/Graficas.png"
import information from "../../data/information";
const Skills = () => {
    return ( 
        <div className="Skills">
            <Title>{information.Skills}</Title>
            <div className="Graficas">
            <img src={Graficas} alt="Graficas" />
            </div>
        </div>
     );
}
 
export default Skills;