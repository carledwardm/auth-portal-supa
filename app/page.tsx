'use client';
import styles from "./page.module.css";
import { useSupa } from "@/context/SupaContext";

export default function Home() {
  const { user } = useSupa();

  const handleLogout = async () => {
    console.log("Logging out!");
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
      </main>
  );
}



