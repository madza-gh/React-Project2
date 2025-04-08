import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

function Timers() {
  const { timers } = useTimersContext();

  return (
    <ul>
      {timers.map((item) => (
        <li key={item.name}>
          <Timer {...item} />
        </li>
      ))}
    </ul>
  );
}

export default Timers;
