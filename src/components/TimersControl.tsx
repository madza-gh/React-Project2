import Button from "./button";
import { useTimersContext } from "../store/timers-context";

function TimersControl() {
  const timersCtx = useTimersContext();

  return (
    <div>
      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "stop" : "start"} Timers
      </Button>
    </div>
  );
}

export default TimersControl;
