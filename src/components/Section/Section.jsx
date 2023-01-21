import PropTypes from "prop-types";

import styles from "./section.module.css";


export const Section = ({children, title}) => {

    return ( <div className={styles.div}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    )
};

Section.propTypes ={
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};