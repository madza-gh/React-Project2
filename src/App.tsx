import { useRef } from "react"
import Input from "./components/Input"


function App(){
  const input = useRef<HTMLInputElement>(null)

  return(
      <div>
        <Input id="title" placeholder="Title" ref={input}></Input>
      </div> 
  )
}

export default App