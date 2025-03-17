import Button from "./button"
import { useTimersContext } from "../store/timers-context"


function TimersControl(){
    const timersCtx = useTimersContext()

    return(
        <div>
            <Button>{timersCtx.isRunning ? 'stop' : 'start'}</Button>
        </div>
    )
}

export default TimersControl