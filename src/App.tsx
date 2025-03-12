import Button from "./components/button"
import Form from "./components/Form"
import Input from "./components/Input"


function App(){
  return(
      <div>
        <Form>
          <Input id="title" type="text" placeholder="Title" />
          <Input id="price" type="text" placeholder="Price" />
          <Button>Add Product</Button>
        </Form>
      </div>
  )
}

export default App