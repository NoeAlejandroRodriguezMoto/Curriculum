import styles from "../../assets/styles/Header.css";
import Me from "../../assets/images/Me.svg";
import information from "../../data/information.js";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
const Header = () => {
  return (
    <div className="header">
      <div className="imagen">
        <img src={Me} className="Circle" alt="me" />
      </div>
      <div className="Text">
        <div className="name">
          <Title className="title">{information.Nombre}</Title>
        </div>
        <div className="profesion">
          <Text>{information.Profesion}</Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
