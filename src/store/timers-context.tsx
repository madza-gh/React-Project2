import { createContext, ReactNode, useContext } from "react";

type Timer ={
    name: string
    duration: number
}

type TimersState ={
    isRunning: boolean
    timers:Timer[]
}

type TimersContextValue = TimersState &{
    addTimers: (timerData:Timer)=> void
    startTimers: ()=> void
    stopTimers: ()=> void
}

const TimersContext = createContext<TimersContextValue | null>(null)

export function useTimersContext(){
    const timersCtx = useContext(TimersContext)

    if(timersCtx === null){
        throw new Error('TimersContext is null')
    }
    return timersCtx
}

type TimersContextProviderProps={
    children: ReactNode
}

export default function TimersContextProvider({children}:TimersContextProviderProps){
    const ContextValue:TimersContextValue ={
        isRunning:true,
        timers:[],
        addTimers (timerData){},
        startTimers() {},
        stopTimers(){}
    }

    return(
        <TimersContext.Provider value={ContextValue}>{children}</TimersContext.Provider>
    )
}