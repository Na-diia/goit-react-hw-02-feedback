import PropTypes from "prop-types";

import styles from "./statistics.module.css";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

  return (<div className={styles.wrap}>
    <ul className={styles.list}>
    <li className={styles.list__item}>Good: {good}</li>
    <li className={styles.list__item}>Neutral: {neutral}</li>
    <li className={styles.list__item}>Bad: {bad} </li>
    <li className={styles.list__item}>Total: {total}</li>
    <li className={styles.list__item}>Positive feedback: {positivePercentage} %</li>
    </ul>
    </div>)
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};