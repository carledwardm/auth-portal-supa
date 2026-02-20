import styles from "./TrailField.module.scss";

export default function TrailField() {
    const numStars = 15;
    return (
        <div className={styles.trailContainer}>
            {Array.from({ length: numStars }).map((_, i) => (
                <div
                    key={i}
                    className={styles.trail}
                    style={{
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                        animationDelay: `${Math.random() * 15}s`,    
                    }}
                ></div>
            ))}
        </div>
    )
}