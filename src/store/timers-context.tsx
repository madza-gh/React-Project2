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

type Action ={
    type: 'ADD-TIMER' | 'START-TIMERS' | 'STOP-TIMERS'
}

function timersReducer (state: TimersState, action:Action): TimersState{

}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const ContextValue: TimersContextValue = {
    isRunning: true,
    timers: [],
    addTimers(timerData) {
        dispatch({type: 'ADD-TIMER'})
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
