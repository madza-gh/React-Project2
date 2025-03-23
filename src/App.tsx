import AddTimer from "./components/AddTimer"
import TimersControl from "./components/TimersControl"
import TimersContextProvider from "./store/timers-context"
import Timers from "./components/Timers"


function App(){
  return(
    <TimersContextProvider>
      <div>
        <TimersControl></TimersControl>
        <AddTimer/>
        <Timers/>
      </div>
    </TimersContextProvider>
  )
  
}

export default App