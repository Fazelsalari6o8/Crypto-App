// hooks
import { useEffect, useState } from "react";

// style
import styles from "./ShowTime.module.css";

function ShowTime() {
  const date = new Date();
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
      setShow((show) => !show);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  return (
    <div className={styles.container}>
      <p>{hours}</p>
      <p className={show ? styles.showS : null}>:</p>
      <p>{minutes}</p>
    </div>
  );
}

export default ShowTime;
