import Link from "next/link";
import Container from "@/components/Layout/Container";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/">WATCHIT</Link>
                <Link className={styles.setting} href="/setting">
                    설정
                </Link>
            </Container>
        </header>
    );
};

export default Header;
