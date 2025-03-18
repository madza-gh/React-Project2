import { createContext, ReactNode, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState:TimersState ={
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
  addTimers: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("TimersContext is null");
  }
  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type AddTimerAction = {
  type: 'ADD-TIMER'
  payLoad: Timer
}
type StartTimersAction ={
  type: 'START-TIMERS'
}
type StopTimersAction ={
  type: 'STOP-TIMERS'
}

type Action = AddTimerAction | StartTimersAction | StopTimersAction

function timersReducer (state: TimersState, action:Action): TimersState{
  if(action.type === 'ADD-TIMER'){
    return{
      ...state,
      timers:[
        ...state.timers,
        {
          name: action.payLoad.name,
          duration: action.payLoad.duration
        }
      ]
    }
  }
  if(action.type === 'START-TIMERS'){
    return{
      ...state,
      isRunning: true
    }
  }
  if(action.type ==='STOP-TIMERS'){
    return{
      ...state,
      isRunning: false
    }
  }

  return state
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const ContextValue: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimers(timerData) {
        dispatch({type: 'ADD-TIMER', payLoad: timerData})
    },
    startTimers() {
        dispatch({type:'START-TIMERS'})
    },
    stopTimers() {
        dispatch({type: 'STOP-TIMERS'})
    },
  };

  return (
    <TimersContext.Provider value={ContextValue}>
      {children}
    </TimersContext.Provider>
  );
}
