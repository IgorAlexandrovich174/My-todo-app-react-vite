import { useEffect, useState } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";

export default function Timer({ task, updateTask }) {
  const { startTime, leftTime } = task;
  const [time, setTime] = useState(leftTime || 0);
  const handlePlay = () => {
    updateTask(task.id, { ...task, startTime: Date.now() });
  };

  const handlePause = () => {
    updateTask(task.id, { ...task, startTime: null, leftTime: leftTime });
  };

  useEffect(() => {
    let interval;
    if (startTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const difference = now - startTime;
        const left = leftTime - difference;
        if (left <= 0) {
          clearInterval(interval);
          setTime(0);
        } else {
          setTime(left);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, leftTime]);

  return (
    <>
      <button className="icon icon-play" onClick={handlePlay}></button>
      <button className="icon icon-pause" onClick={handlePause}></button>
      {format(new Date(time), " mm:ss")}
    </>
  );
}

Timer.propTypes = {
  task: PropTypes.shape({
    startTime: PropTypes.number,
    leftTime: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  updateTask: PropTypes.func.isRequired,
};
