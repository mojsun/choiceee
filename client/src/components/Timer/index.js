import React, { useState, useEffect } from "react";
import explosionIcon from "../Timer/explosion.png";
import "../../scss/components/Timer.scss";
function CountdownTimer() {
  const [timer, setTimer] = useState(48 * 60 * 60); // Initial timer value in seconds (48 hours)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1); // Decrement the timer by 1 second
      }
    }, 1000); // Run the interval every 1 second (1000 milliseconds)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timer]);

  // Convert the remaining seconds into hours, minutes, and seconds
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div className="bg-dark text-white p-3 d-flex justify-content-center align-items-center ">
      <img
        src={explosionIcon}
        alt="explosion icon"
        className="explosionicon p-2 "
      ></img>
      <p>
        <span className="fw-bold text-warning h5"> Sales </span> {hours} hours,{" "}
        {minutes} minutes, {seconds} seconds remaining
        <span className="fw-bold text-warning h5"> Sales</span>
      </p>
      <img
        src={explosionIcon}
        alt="explosion icon"
        className="explosionicon p-2 "
      ></img>
    </div>
  );
}

export default CountdownTimer;
