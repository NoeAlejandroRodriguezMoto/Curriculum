import styles from "../../assets/styles/Education.css"
import information from "../../data/information";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
const Education = () => {
    return ( 
        <div className="Education">
           <Title>{information.Formacion}</Title><br />
           <Text>{information.Primaria}</Text>
           <Text>{information.Secundaria}</Text>
           <Text>{information.Preparatoria}</Text>
           <Text>{information.Universidad}</Text>

           <Title>{information.ap}</Title> <br />
           <Text>{information.Flexibilidad}</Text>
           <Text>{information.Creatividad}</Text>
           <Text>{information.Resolucion}</Text>
           <Text>{information.Comu}</Text><br />
        </div>
        
     );
}
 
export default Education;