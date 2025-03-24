import Button from "./button";
import { useTimersContext } from "../store/timers-context";

function TimersControl() {
  const timersCtx = useTimersContext();

  return (
    <div className=" p-3 my-3 mx-auto max-w-fit  bg-slate-800 text-slate-300 rounded-md ">
      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers


      </Button>
    </div>
  );
}

export default TimersControl;
