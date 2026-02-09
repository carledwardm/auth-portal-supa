import styles from "./login.module.scss";

export default function login() {
    return (
        <main className={styles.loginMain}>
            <div className={styles.loginContainer}>
                <h1 className={styles.loginTitle}>Log in</h1>
            </div>
        </main>
    )
}