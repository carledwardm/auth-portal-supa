import styles from "./GoogleLogin.module.scss";
import { useSupa } from "@/context/SupaContext";

const { supa } = useSupa();


async function handleGoogleLogin() {
    const { data, error } = await supa.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: "http://localhost:3000"
        }
    })
}

(globalThis as any).handleGoogleLogin = handleGoogleLogin;

export default function GoogleLogin() {
    return (
        <div className={styles.googleLogin}>
            <div id="g_id_onload"
                data-client_id="76215323654-gj80ej7rfb5o2qf2v2v47ophrg082hka.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="handleGoogleSignIn"
                data-login_uri="https://sbyqtmurhrlrhmcvhjlj.supabase.co/auth/v1/callback"
                data-nonce=""
                data-auto_prompt="false">
            </div>

            <div className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signup_with"
                data-size="large"
                data-logo_alignment="left">
            </div>
        </div>
    )
}