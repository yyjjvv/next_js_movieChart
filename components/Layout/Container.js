import styles from "./Container.module.css";

const Container = ({ className = "", page, ...props }) => {
    const classNames = `${styles.container} ${
        page ? styles.page : ""
    } ${className}`;
    return <div className={classNames} {...props} />;
};

export default Container;
