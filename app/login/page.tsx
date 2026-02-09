import styles from "./login.module.scss";

export default function login() {
    return (
        <main className={styles.loginMain}>
            <section className={styles.loginSection}>
                <h1>Log In</h1>
                <form className={styles.loginForm}>
                    <input type="text" className={styles.input} placeholder="Username"></input>
                    <input type="text" className={styles.input} placeholder="Email"></input>
                    <textarea className={styles.bioInput} placeholder="Bio"></textarea>
                    <input type="password" className={styles.input} placeholder="Password"></input>
                    <button type="submit" className={styles.submitBtn}>Log in</button>
                </form>
            </section>
        </main>
        
    )
}