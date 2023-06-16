import { useState, useEffect } from "react"
import styles from "./Clock.module.css"

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      const dateObj = new Date()
      setTime(dateObj)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

   // Calculate rotation degrees for clock hands
   const hoursRotation = (hours % 12) * 30 + minutes * 0.5;
   const minutesRotation = minutes * 6 + seconds * 0.1;
   const secondsRotation = seconds * 6;
 
   // Inline styles for clock hands
   const hoursStyle = {
     transform: `rotate(${hoursRotation}deg)`,
   };
 
   const minutesStyle = {
     transform: `rotate(${minutesRotation}deg)`,
   };
 
   const secondsStyle = {
     transform: `rotate(${secondsRotation}deg)`,
   };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full my-10">
      <article className={styles.clock}>
        <div className={styles.hoursContainer}>
          <div className={styles.hours} style={hoursStyle}></div>
        </div>
        <div className={styles.minutesContainer}>
          <div className={styles.minutes} style={minutesStyle}></div>
        </div>
        <div className={styles.secondsContainer}>
          <div className={styles.seconds} style={secondsStyle}></div>
        </div>
      </article>
    </div>
  );
}