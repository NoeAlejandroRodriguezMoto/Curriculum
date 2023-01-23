import styles from "../../assets/styles/Contact.css";
import Title from "../atoms/Title";
import Email from "../../assets/images/Email.svg";
import GitHub from "../../assets/images/GitHub.svg";
import Text from "../atoms/Text";
import Phone from "../../assets/images/Phone.svg"
import Ubication from "../../assets/images/Vector.svg";
import information from "../../data/information";
const Contact = () => {
  return (
    <div className="Contact">
      <Title>{information.Contacto}</Title>
      <div className="Email">
        <div className="imagen">
        <img src={Email} alt="Email" />
        </div>
        <Text>{information.Email}</Text>
      </div>

      <div className="Phone">
        <div className="imagen">
        <img src={Phone} alt="Phone" />
        </div>
        <Text>{information.Telefono}</Text>
      </div>

      <div className="Ubication">
        <div className="imagen">
        <img src={Ubication} alt="Phone" />
        </div>
        <Text>{information.Ubicacion}</Text>
      </div>

      <div className="GitHub">
        <div className="imagen">
        <img src={GitHub} alt="GitHub" />
        </div>
        <Text>{information.GitHub}</Text>
      </div>


    </div>
  );
};

export default Contact;
