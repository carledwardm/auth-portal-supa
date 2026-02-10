"use client";
import styles from "./signup.module.scss";
import { useState } from "react";

export default function signup() {
    const [ username, setUsername ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ bio, setBio ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log(username, email, bio, password);
    }

    return (
        <main className={styles.signupMain}>
                <section className={styles.signupSection}>
                    <h1 className={styles.signupTitle}>Sign Up</h1>
                    <form className={styles.signupForm} onSubmit={handleSubmit}>
                        <input type="text" className={styles.input} placeholder="Username" onChange={ e => setUsername(e.target.value)}></input>
                        <input type="text" className={styles.input} placeholder="Email" onChange={ e => setEmail(e.target.value)}></input>
                        <textarea className={styles.bioInput} placeholder="Bio" onChange={ e => setBio(e.target.value)}></textarea>
                        <input type="password" className={styles.input} placeholder="Password" onChange={ e => setPassword(e.target.value)}></input>
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </form>
            </section>
        </main>
    )
}