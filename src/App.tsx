import AddTimer from "./components/AddTimer"
import TimersControl from "./components/TimersControl"
import TimersContextProvider from "./store/timers-context"


function App(){
  return(
    <TimersContextProvider>
      <div>
        <TimersControl></TimersControl>
        <AddTimer/>
      </div>
    </TimersContextProvider>
  )
  
}

export default App