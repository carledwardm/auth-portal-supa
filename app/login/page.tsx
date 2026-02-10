"use client"
import styles from "./login.module.scss";

export default function login() {
    return (
        <main className={styles.loginMain}>
            <section className={styles.loginSection}>
                <h1 className={styles.loginTitle}>Log In</h1>
                <form className={styles.loginForm}>
                    <input type="text" className={styles.input} placeholder="Username"></input>
                    <input type="password" className={styles.input} placeholder="Password"></input>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
            </section>
        </main>
        
    )
}