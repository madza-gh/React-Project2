import { useTimersContext } from "../store/timers-context";
import Container from "./Container";
import { useEffect, useRef, useState } from "react";

type TimerProps = {
  name: string;
  duration: number;
};

function Timer({ name, duration }: TimerProps) {
  const [remainingTime,setRemainingTime] = useState(duration*1000)

  const interval = useRef<number | null>(null)

  const{isRunning} = useTimersContext()

  if(remainingTime <= 0 && interval.current){
    clearInterval(interval.current)
  }

  useEffect(()=>{
    let timer: number
    if(isRunning){
      timer = setInterval(()=>{
        setRemainingTime((prevTime) => Math.max(prevTime - 30,0))        // you can use this too //Math.max(prevTime - 30,0)//it`s stops the timer on zero and prevent it to become negative but instead we used if and useRef here to do that
        
        interval.current = timer
      }, 100)
    }else if(interval.current){
      clearInterval(interval.current)
    }                                                         
                                                                       
    return() =>{
      clearInterval(timer)
    }
  },[isRunning])

  
  const formattedRemainingTime = remainingTime/1000

  return (
    <Container
      ComponentType={"div"}
      className="p-3 my-3 mx-auto max-w-fit  bg-slate-800 text-slate-300 rounded-md text-center"
    >
      <p>{name}</p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

export default Timer;
