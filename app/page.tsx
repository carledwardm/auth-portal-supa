'use client';
import styles from "./page.module.css";
import { useSupa } from "@/context/SupaContext";
import Toast from "@/components/Toast/Toast";
import { useState } from "react";

export default function Home() {
  const { user, supa } = useSupa();
  const [ showToast, setShowToast ] = useState<boolean>(false);
  const [ toastMessage, setToastMessage ] = useState<string>("");

  const handleLogout = async () => {
    const { error } = await supa.auth.signOut();
    if (error) {
      setShowToast(true);
      setToastMessage("There was an unexpected error, please try again.");
      return;
    }
    setShowToast(true);
    setToastMessage("Successfully signed out, redirecting.");
  }

  return (
      <main className={styles.main}>
        {!user && <h1>Hello, please log in!</h1>}
        {user && <h1 className={styles.userGreeting}>Hello, <span className={styles.userName}>
          {
            user?.user_metadata.first_name || user?.user_metadata.full_name?.split(" ")[0] || "Guest"
          }
          </span>!</h1>}

          <a href="#" onClick={handleLogout} className={styles.logoutButton}>Log Out</a>

          {showToast && 
            <Toast 
              message={toastMessage}
              onClose={() => setShowToast(false)}
            />}
      </main>
  );
}



