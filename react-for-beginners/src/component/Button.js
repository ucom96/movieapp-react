import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

//propTypes (o) PropTypes (x)
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
