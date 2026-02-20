"use client"
import { useEffect, useState } from "react";
import styles from "./login.module.scss";
import Toast from "@/components/Toast/Toast";
import { useSupa } from "@/context/SupaContext";
import GoogleSignin from "@/components/GoogleOAuth/GoogleSignin"
import { useRouter } from "next/navigation";


export default function login() {
    const [ userEmail, setUserEmail ] = useState<string>("");
    const [ userPassword, setUserPassword ] = useState<string>("");
    const [ showToast, setShowToast ] = useState<boolean>(false);
    const [ toastMessage, setToastMessage ] = useState<string>("");
    const { loading, supa, user } = useSupa();
    const router = useRouter();

    useEffect(() => {
        if (user && !loading) {
            setTimeout(() => router.push("/"), 1000)
        }
    }, [loading])

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!userEmail || !userPassword) {
            setShowToast(true);
            setToastMessage("Both email and password are required.");
            return;
        }
        const auth = await supa.auth.signInWithPassword({
            email: userEmail,
            password: userPassword,
        })
        if (auth.error) {
            setShowToast(true);
            setToastMessage("Your credentials are invalid, please try again.");
            return;
        }
        if (auth.data) {
            setShowToast(true);
            setToastMessage("Successfully signed in.");
            setTimeout(() => router.push("/"), 3000);
        }
    }

    return (
        <main className={styles.loginMain}>
            <section className={styles.loginSection}>
                <h1 className={styles.loginTitle}>Log In</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <input type="text" className={styles.input} placeholder="Email" onChange={ e => setUserEmail(e.target.value)}></input>
                    <input type="password" className={styles.input} placeholder="Password" onChange={ e => setUserPassword(e.target.value)}></input>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                    <GoogleSignin />
                </form>
                <p className={styles.signupText}>Need an account? <a href="/signup" className={styles.signupLink}>Sign up</a>!</p>
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