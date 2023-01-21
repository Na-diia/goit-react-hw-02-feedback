import PropTypes from "prop-types";

import styles from "./feedback-options.module.css";

export const  FeedbackOptions = ({options, onLeaveFeedback}) => {
   
    return (
        <ul>
        {options.map(option => (
          <button
            className={styles.btn}
            key={option}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
         </ul>
    )

};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};