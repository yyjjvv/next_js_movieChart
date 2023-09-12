import styles from "./Button.module.css";

const Button = ({ className = "", as, ...props }) => {
    return <button className={`${styles.button} ${className}`} {...props} />;
};

export default Button;
