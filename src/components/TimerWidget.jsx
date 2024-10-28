import React, { useState, useEffect } from "react";
import styles from "./TimerWidget.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HOURS_STEP = 3600;
const MINUTES_STEP = 60;
const SECONDS_STEP = 1;

function TimerWidget() {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [cachedSeconds, setCachedSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeRemaining((totalSeconds) => {
          if (totalSeconds > 0) return totalSeconds - 1;
          else {
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const parseTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const stepHandler = (step) => {
    if (isRunning || (step < 0 && timeRemaining + step < 0)) return;
    const newTime = timeRemaining + step;
    setCachedSeconds(newTime);
    setTimeRemaining(newTime);
  };

  const formatTime = (time) => {
    return `${time.hours.toString().padStart(2, "0")}:${time.minutes
      .toString()
      .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
  };

  const restartTimer = () => {
    setTimeRemaining(cachedSeconds);
    setIsRunning(false);
  };

  const percentage = (timeRemaining / cachedSeconds) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CircularProgressbar
          value={percentage} 
          text={formatTime(parseTime(timeRemaining))}
          styles={buildStyles({
            pathColor: "#FF6A6A",
            textColor: "#FFFFFF",
            trailColor: "transparent",
            strokeWidth: 3,
          })}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.configure}>
          <div className={styles.cell}>
            <p>Hours</p>
            <IoIosArrowUp onClick={() => stepHandler(HOURS_STEP)} />
            <p>{parseTime(cachedSeconds).hours.toString().padStart(2, "0")}</p>
            <IoIosArrowDown onClick={() => stepHandler(-HOURS_STEP)} />
          </div>
          <div className={styles.cell}>
            <p>Minutes</p>
            <IoIosArrowUp onClick={() => stepHandler(MINUTES_STEP)} />
            <p>{parseTime(cachedSeconds).minutes.toString().padStart(2, "0")}</p>
            <IoIosArrowDown onClick={() => stepHandler(-MINUTES_STEP)} />
          </div>
          <div className={styles.cell}>
            <p>Seconds</p>
            <IoIosArrowUp onClick={() => stepHandler(SECONDS_STEP)} />
            <p>{parseTime(cachedSeconds).seconds.toString().padStart(2, "0")}</p>
            <IoIosArrowDown onClick={() => stepHandler(-SECONDS_STEP)} />
          </div>
        </div>
        <div className={styles.buttons} style={{
            display:"flex",
            
        }}>
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={restartTimer}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default TimerWidget;
