import PropTypes from "prop-types";
import { RiDoubleQuotesL } from "react-icons/ri";
import css from "../../../styles/styles.module.css";
const TestimonialCard = ({ title, content, image, name, role }) => {
  return (
    <div className={css.section__card}>
      <span>
        <RiDoubleQuotesL />
      </span>
      <h4>{title}</h4>
      <p>{content}</p>
      <img src={image} alt="user" />
      <h5>{name}</h5>
      <h6>{role}</h6>
    </div>
  );
};

TestimonialCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TestimonialCard;
