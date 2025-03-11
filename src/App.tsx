import Button from "./components/button"
import Container from "./components/Container"


function App(){
  return(

      <div>
        <Container ComponentType={Button} onClick={()=>{console.log('clicked')}}>Add Product</Container>
      </div> 
  )
}

export default App