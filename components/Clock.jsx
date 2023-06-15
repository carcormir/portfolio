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

  return (
    <div className="flex flex-col items-center justify-center w-full h-full my-10">
      {time.toLocaleTimeString()}
      <div>
        {/* {time.getHours()}
        {time.getMinutes()}
        {time.getSeconds()} */}
      </div>

      <article className={styles.clock}>
        <div className={styles.hoursContainer}>
          <div className={styles.hours}></div>
        </div>
        <div className={styles.minutesContainer}>
          <div className={styles.minutes}></div>
        </div>
        <div className={styles.secondsContainer}>
          <div className={styles.seconds}></div>
        </div>
      </article>
    </div>
  )
}