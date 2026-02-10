import styles from "./signup.module.scss";

export default function signup() {
    return (
        <main className={styles.signupMain}>
                <section className={styles.signupSection}>
                    <h1 className={styles.signupTitle}>Sign Up</h1>
                    <form className={styles.signupForm}>
                        <input type="text" className={styles.input} placeholder="Username"></input>
                        <input type="text" className={styles.input} placeholder="Email"></input>
                        <textarea className={styles.bioInput} placeholder="Bio"></textarea>
                        <input type="password" className={styles.input} placeholder="Password"></input>
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </form>
            </section>
        </main>
    )
}