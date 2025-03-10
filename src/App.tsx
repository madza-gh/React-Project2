import Button from "./components/button"
import Container from "./components/Container"
import Input from "./components/Input"

function App(){
  return(
    <div className="bg-slate-600 text-center mt-4 p-5 mx-auto rounded-md max-w-xl ">
      <Input id="title" placeholder="title" type="text"></Input>
      <Input id="price" placeholder="price" type="number"></Input>
      <div>
        <p>
          <Button>Button</Button>
        </p>
        <p>
          <Button href="">Link</Button>
        </p>
      </div>
      <div>
        <Container ComponentType={Button}/>
      </div>
    </div>
    
  )
}

export default App