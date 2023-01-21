import PropTypes from "prop-types";

import styles from "./notification.module.css";

export const Notification = ({message}) => {

 return (
  <h2 className={styles.title}>{message}</h2>

 )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};