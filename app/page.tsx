'use client';
import styles from "./page.module.css";
import { useSupa } from "@/context/SupaContext";

export default function Home() {
  const { user } = useSupa();
  console.log(user);

  return (
      <main className={styles.main}>
        <h1 className={styles.userGreeting}>Hello, <span className={styles.userName}>{user?.user_metadata.first_name}</span>!</h1>
      </main>
  );
}
