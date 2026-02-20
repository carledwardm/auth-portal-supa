"use client";
import styles from "./signup.module.scss";
import { useState } from "react";
import { useSupa } from "@/context/SupaContext";
import Toast from "@/components/Toast/Toast";
import GoogleSignup from "@/components/GoogleOAuth/GoogleSignup";

export default function signup() {
    const [ userEmail, setUserEmail ] = useState<string>("");
    const [ userPassword, setUserPassword ] = useState<string>("");
    const [ userFirstName, setUserFirstName ] = useState<string>("");
    const [ showToast, setShowToast ] = useState<boolean>(false);
    const [ toastMessage, setToastMessage ] = useState<string>("");
    // Supabase client 
    const { supa } = useSupa();

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!userEmail || !userPassword) {
            setShowToast(true);
            setToastMessage("Both email and password are required.");
            return;
        }
        // Sign user up in supabase auth
        const auth = await supa.auth.signUp({
            email: userEmail,
            password: userPassword,
            options: {
                emailRedirectTo: 'http://localhost:3000/',
                data: {
                    first_name: userFirstName,
                }
            },
        })
        if (auth.data) {
            setShowToast(true);
            setToastMessage("Account created, please check your email and verify your account");      
            }
        if (auth.error) {
            setShowToast(true);
            setToastMessage("An error has occurred, please try again.");
            } 
        }  

    return (
        <main className={styles.signupMain}>
                <section className={styles.signupSection}>
                    <h1 className={styles.signupTitle}>Sign Up</h1>
                    <form className={styles.signupForm} onSubmit={handleSubmit}>
                        <input type="text" className={styles.input} placeholder="Email" onChange={ e => setUserEmail(e.target.value)}></input>
                        <input type="text" className={styles.input} placeholder="First Name" onChange={ e => setUserFirstName(e.target.value)}></input>
                        <input type="password" className={styles.input} placeholder="Password" onChange={ e => setUserPassword(e.target.value)}></input>
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                        <GoogleSignup />
                    </form>
                    <p className={styles.loginText}>Got an account? <a href="/login" className={styles.loginLink}>Log in</a>!</p>
            </section>

            {showToast && <Toast 
                message={toastMessage}
                duration={2000}
                onClose={() => {
                    setShowToast(false)
                    setToastMessage("");
                }}
            />}

        </main>
    )
}