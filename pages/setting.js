import styles from "@/styles/Setting.module.css";

import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";

const Setting = () => {
    return (
        <>
            <h1 className={styles.title}>설정</h1>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>테마 설정</h2>
            </section>
        </>
    );
};

export default Setting;
